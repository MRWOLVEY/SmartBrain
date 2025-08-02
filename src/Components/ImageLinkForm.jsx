import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Context";
import "../App.css";

const ImageLinkForm = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const { state, dispatch, actions } = useContext(Context);

  const createBox = ({ topRow, leftCol, bottomRow, rightCol }) => {
    const image = document.querySelector("#inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    // return {
    //   left_col: leftCol * width,
    //   tow_row: topRow * height,
    //   right_col: width - rightCol * width,
    //   bottom_row: height - bottomRow * height,
    // };
    return {
      left: leftCol * width,
      top: topRow * height,
      right: width - rightCol * width,
      bottom: height - bottomRow * height,
    };
  };

  const handleFetch = (imageUrl) => {
    const PAT = "773ba4e7c86e484f89a479b3ebb983a0";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = "clarifai";
    const APP_ID = "main";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: imageUrl,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "/clarifai-api/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const regions = result.outputs[0].data.regions;
        console.log("regions", regions);
        regions.forEach((region) => {
          // Accessing and rounding the bounding box values
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          const box = createBox({
            topRow,
            leftCol,
            bottomRow,
            rightCol,
          });
          // Dispatching the action to set the boxes in the state
          dispatch({ type: actions.SET_BOXES, payload: box });

          region.data.concepts.forEach((concept) => {
            // Accessing and rounding the concept value
            const name = concept.name;
            const value = concept.value.toFixed(4);

            console.log(
              `${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`
            );
          });
        });
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUrl(input);
    dispatch({ type: actions.CLEAR_STATE });
    dispatch({ type: actions.SET_URL, payload: input });
    // console.log(actions.SET_URL, input);
  };
  useEffect(() => {
    if (state.imgUrl) {
      handleFetch(state.imgUrl);
    }
    // console.log("URL changed:", url);
  }, [state.imgUrl]);

  return (
    <div className="flex justify-center">
      <div className=" p-3 flex flex-col items-center gap-2 flex-grow max-w-3xl">
        <p>
          This Magic Brain will detect faces in your pictures, Give it a try :)
        </p>
        <form className="formStyle flex shadow-xl h-20 w-full  items-center rounded p-6">
          <input
            onChange={(e) => {
              setInput(e.target.value);
              console.log(e.target.value);
            }}
            className="bg-gray-100 h-8 flex-4/6 focus:border-none focus:outline-none p-1 "
            type="text"
          />
          <button
            onClick={handleSubmit}
            className="h-8 flex-2/6 rounded-r-lg border border-white bg-pink-600 text-white p-1 hover:scale-105 transition-all duration-200 active:bg-pink-800 active:scale-95"
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageLinkForm;

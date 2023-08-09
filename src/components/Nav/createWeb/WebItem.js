import React from "react";

const WebItem = (props) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <>
      <div className="grid grid-cols-5   cursor-pointer font-mono text-xl text-blue-300">
        <div className="mx-[10px] ">{props.webName}</div>
        <div className="mx-[10px] ">{props.name}</div>
        <div className="mx-[10px] ">{props.EmailID}</div>
        <div className="mx-[10px] ">{props.Mobile}</div>
        <div>
          <button
            onClick={deleteHandler}
            className="text-white text-lg bg-green-500 rounded-lg w-[100px] h-[40px] hover:scale-105 duration-500 active:bg-green-300 active:text-green-700"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default WebItem;

import React from "react";
import WebItem from "./WebItem";

const ProjectData = (props) => {
  if (props.projects.length === 0) {
    return <h2 className="text-2xl text-center text-red-500">No Expenses</h2>;
  }
  function showOff() {
    console.log(props.projects);
  }
  function onDelete(id) {
    props.onDelete(id);
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 font-bold text-2xl">
        <div>Web Name</div>
        <div>Name</div>
        <div>Email ID</div>
        <div>Mobile</div>
      </div>
      {props.projects.map((project) => (
        <WebItem
          id={project.id}
          onDelete={onDelete}
          webName={project.webName}
          name={project.name}
          EmailID={project.EmailID}
          Mobile={project.Mobile}
        />
      ))}
      {/* <div className="grid grid-cols-5 font-bold text-2xl">
        <div>Web Name</div>
        <div>Name</div>
        <div>Email ID</div>
        <div>Mobile</div>
      </div>
      {props.projects.map((project) => (
        <WebItem
          id={project.id}
          onDelete={onDelete}
          webName={project.webName}
          name={project.name}
          EmailID={project.EmailID}
          Mobile={project.Mobile}
        />
      ))} */}
    </div>
  );
};

export default ProjectData;

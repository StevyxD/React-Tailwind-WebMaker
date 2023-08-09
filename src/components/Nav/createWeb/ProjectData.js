import React from "react";
import WebItem from "./WebItem";

const ProjectData = (props) => {
  if (props.projects.length === 0) {
    return <h2>No Expenses</h2>;
  }
  function showOff() {
    console.log(props.projects);
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 font-bold text-2xl">
        <div>Web Name</div>
        <div>Name</div>
        <div>Email ID</div>
        <div>Mobile</div>
      </div>
      {props.projects.map((project) => (
        <WebItem
          webName={project.webName}
          name={project.name}
          EmailID={project.EmailID}
          Mobile={project.Mobile}
        />
      ))}
    </div>
  );
};

export default ProjectData;

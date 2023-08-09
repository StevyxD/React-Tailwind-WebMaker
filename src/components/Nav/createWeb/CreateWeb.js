import React, { useState } from "react";
import Form from "./CreateWebForm";
import ProjectData from "./ProjectData";

const sampleData = [{}];

const CreateWeb = () => {
  const [form, setForm] = useState(false);
  const [memberData, setMemberData] = useState(sampleData);

  function startWebsite() {
    setForm(!form);
  }
  function stopWebsite() {
    console.log("stop website");
    setForm(!form);
  }

  function dataSetter(data) {
    stopWebsite();
    setMemberData((prevData) => {
      return [...prevData, data];
    });
    console.log(memberData);
    console.log(data);
  }
  function onDelete(id) {
    const newMemberData = memberData.filter((data) => {
      return data.id !== id;
    });
    setMemberData(newMemberData);
  }

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center">
        <div>
          {!form && (
            <button
              onClick={startWebsite}
              className="bg-green-500 text-gray-200 w-[200px] h-[50px] rounded hover:scale-105 hover:text-green-400 active:scale-90 active:bg-green-500 active:text-gray-200 hover:bg-green-100 duration-300"
            >
              Order a project
            </button>
          )}
        </div>
        <div>
          {form && <Form stopWebsite={stopWebsite} formData={dataSetter} />}
        </div>
        <div className="mt-[100px] border w-[800px] lg:w-full border-gray-700 shadow-xl hover:border-gray-300 duration-[900ms]  ">
          {!form && <ProjectData projects={memberData} onDelete={onDelete} />}
        </div>
      </div>
    </div>
  );
};

export default CreateWeb;

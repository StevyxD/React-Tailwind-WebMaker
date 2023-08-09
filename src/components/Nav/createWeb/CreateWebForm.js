import React, { useState } from "react";

const CreateWebForm = (props) => {
  const [memberData, setMemberData] = useState({
    webName: "",
    name: "",
    EmailID: "",
    Mobile: "",
  });

  const handleChange = (e) => {
    setMemberData({
      ...memberData,
      id: Math.floor(Math.random() * 100).toString(),
      [e.target.name]: e.target.value,
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(memberData);
    props.formData(memberData);
    setMemberData({
      EmailID: "",
      webName: "",
      name: "",
      Mobile: "",
    });
  }
  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="flex hover:border-white hover:scale-105 duration-500 h-[500px] flex-col  border-gray-900 border shadow-lg items-center md:w-[500px] w-[300px]">
          <div className="w-full flex justify-around mt-9">
            <div>
              <label className="font-mono text-xl text-blue-400" for="web">
                Web Name
              </label>
            </div>
            <div>
              <input
                name="webName"
                id="web"
                type="text"
                value={memberData.webName}
                onChange={handleChange}
                placeholder="Web Name"
                className="rounded-xl text-black font-bold"
              />
            </div>
          </div>

          <div className="w-full flex justify-around mt-9">
            <div>
              <label className="font-mono text-xl text-blue-400" for="name">
                Your Name
              </label>
            </div>
            <div>
              <input
                name="name"
                value={memberData.name}
                id="name"
                type="text"
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl text-black font-bold"
              />
            </div>
          </div>

          <div className="w-full flex justify-around mt-9">
            <div>
              <label className="font-mono text-xl text-blue-400" for="phone">
                Your Number
              </label>
            </div>
            <div>
              <input
                name="Mobile"
                onChange={handleChange}
                id="phone"
                type="number"
                value={memberData.Mobile}
                placeholder="Your Number"
                className="rounded-xl text-black font-bold"
              />
            </div>
          </div>

          <div className="w-full flex justify-around mt-9">
            <div>
              <label className="font-mono text-xl text-blue-400" for="email">
                Your Email
              </label>
            </div>
            <div>
              <input
                name="EmailID"
                id="email"
                onChange={handleChange}
                type="text"
                placeholder="Your Email"
                value={memberData.EmailID}
                className="rounded-xl text-black font-bold"
              />
            </div>
          </div>
          <div className="mt-[30px] flex">
            <div>
              <button
                onClick={props.stopWebsite}
                className="m-[4px] text-white rounded w-[150px] h-[50px] hover:scale-105 duration-500 bg-green-400"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="m-[4px] text-white rounded w-[150px] h-[50px] hover:scale-105 duration-500 bg-green-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateWebForm;

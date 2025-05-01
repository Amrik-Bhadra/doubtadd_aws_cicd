import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const NewDoubtForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [domain, setDomain] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const question = {
      title: title,
      body: body,
      domain: domain,
      up_vote_count: 0,
      down_vote_count: 0,
    };

    try {
      const response = await axios.post(
        "https://5a0nipz8bf.execute-api.ap-south-1.amazonaws.com/dev/questions",
        question,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data posted successfully:", response.data);
      toast.success("Question posted successfully!");
      onClose();
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Error posting question. Please try again.");
    }
  };

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-60">
      <div className="p-5 bg-white rounded-md w-[50%] flex flex-col gap-3">
        <h1 className="font-semibold text-3xl mb-3 text-[#464646]">
          Whats Your Doubt?
        </h1>
        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded-md border border-gray-300 focus:outline-[#0077b6]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-2 rounded-md border border-gray-300 focus:outline-[#0077b6]"
            ></textarea>
            <select
              type="text"
              placeholder="Domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="p-2 rounded-md border border-gray-300 focus:outline-[#0077b6]"
            >
              <option value="" disabled hidden>
                Select Domain
              </option>
              <option value="">All</option>
              <option value="cloud">Cloud</option>
              <option value="dsa">DSA</option>
              <option value="ai-ml">AI/ML</option>
              <option value="python">Python</option>
              <option value="mern">MERN Stack</option>
            </select>
          </div>
          <span className="flex items-center gap-3 mt-2">
            <button className="bg-[#0077b6] text-white px-3 py-2 mt-3 rounded-md">
              Submit
            </button>
            <button
              onClick={onClose}
              className="bg-[#eee] text-[#333] px-3 py-2 mt-3 rounded-md"
            >
              Discard
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default NewDoubtForm;

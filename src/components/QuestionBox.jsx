import React from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const QuestionBox = ({ question, showBtn }) => {
  const navigate = useNavigate();
  const time = new Date(question.timestamp).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className="w-full bg-white py-5 px-5 border rounded-lg flex flex-col justify-center gap-y-3">
      <span className="flex items-center justify-between">
        <h2 className="font-semibold text-[#333] text-base">
          {question.title}
        </h2>
        <p className="text-sm px-3 py-2 text-[#0077b6] font-medium rounded-md border border-[#0077b6]">
          {question.domain}
        </p>
      </span>
      <p className="text-sm text-gray-500">{question.body}</p>

      <div className="mt-2 flex items-center justify-between">
        <span className="flex gap-5 items-center">
          <p className="text-[#9b9b9b] mr-4 text-md">
            <span className="font-semibold text-[#333]">Posted on:</span> {time}
          </p>
          <span className="flex gap-1 items-center">
            <IoMdThumbsUp size={20} className="text-[#00a896]" />{" "}
            <p className="font-semibold text-[#464646]">
              {question.up_vote_count}
            </p>
          </span>
          <span className="flex gap-1 items-center">
            <IoMdThumbsDown size={20} className="text-[#da1e37]" />{" "}
            <p className="font-semibold text-[#464646]">
              {question.down_vote_count}
            </p>
          </span>
        </span>
        <span className="flex gap-5 items-center">
          <button>
            <IoMdThumbsUp size={25} className="text-[#ccc]" />
          </button>
          <button>
            <IoMdThumbsDown size={25} className="text-[#ccc]" />
          </button>
          {showBtn && (
            <button onClick={()=>{
                navigate(`/question/${question.question_id}`, { state: { question } });
            }} className="px-3 py-2 bg-[#333] text-white rounded-md">
              View Answers
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export default QuestionBox;

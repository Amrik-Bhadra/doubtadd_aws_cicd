import React, { useEffect, useState } from "react";
import QuestionBox from "../components/QuestionBox";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Question = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const location = useLocation();
  const question = location.state?.question || null;

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get(
          `https://5a0nipz8bf.execute-api.ap-south-1.amazonaws.com/dev/answers?questionId=${questionId}`
        );
        setAnswers(response.data);
        console.log(response.data); // Optional: inspect response
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };

    fetchAnswers();
  }, [questionId]);

  return (
    <div className="py-3">
      <QuestionBox question={question} showBtn={false} />

      <div className="ans-div border mt-3 py-2">
        <span className="flex justify-between items-center px-2">
          <h2 className="text-lg font-medium">
            All Replies ({answers.length})
          </h2>
          <button className="px-3 py-2 bg-[#333] text-white rounded-md">
            Add Reply
          </button>
        </span>

        <div className="flex flex-col gap-3 h-[83%] mt-4 w-full overflow-y-auto">
          {answers.length > 0 ? (
            answers.map((ans, index) => (
              <div key={index} className="border p-3 rounded bg-gray-100">
                <p>{ans.answer}</p>
              </div>
            ))
          ) : (
            <p>No answers yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;

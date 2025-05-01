import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import QuestionBox from "../components/QuestionBox";

const itemsPerPage = 10;

const Home = () => {
  const [data, setData] = useState([]);
  const [domain, setDomain] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryDomain = domain == "" ? "" : `/${domain}`;
        const response = await axios.get(
          `https://5a0nipz8bf.execute-api.ap-south-1.amazonaws.com/dev/questions${queryDomain}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [domain]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryDomain = domain == "" ? "" : `/${domain}`;
        const response = await axios.get(
          `https://5a0nipz8bf.execute-api.ap-south-1.amazonaws.com/dev/questions${queryDomain}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-2 h-full">
        <span className="flex justify-between items-center">
          <h1 className="text-lg">{domain === "" ? "All" : `${domain.at(0).toUpperCase()+domain.substring(1)}`} Domain ({data.length})</h1>
          <div className="filter-div flex items-center gap-2 w-[40%]">
            {/* search bar */}
            <span className="flex items-center justify-center w-3/5 h-10 bg-white border border-gray-300 rounded-lg shadow-sm overflow-clip">
              <input
                type="text"
                placeholder="Search for doubts..."
                className="w-full h-full px-4 text-gray-700 border-none rounded-l-md focus:outline-none "
              />
              <button className="h-full px-3 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-r-md">
                <IoSearch size={20} />
              </button>
            </span>

            {/* dropdown for filter */}
            <span className="flex items-center justify-center w-2/5 h-10 bg-white border border-gray-300 rounded-lg shadow-sm overflow-clip">
              <select
                defaultValue=""
                className="w-full h-full outline-none px-2 text-gray-700 border-none rounded-md focus:outline-none"
                onChange={(e) => setDomain(e.target.value)}
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
            </span>
          </div>
        </span>

        <div className="flex flex-col gap-3 h-[83%] mt-4 w-full overflow-y-auto">
          {currentData.map((question, index) => (
            <QuestionBox key={index} question={question} showBtn={true} />
          ))}
        </div>

        <span className="flex gap-2 my-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } hover:bg-gray-300`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </span>
      </div>      
    </>
  );
};

export default Home;

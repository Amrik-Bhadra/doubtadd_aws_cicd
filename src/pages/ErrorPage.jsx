import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoAlertFill } from "react-icons/go";

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center">
        <div className="flex justify-center mb-4 text-red-500">
          <GoAlertFill size={48} />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Oops!</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or something went wrong.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage

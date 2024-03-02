import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
// import toast from 'react-hot-toast';

const History = () => {
  const [predictionList, setpredictionList] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );

  const getpredictionData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/history/getbyuser/${currentUser._id}`
    );
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setpredictionList(data);
  };

  useEffect(() => {
    getpredictionData();
  }, []);

  const deleteprediction = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/image/delete/` + id,
      {
        method: "DELETE",
      }
    );
    console.log(res.status);
    if (res.status === 200) {
      getpredictionData();
      toast.success("Prediction Deleted successfully");
    }
  };

  return (
    <div className="vh-100 bg-body-secondary">
      <div className="container py-4 mt-2">
        <h1 className="text-center mb-4 mt-5 text-bold">
          Your Diagnosed History
        </h1>
        <table className="table table-bordered table align-middle text-center table-hover table-warning shadow-lg">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Model</th>
              <th>Image</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(predictionList) &&
              predictionList.map((prediction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{new Date(prediction.createdAt).toLocaleDateString()}</td>

                  <td>{prediction.result.className}</td>
                  <td>
                    <button
                      onClick={() => deleteprediction(prediction._id)}
                      className="btn btn-danger button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;

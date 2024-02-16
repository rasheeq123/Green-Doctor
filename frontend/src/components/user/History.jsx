import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
// import toast from 'react-hot-toast';

const History = () => {
  const [predictionList, setpredictionList] = useState([]);

  const getpredictionData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/image/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setpredictionList(data);
  }

  useEffect(() => {
    getpredictionData();
  }, []);

  const deleteprediction = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/image/delete/` + id, {
      method: 'DELETE'
    });
    console.log(res.status);
    if (res.status === 200) {
      getpredictionData();
      toast.success("Prediction Deleted successfully");
    }
  }

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="container py-4 mt-2">
        <h1 className='text-center mb-4 mt-5 text-bold'>Your Diagnosed History</h1>

        <table className='table table-bordered table align-middle text-center table-hover table-warning shadow-lg'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Predicted On</th>
              <th>Image</th>
              <th>Prediction Result</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(predictionList) && predictionList.map((prediction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{new Date(prediction.createdAt).toLocaleDateString()}</td>
                <td>
                  {prediction.items.map(item => (
                    <div key={item.id} className='d-flex align-items-center justify-content-between bg-white p-4'>
                      <img height={50} src={`${process.env.REACT_APP_VINTIMART_URL}/${item.image}`} alt="" />
                    </div>
                  ))}
                </td>
                <td>{prediction.result}</td>
                <td>
                  <button onClick={() => deleteprediction(prediction._id)} className='btn btn-danger button'>Delete</button>
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

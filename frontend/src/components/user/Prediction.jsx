import React, { useCallback, useEffect, useRef, useState } from "react";
import app_config from "../../config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import {
  CameraAlt,
  Close,
  CloudUpload,
  CropSharp,
  PhotoAlbumRounded,
  PhotoCamera,
  PhotoCameraFront,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";


const AIModels = [
  'Apple',
  'AloeVera',
  'Wheat',
  'Rose',
  'Potato',
  'Peach',
  'Tomato',
  'Pepper',
  'Tomato',
  'Cherry',
  'Banana'
]

const Prediction = () => {
  const { modelPath, cureData } = app_config;

  const [selModel, setSelModel] = useState('');

  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(null);

  const [selImg, setSelImg] = useState("");

  const [selImage, setSelImage] = useState("");

  const [predictionLoading, setPredictionLoading] = useState(false);

  const [loadedImage, setLoadedImage] = useState(null);

  const [result, setResult] = useState(null);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const handleModelChange = (event) => {
    const selectedModel = (event.target.value.toLowerCase());
    setSelModel(selectedModel);

     // Show toaster notification 
  
     toast.success(`Model ${selectedModel} selected`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  });
  };

  let webcam, labelContainer;

  const [camOpen, setCamOpen] = useState(false);

  const navigate = useNavigate();

  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Do something with the captured image (e.g., send it to a server)
    // console.log(imageSrc);
    
    const img = new Image();
    img.src = imageSrc;
    setSelImage(imageSrc);
    setLoadedImage(img);
    setCamOpen(false);
  }, []);

  const stopWebcam = () => {
    setCamOpen(false);

  };

  const predictionResultExtractor = (prediction) => {
    let tempRes = prediction.find(
      (pred) =>
        pred.probability ===
        Math.max(...prediction.map((pred) => pred.probability))
    );
    if (tempRes.probability < 0.5) {
      return { className: "Sorry! Unknown Plant", probability: 0 };
    }
    return tempRes;
  };

  const uploadFile = (file) => {
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(`${import.meta.env.VITE_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const saveHistory = async (res) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/prediction/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: selImg,
          user: currentUser._id,
          result: res,
          createdAt: new Date(),
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  async function init() {

    //apple model 
    const modelURL = modelPath + `/${selModel}/model.json`;
    const metadataURL = modelPath + `/${selModel}/metadata.json`;

    //  wheat model
    // const modelURL_wheat = modelPath + "/wheat/model.json";
    // const metadataURL_wheat = modelPath + "/wheat/metadata.json";
   

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    // let modelT = await window.tmImage.load(modelURL, metadataURL); //human erron tm by mistake
    // let modelT = await window.Image.load(modelURL, metadataURL);
    let modelT = await window.tmImage.load(modelURL, metadataURL);
    setMaxPredictions(modelT.getTotalClasses());
    setModel(modelT);
    console.log(selModel , ' Model loaded');
  }

  const predictFromImage = async () => {
    setPredictionLoading(true);
    const prediction = await model.predict(loadedImage);
    setPredictionLoading(false);
    console.log(prediction);
    let res = predictionResultExtractor(prediction);
    console.log(res);
    // if (res.probability === 1) {
    //   res = { className: 'Sorry! Unknown Plant', probability: 0 };
    // }
    setResult(res);

    // saveHistory(predictionResultExtractor(prediction));
    <Swal className="fire"></Swal>
    ({
      title: "Success",
      icon: "success",
      text: "Prediction Completed",
    });
  };

  useEffect(() => {
    
    if(selModel)
      init();

  }, [selModel]);

  const handleImageUpload = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    // Check file type before uploading
    if (!isValidImageType(file)) {
      alert("Invalid file type. Please select a valid image (jpg, png, jpeg).");
      return;
    }
    setSelImg(file.name);
    uploadFile(file);
    const img = new Image();

    // Validate if a file is selected
    if (file) {
      // Create a FileReader to read the file
      const reader = new FileReader();
      console.log();
      // Set up the FileReader onload event
      reader.onload = function (loadedEvent) {
        // Set the image source to the uploaded image data
        console.log("loaded");
        img.src = loadedEvent.target.result;
        setSelImage(loadedEvent.target.result);
        setLoadedImage(img);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  // Function to check if the file type is a valid image type
  const isValidImageType = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    return allowedTypes.includes(file.type);
  };
  // Function to handle image removal
  const handleRemoveImage = () => {
    setSelImage(null);
    setLoadedImage(null);
    setSelImg("");
  };

  const getDiseaseData = () => {
    sessionStorage.setItem(
      "diseaseData",
      JSON.stringify(cureData.find((d) => d.diseaseName === result.className))
    );
  };

  const getPlantStatus = () => {
    if (result.className.toLowerCase().includes("healthy")) {
      return (
        <p className="display-4 fw-bold text-success text-center">
          Congratulations!! Your plant is Healthy
        </p>
      );
    } else if (result.className === "Sorry! Unknown Plant") {
      return (
        <p className="display-4 fw-bold text-warning text-center">
          Sorry! Unknown Plant
        </p>
      );
    } else {
      getDiseaseData();
      return (
        <>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="error"
            textAlign="center"
            sx={{ mt: 4 }}
          >
            Oops!! Your plant has been detected with disease: {result.className}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                to="/user/cure"
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  fontSize: "1.5rem",
                  py: 1,
                  borderRadius: 8,
                  textTransform: "none",
                  width: "565px",
                }}
              >
                Find Cure for Your Disease{" "}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Button>

              <Button
                component={Link}
                to="/user/history"
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  fontSize: "1.5rem",
                  py: 1,
                  borderRadius: 8,
                  textTransform: "none",
                  width: "565px",
                }}
              >
                View Diagnosed History{" "}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Button>
            </Box>
          </div>
        </>
      );
    }
  };

  return (
    <Box
      sx={{
        mt: 7,
        minHeight: "110vh",
      }}
    >
      <Box sx={{ background: "linear-gradient(to bottom, #23074d, #cc5333)" }}>
        <div className="container py-5 ">
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Decrypting Your Garden's Leafy Secrets!
          </Typography>
        </div>
      </Box>
      <Container>
      {/* <select className="form-control" onChange={e => setSelModel(e.target.value.toLowerCase())}>
        <option value="">Select a Model</option>
        {
          AIModels.map( modelName => <option value={modelName}>{modelName}</option> )
        }
      </select> */}
    <ToastContainer />
    <FormControl required fullWidth sx={{mt:2}}>
      <InputLabel id="model-select">
        Select a Model
      </InputLabel>
      <Select
      labelId="model-select"
      id= 'model-select-required'
        value={selModel}
        onChange={handleModelChange}
        label="Select a Model "
      >
        <MenuItem value="">
          Select a Model
        </MenuItem>
        {AIModels.map((modelName) => (
          <MenuItem key={modelName} value={modelName.toLowerCase()}>
            {modelName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        <div className="row mt-4">
          <div className="col-md-6">
            <Paper
              elevation={24}
              className="card"
              sx={{
                borderRadius: 2,
                minHeight: 400,
                // backgroundSize: '100% 100%',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/C1.jpg')`,
              }}
            >
              <div className="card-header">
                <Typography
                  variant="h3"
                  align="center"
                  color={"white"}
                  sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Use Camera
                </Typography>
              </div>
              <div className="">
                {camOpen ? (
                  <>
                    <Webcam
                      videoConstraints={{
                        facingMode: "environment",
                        FACING_MODE_ENVIRONMENT: "environment",
                      }}
                      ref={webcamRef}
                      style={{ width: "100%", height: "100%" }}
                      screenshotFormat="image/jpeg"
                    />
                    <Button
                      style={{
                        position: "absolute",
                        top: 15,
                        left: "50%",
                        transform: "translateX(-50%)",
                        px: 2,
                        py: 1,
                        borderRadius: 23,
                        mt: 2,
                        textTransform: "none",
                        width: "50%",
                      }}
                      variant="contained"
                      color="primary"
                      onClick={captureImage}
                    >
                      <PhotoCamera />
                      <Typography variant="h5">Capture Image</Typography>
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{
                          mb: 1,
                          mt: 1,
                          borderRadius: 5,
                          textTransform: "none",
                        }}
                        onClick={stopWebcam}
                        startIcon={<Close />}
                      >
                        Close
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Box className="cam-container">
                    <Box
                      className="overlay"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Box></Box>
                      <Tooltip title="Open Camera" arrow>
                        <IconButton onClick={(e) => setCamOpen(true)}>
                          <CameraAlt
                            fontSize="large"
                            style={{ color: "white" }}
                          />
                        </IconButton>
                      </Tooltip>
                      <p
                        className="text-center h1 mt-4 py-4 px-5"
                        style={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          fontSize: "18px",
                          color: "white",
                        }}
                      >
                        For accurate predictions, ensure you're in good light.
                        Capture a clear photo to help us analyze your plant's
                        condition.
                      </p>
                    </Box>
                  </Box>
                )}
              </div>
            </Paper>
          </div>
          <Paper
            elevation={24}
            className="col-md-6 mx-auto"
            sx={{
              borderRadius: 2,
              minHeight: 400,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/H2.jpg')`,
            }}
          >
            <div className="card-header">
              <Typography
                variant="h3"
                align="center"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  mt: 1,
                }}
              >
                Upload from Device
              </Typography>
            </div>
            <Box sx={{ textAlign: "center" }}>
              <label htmlFor="leaf-image">
                <Button
                  variant="contained"
                  color="primary"
                  // size="small"
                  sx={{
                    px: 4,
                    py: 1,
                    borderRadius: 8,
                    mt: 1.5,
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                  startIcon={<CloudUpload />}
                  component="div" // Allows the button to act as a label for the input
                >
                  Upload Leaf Image
                </Button>
              </label>
              <input
                hidden
                type="file"
                onChange={handleImageUpload}
                id="leaf-image"
              />

              {selImage ? (
                <div>
                  <img
                    style={{ height: "350px" }}
                    className="d-block m-auto mt-2 mb-1"
                    src={selImage}
                    alt=""
                  />
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      mb: 1,
                      mt: 1,
                      borderRadius: 5,
                      textTransform: "none",
                    }}
                    onClick={handleRemoveImage}
                    startIcon={<Close />}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <p
                  className="text-center h1 mt-4 py-4 px-5"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  Sharper Images, Better Insights, For the most accurate
                  diagnosis, upload a sharp and clear picture of the leaf.
                </p>
              )}
            </Box>
          </Paper>
        </div>
        {result && getPlantStatus()}

        {loadedImage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 10,
                textTransform: "none",
                mb: 2,
                py: 1,
                width: "50%",
              }}
              color="primary"
              onClick={predictFromImage}
            >
              {predictionLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                    Predicting...
                </>
              ) : (
                <Typography variant="h5">Predict Disease</Typography>
              )}
            </Button>
          </div>
        )}
      </Container>
    </Box>
  );
};
export default Prediction;

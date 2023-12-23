import React, { useCallback, useEffect, useRef, useState } from 'react'
import app_config from '../../config';
import { NavLink, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

const Prediction = () => {
  
    const {  modelPath, cureData } = app_config;

  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(null);

  const [selImg, setSelImg] = useState('');

  const [selImage, setSelImage] = useState('');

  const [predictionLoading, setPredictionLoading] = useState(false);

  const [loadedImage, setLoadedImage] = useState(null);

  const [result, setResult] = useState(null);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

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

  const predictionResultExtractor = (prediction) => {
    let tempRes = prediction.find((pred) => pred.probability === Math.max(...prediction.map((pred) => pred.probability)));
    if (tempRes.probability < 0.5) {
      return { className: 'Sorry! Unknown Plant', probability: 0 };
    }
    return tempRes;
  };

  const uploadFile = (file) => {
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(`${process.env.REACT_APP_API_URL}/util/uploadfile`, {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };

  const saveHistory = async (res) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/prediction/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: selImg,
        user: currentUser._id,
        result: res,
        createdAt: new Date()
      })
    });
    const data = await response.json();
    console.log(data);
  };

  async function init() {
    const modelURL = modelPath + '/model.json';
    const metadataURL = modelPath + '/metadata.json';

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    let modelT = await window.tmImage.load(modelURL, metadataURL);
    setMaxPredictions(modelT.getTotalClasses());
    setModel(modelT);
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
    saveHistory(predictionResultExtractor(prediction));
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'Prediction Completed'
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleImageUpload = async (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
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
        console.log('loaded');
        img.src = loadedEvent.target.result;
        setSelImage(loadedEvent.target.result);
        setLoadedImage(img);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const getDiseaseData = () => {
    sessionStorage.setItem('diseaseData', JSON.stringify(cureData.find((d) => d.diseaseName === result.className)));
  };

  const getPlantStatus = () => {
    if (result.className.endsWith('healthy')) {
      return <p className="display-4 fw-bold text-success text-center">Congratulations!! Your plant is Healthy</p>;
    } else if (result.className === 'Sorry! Unknown Plant') {
      return <p className="display-4 fw-bold text-warning text-center">Sorry! Unknown Plant</p>;
    } else {
      getDiseaseData();
      return (
        <>
          <p className="h1 fw-bold text-danger text-center">OOps!! Your plant has been detected with disease : {result.className}</p>
          <NavLink className="btn btn-success mt-3 w-100" to="/user/cure">
            Find Cure for Your Disease <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </NavLink>
        </>
      );
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v986-bg-02-kqhe3wit.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=a18675d7f6be224df8ff585d65d5d8dc')"
      }}
    >
      <header className="bg-dark">
        <div className="container py-5 ">
          <p className="display-4 text-center fw-bold text-white">Plant Doc</p>
          <h1 class="text-center text-white ">What's Wrong With My Plant?</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card" style={{ backgroundSize: 'cover', backgroundImage: `url('https://cipotato.org/wp-content/uploads/2020/03/Phone-App-2-PUT.jpg')` }}>
                <div className="card-header">
                  <h2 className="text-center text-white">Use Camera</h2>
                </div>
                <div className="">
                  {camOpen ? (
                    <>
                      <Webcam videoConstraints={{facingMode : 'environment', FACING_MODE_ENVIRONMENT : "environment"}} ref={webcamRef} style={{ width: '100%', height: '100%' }} screenshotFormat="image/jpeg" />
                      <button style={{ position: 'absolute', top: 15, left: 15 }} className="btn btn-primary" onClick={captureImage}>
                        <i class="fa fa-camera" aria-hidden="true"></i> Capture Image
                      </button>
                    </>
                  ) : (
                    <div className="cam-container">
                      <div class="overlay d-flex justify-content-center align-items-center flex-column">
                        <div></div>
                        <img src="/camera.png" style={{ display: 'block', width: '200px' }} onClick={(e) => setCamOpen(true)} />
                        <p className="h1 text-center mt-3">Use Camera</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <div
                className="card h-100 upload-img-card"
              >
                <div className="card-body">
                  {/* <img src="" /> */}
                  <h4 className="text-center">Upload Leaf Image</h4>
                  <label className="d-block btn btn-primary px-5 py-3" htmlFor="leaf-image">
                    <i class="fas fa-upload fa-2x"></i>   Upload Leaf Image
                  </label>
                  <input hidden type="file" onChange={handleImageUpload} id="leaf-image" />

                  {selImage ? (
                    <img style={{ height: '400px' }} className="d-block m-auto mt-4" src={selImage} alt="" />
                  ) : (
                    <p className="text-center h1 mt-5 py-4">Select a leaf image to predict disease</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {result && getPlantStatus()}

          {loadedImage && (
            <button className="btn btn-primary mt-5" onClick={predictFromImage}>
              {predictionLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Predicting...
                </>
              ) : (
                'Predict Disease'
              )}
            </button>
          )}
        </div>
      </section></div>
  )
}

export default Prediction
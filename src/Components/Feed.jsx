// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import { BrowserQRCodeReader } from '@zxing/library';

const FeedbackForm = () => {
  const [trust, setTrust] = useState('');
  const [experience, setExperience] = useState('');
  const [comprehensiveness, setComprehensiveness] = useState('');
  const [support, setSupport] = useState('');
  const [prices, setPrices] = useState('');
  const [recommend, setRecommend] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const [result, setResult] = useState('No QR code scanned');
  const [qrData, setQRData] = useState(''); // State to hold the QR code data



  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    codeReader
      .getVideoInputDevices()
      .then((videoInputDevices) => {
        const videoInputDevice = videoInputDevices[0];
        codeReader.decodeFromInputVideoDevice(videoInputDevice.deviceId, 'video')
          .then((result) => {
            const qrText = result.getText();
            setResult(qrText);
            setQRData(qrText); // Update the state with the scanned QR code data
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
      
    return () => {
      codeReader.reset();
    };
  }, []);

  const handleInputChange = (e) => {
    setQRData(e.target.value); // Update the QR code data when input changes
  };

  const handleOptionChange = (optionValue) => {
    setTrust(optionValue);
  };
  
  const handleOption1Change = (optionValue) => {
    setExperience(optionValue);
  };

  const handleOption2Change = (optionValue) => {
    setComprehensiveness(optionValue);
  };

  const handleOption3Change = (optionValue) => {
    setSupport(optionValue);
  };

  const handleOption4Change = (optionValue) => {
    setPrices(optionValue);
  };

  const handleOption5Change = (optionValue) => {
    setRecommend(optionValue);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/feedback', {
        trust,
        experience,
        comprehensiveness,
        support,
        prices,
        recommend,
        feedback
      });
      console.log(res.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Move to the next step
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
        
        {/* Step indicators */}
        <div className="flex items-center justify-center mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>1</div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>2</div>
        </div>
        {/* Form sections */}
        {currentStep === 1 && (
    <form onSubmit={handleNextStep}>
    {/* Step 1 */}
    <div className="mb-6">
      
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
         {/* Text field */}
      {/* <input
        type="text"
      
      // If you want to edit the QR data manually
        placeholder="Scanned QR Code Data"
      /> */}
      <video id="video" width="300" height="300" style={{ border: '1px solid black' }}></video>
      <p>Scanned Result: {result}</p>
      <input
        type="text"
        value={qrData}
        onChange={handleInputChange}
        placeholder="QR Code Data"
      />
        {/* Radio options */}
      </div>
    </div>
    {/* Button to move to the next step */}
    <div className="text-center">
      <button
        type="button"
        onClick={handleNextStep}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Next
      </button>
    </div>
  </form>
)}
{currentStep === 2 && (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">What is the Reason you are buying from Sree Kumaran Jewellers?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="trust"
              value="Trust"
              checked={trust === 'Trust'}
              onChange={() => handleOptionChange('Trust')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Trust</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="trust"
              value="Purity"
              checked={trust === 'Purity'}
              onChange={() => handleOptionChange('Purity')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Purity</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="trust"
              value="Design"
              checked={trust === 'Design'}
              onChange={() => handleOptionChange('Design')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Design</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="trust"
              value="Service"
              checked={trust === 'Service'}
              onChange={() => handleOptionChange('Service')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Service</span>
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">How would you rate your overall experience with our service?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="experience"
              value="Very Good"
              checked={experience === 'Very Good'}
              onChange={() => handleOption1Change('Very Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="experience"
              value="Good"
              checked={experience === 'Good'}
              onChange={() => handleOption1Change('Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="experience"
              value="Fair"
              checked={experience === 'Fair'}
              onChange={() => handleOption1Change('Fair')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="experience"
              value="Poor"
              checked={experience === 'Poor'}
              onChange={() => handleOption1Change('Poor')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Poor</span>
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">How satisfied are you with the comprehensiveness of our offer?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="comprehensiveness"
              value="Very Good"
              checked={comprehensiveness === 'Very Good'}
              onChange={() => handleOption2Change('Very Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="comprehensiveness"
              value="Good"
              checked={comprehensiveness === 'Good'}
              onChange={() => handleOption2Change('Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="comprehensiveness"
              value="Fair"
              checked={comprehensiveness === 'Fair'}
              onChange={() => handleOption2Change('Fair')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="comprehensiveness"
              value="Poor"
              checked={comprehensiveness === 'Poor'}
              onChange={() => handleOption2Change('Poor')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Poor</span>
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">How satisfied are you with the customer support?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="support"
              value="Very Good"
              checked={support === 'Very Good'}
              onChange={() => handleOption3Change('Very Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="support"
              value="Good"
              checked={support === 'Good'}
              onChange={() => handleOption3Change('Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="support"
              value="Fair"
              checked={support === 'Fair'}
              onChange={() => handleOption3Change('Fair')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="support"
              value="Poor"
              checked={support === 'Poor'}
              onChange={() => handleOption3Change('Poor')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Poor</span>
          </label>
        </div>
      </div>
          <div className="mb-6">
        <label className="block text-gray-700 mb-2">How would you rate our prices?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="prices"
              value="Very Good"
              checked={prices === 'Very Good'}
              onChange={() => handleOption4Change('Very Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="prices"
              value="Good"
              checked={prices === 'Good'}
              onChange={() => handleOption4Change('Good')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="prices"
              value="Fair"
              checked={prices === 'Fair'}
              onChange={() => handleOption4Change('Fair')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="prices"
              value="Poor"
              checked={prices === 'Poor'}
              onChange={() => handleOption4Change('Poor')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Poor</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Would you recommend our product / service to other people?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="recommend"
              value="Yes"
              checked={recommend === 'Yes'}
              onChange={() => handleOption5Change('Yes')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="recommend"
              value="No"
              checked={recommend === 'No'}
              onChange={() => handleOption5Change('No')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">No</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="recommend"
              value="Maybe"
              checked={recommend === 'Maybe'}
              onChange={() => handleOption5Change('Maybe')}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Maybe</span>
          </label>
        </div>
      </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 mb-2">What should we change in order to live up to your expectations?</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
              placeholder="Enter your feedback here..."
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
          </div>

          <div className="flex justify-between">
      {/* Previous button */}
      <button
        type="button"
        onClick={() => setCurrentStep(currentStep - 1)} // Move to the previous step
        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Previous
      </button>
</div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Submit Feedback
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;

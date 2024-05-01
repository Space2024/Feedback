// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, send the rating and feedback to your backend
    console.log('Submitted rating:', rating);
    console.log('Submitted feedback:', feedback);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="max-w-3xl w-full bg-white p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
    <h3 className="block text-gray-700 mb-2">Overall experience with our service</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">What is the Reason you are buying from Sree Kumaran Jewellers?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="rating"
              value="Trust"
              checked={rating === "Trust"}
              onChange={() => handleRatingChange("Trust")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Trust</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Purity"
              checked={rating === "Purity"}
              onChange={() => handleRatingChange("Purity")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Purity</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Design"
              checked={rating === "Design"}
              onChange={() => handleRatingChange("Design")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Design</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="Service"
              checked={rating === "Service"}
              onChange={() => handleRatingChange("Service")}
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
              name="rating"
              value="Very Good"
              checked={rating === "Very Good"}
              onChange={() => handleRatingChange("Very Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Good"
              checked={rating === "Good"}
              onChange={() => handleRatingChange("Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Fair"
              checked={rating === "Fair"}
              onChange={() => handleRatingChange("Fair")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="Poor"
              checked={rating === "Poor"}
              onChange={() => handleRatingChange("Poor")}
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
              name="rating"
              value="Very Good"
              checked={rating === "Very Good"}
              onChange={() => handleRatingChange("Very Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Good"
              checked={rating === "Good"}
              onChange={() => handleRatingChange("Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Fair"
              checked={rating === "Fair"}
              onChange={() => handleRatingChange("Fair")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="Poor"
              checked={rating === "Poor"}
              onChange={() => handleRatingChange("Poor")}
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
              name="rating"
              value="Very Good"
              checked={rating === "Very Good"}
              onChange={() => handleRatingChange("Very Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Good"
              checked={rating === "Good"}
              onChange={() => handleRatingChange("Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Fair"
              checked={rating === "Fair"}
              onChange={() => handleRatingChange("Fair")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
        </div>
      </div>
          <div className="mb-6">
        <label className="block text-gray-700 mb-2">How would you rate our prices?</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          <label className="flex items-center mb-2 sm:mr-6">
            <input
              type="radio"
              name="rating"
              value="Very Good"
              checked={rating === "Very Good"}
              onChange={() => handleRatingChange("Very Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Very Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Good"
              checked={rating === "Good"}
              onChange={() => handleRatingChange("Good")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Good</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="Fair"
              checked={rating === "Fair"}
              onChange={() => handleRatingChange("Fair")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Fair</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="Poor"
              checked={rating === "Poor"}
              onChange={() => handleRatingChange("Poor")}
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
              name="rating"
              value="Yes"
              checked={rating === "Yes"}
              onChange={() => handleRatingChange("Yes")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center mb-2 sm:mr-4">
            <input
              type="radio"
              name="rating"
              value="No"
              checked={rating === "No"}
              onChange={() => handleRatingChange("No")}
              className="form-radio h-4 w-4 mr-0 sm:mr-1 text-green-500"
            />
            <span className="ml-2">No</span>
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="Maybe"
              checked={rating === "Maybe"}
              onChange={() => handleRatingChange("Maybe")}
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

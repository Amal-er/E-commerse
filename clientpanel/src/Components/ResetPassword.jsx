import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(email);
  };

  const recaptchaRef = React.createRef();

  return (
    <div className=" mx-auto p-6 border border-gray-300 rounded-lg bg-white md:px-24">
      <h2 className="text-2xl font-semibold text-left mb-6">Reset Password</h2>
      <p className="text-left mb-4">
        Fill in your email below to request a new password. An email will be
        sent to the address below containing a link to verify your email
        address.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            className="w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(value) => console.log("Captcha value:", value)}
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-44 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;

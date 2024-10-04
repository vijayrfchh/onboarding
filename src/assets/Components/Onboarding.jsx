import { useState } from "react";
import { validateOnboardingDocuments } from "../Components/Onboardingvalidations.jsx"; // Import validation function

const OnboardingDocuments = () => {
  // State to track form inputs
  const [formValues, setFormValues] = useState({
    aadharName: "",
    aadharNumber: "",
    panName: "",
    panNumber: "",
    panDocument: null,
    aadharDocument: null,
    higherEducationFile: null,
    intermediateFile: null,
    sscFile: null,
  });

  // State to track validation errors
  const [errors, setErrors] = useState({});

  // Handler to update form values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const regex = /^[a-zA-Z].*[\s]*$/;

    if (["aadharName", "panName", "panNumber"].includes(name)) {
      if (value === "" || regex.test(value)) {
        // Allow empty string or valid format
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: "" });
      } else {
        setErrors({
          ...errors,
          [name]:
            "Only characters, with  space between words.",
        });
        return;
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the imported validation function
    const validationErrors = validateOnboardingDocuments(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission if no errors
      console.log("Form Submitted Successfully", formValues);
    } else {
      console.log("Form contains errors");
    }
  };

  return (
    <>
      

      <div className="container mx-auto w-auto p-6">
     <div  className="flex border-2 rounded-md mb-4"> <button>
          <span className="font-semibold text-base text-black">Previous Page</span>
        </button></div>
        <h2 className="text-xl font-bold mb-6">Onboarding Documents Section</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-9">
            {/* Government IDs Section */}
            <div className="bg-white text-black p-4 rounded-md">
             <h3 className="text-lg text-black bg-orange-500 p-1 rounded-md font-semibold mb-4">              
                Government ID
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Aadhar Section */}
                <div className="text-base ">
                  <label className="mr-2">Person Name as per Aadhar</label>
                  <input
                    type="text"
                    name="aadharName"
                    value={formValues.aadharName}
                    onChange={handleInputChange}
                    className="input-field border border-gray-800 rounded-md"
                  />
                  {errors.aadharName && (
                    <p className="text-red-500">{errors.aadharName}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">Aadhar Card Number</label>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formValues.aadharNumber}
                    onChange={handleInputChange}
                    className="input-field border border-gray-800 rounded-md"
                  />
                  {errors.aadharNumber && (
                    <p className="text-red-500">{errors.aadharNumber}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">Document</label>
                  <input
                    type="file"
                    name="aadharDocument"
                    onChange={handleFileChange}
                    className="input-field rounded-md"
                  />
                  {errors.aadharDocument && (
                    <p className="text-red-500">{errors.aadharDocument}</p>
                  )}
                </div>

                {/* PAN Section */}
                <div className="text-base ">
                  <label className="mr-2">Person Name as per PAN</label>
                  <input
                    type="text"
                    name="panName"
                    value={formValues.panName}
                    onChange={handleInputChange}
                    className="input-field border border-gray-800 rounded-md"
                  />
                  {errors.panName && (
                    <p className="text-red-500">{errors.panName}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">PAN Card Number</label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formValues.panNumber}
                    onChange={handleInputChange}
                    className="input-field border border-gray-800 rounded-md"
                  />
                  {errors.panNumber && (
                    <p className="text-red-500">{errors.panNumber}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">Document</label>
                  <input
                    type="file"
                    name="panDocument"
                    onChange={handleFileChange}
                    className="input-field  rounded-md"
                  />
                  {errors.panDocument && (
                    <p className="text-red-500">{errors.panDocument}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Educational Documents Section */}
            <div className="bg-white text-black p-4 rounded-md">
              <h3 className="text-lg text-black bg-orange-500 p-1 rounded-md font-semibold mb-4">
                Educational Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-base ">
                  <label className="mr-2">Higher Education</label>
                  <input
                    type="file"
                    name="higherEducationFile"
                    onChange={handleFileChange}
                    className="input-field  rounded-md"
                  />
                  {errors.higherEducationFile && (
                    <p className="text-red-500">{errors.higherEducationFile}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">Intermediate / Diploma</label>
                  <input
                    type="file"
                    name="intermediateFile"
                    onChange={handleFileChange}
                    className="input-field  rounded-md"
                  />
                  {errors.intermediateFile && (
                    <p className="text-red-500">{errors.intermediateFile}</p>
                  )}
                </div>
                <div className="text-base ">
                  <label className="mr-2">SSC</label>
                  <input
                    type="file"
                    name="sscFile"
                    onChange={handleFileChange}
                    className="input-field rounded-md"
                  />
                  {errors.sscFile && (
                    <p className="text-red-500">{errors.sscFile}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Experience Certificates Section */}
            <div className="bg-white text-black p-3 rounded-md">
              <h3 className="text-lg text-black bg-orange-500  p-1 rounded-md font-semibold mb-4">
                Experience Certificates
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="text-base ">
                  <label className="mr-2">Experience Letters</label>
                  <input
                    type="file"
                    name="experienceLettersFile"
                    onChange={handleFileChange}
                    className="input-field p-1  rounded-md"
                  />
                </div>
                <div className="text-base ">
                  <label className="mr-2">Course/Training Certifications</label>
                  <input
                    type="file"
                    name="courseCertificationsFile"
                    onChange={handleFileChange}
                    className="input-field p-1  rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#00246B] mt-4  text-white p-1 rounded-md"
          >
            <span className="text-lg text-white p-1">Submit</span>
          </button>
          </div>
       
        </form>
      </div>
    </>
  );
};

export default OnboardingDocuments;

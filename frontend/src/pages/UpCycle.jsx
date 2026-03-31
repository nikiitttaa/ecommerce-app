import React, { useState } from "react";

const UpCycle = () => {

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    sareeImage: null,
    designImage: null,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.sareeImage ||
      !formData.designImage ||
      !formData.message
    ) {
      alert("Please fill all fields before submitting.");
      return;
    }

    console.log(formData);
    alert("Submission Successful! We’ll contact you soon to finalize the details.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">

      <div className="w-full max-w-3xl backdrop-blur-md bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-semibold text-center text-[#8B6F47] mb-4 tracking-wide">
          "Crafted by us, Personalized by You."
        </h1>

        <div className="w-20 h-[2px] bg-[#C2B280] mx-auto mb-6"></div>

        <p className="text-center text-gray-700 leading-relaxed mb-10">
          Give your cherished sarees a second life. Send us your favorite saree,
          choose your design, and our master artisans will transform it into a
          stunning personalized Kurti or Dress crafted exclusively for you.
        </p>

        {/* Address */}
        <div className="text-center bg-[#F9F7F3] p-6 rounded-2xl mb-10">
          <p className="text-[#8B6F47] font-semibold mb-2">
            Send Your Saree To:
          </p>
          <p>RIWAYYAT Couture</p>
          <p>123, XYZ Road</p>
          <p>Jaipur, Rajasthan – 302001</p>
          <p className="mt-2">Phone: 98XXXXXXXX</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 p-2 bg-transparent focus:outline-none"
          />

         <input
            type="text"
            name="contact"
             placeholder="Mobile Number"
                value={formData.contact}
                onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, "");
             setFormData({ ...formData, contact: onlyNums });
             }}
            required
            maxLength="10"
            pattern="[6-9][0-9]{9}"
                   title="Enter valid 10-digit Indian mobile number"
             className="w-full border-b border-gray-400 p-2 bg-transparent focus:outline-none"
            />

          {/* Saree Upload */}
          <div>
            <p className="mb-2 text-sm text-gray-800">
              Upload Your Saree Photo
            </p>
            <input 
              type="file" 
              name="sareeImage" 
              accept="image/*"
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Design Upload */}
          <div>
            <p className="mb-2 text-sm text-gray-800">
              Upload Reference Design
            </p>
            <input 
              type="file" 
              name="designImage" 
              accept="image/*"
              onChange={handleChange} 
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Describe your preferred sleeve, neckline, length, fitting or any custom detail..."
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-[#8B6F47]"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 rounded-full text-white font-medium tracking-wide
              bg-gradient-to-r from-[#8B6F47] to-[#C2B280]
              hover:scale-105 transition duration-300 shadow-lg"
            >
              Submit Request
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default UpCycle;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Customize = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Load previous customization if exists
  const savedData = JSON.parse(localStorage.getItem(`customData_${productId}`)) || {};

  const [formData, setFormData] = useState({
    neck: savedData.neck || "",
    sleeves: savedData.sleeves || "",
    length: savedData.length || "",
    fabric: savedData.fabric || "",
    dupatta: savedData.dupatta || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem(`customData_${productId}`, JSON.stringify(formData));
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-20 ">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">

        <h1 className="text-2xl font-semibold text-center text-[#8B6F47]">
          Customize Your Outfit
        </h1>

        <select
          name="neck"
          value={formData.neck}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
        >
          <option value="">Select Neck Design</option>
          <option>V Neck</option>
          <option>Round Neck</option>
          <option>Boat Neck</option>
          <option>Square Neck</option>
          <option>Collared Neck</option>
        </select>

        <select
          name="sleeves"
          value={formData.sleeves}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
        >
          <option value="">Select Sleeves</option>
          <option>Sleeveless</option>
          <option>Cap Sleeves</option>
          <option>Half Sleeves</option>
          <option>Three-Quarter Sleeves</option>
          <option>Full Sleeves</option>
        </select>

        <select
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
        >
          <option value="">Select Length</option>
          <option>Short</option>
          <option>Medium</option>
          <option>Long</option>
        </select>

        <select
          name="fabric"
          value={formData.fabric}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
        >
          <option value="">Select Fabric</option>
          <option>Cotton</option>
          <option>Silk</option>
          <option>Georgette</option>
          <option>Chiffon</option>
          <option>Linen</option>
        </select>

        <select
          name="dupatta"
          value={formData.dupatta}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
        >
          <option value="">Dupatta Required?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

         <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special instructions or notes?"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
          rows={4}
        ></textarea>

        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#8B6F47] text-white rounded hover:bg-[#735632] transition"
          >
            Save & Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default Customize;
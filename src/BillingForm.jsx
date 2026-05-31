import React, { useState } from 'react';

export default function BillingForm() {
  const [formData] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getreelax.com',
    country: 'India'
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 flex-1 w-full shadow-xs">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Review your details</h2>
      <p className="text-sm font-semibold text-gray-700 mb-6">Billing Information</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company Name</label>
          <input 
            type="text" 
            value={formData.companyName}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none"
            disabled
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
          <input 
            type="email" 
            value={formData.email}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none"
            disabled
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">GST Number <span className="text-gray-400 font-normal">(Optional)</span></label>
          <input type="text" placeholder="GST Number" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">PAN Number <span className="text-gray-400 font-normal">(Optional)</span></label>
          <input type="text" placeholder="PAN Number" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Premise/House no.</label>
          <input type="text" placeholder="Premise/House no." className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Street</label>
          <input type="text" placeholder="Street" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">State</label>
          <select className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-400 bg-white focus:outline-none focus:border-blue-500">
            <option>Select state</option>
            <option value="DL">Delhi</option>
            <option value="MH">Maharashtra</option>
            <option value="KA">Karnataka</option>
            <option value="TN">Tamil Nadu</option>
            <option value="WB">West Bengal</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="GJ">Gujarat</option>
            <option value="RJ">Rajasthan</option>
            <option value="UP">Uttar Pradesh</option>
   
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">City</label>
          <select className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-400 bg-white focus:outline-none focus:border-blue-500">
             <option value="">Select City</option>
              
        <option>New Delhi</option>
        <option>Mumbai</option>
        <option>Bengaluru</option>
        <option>Hyderabad</option>
        <option>Chennai</option>
        <option>Kolkata</option>
        <option>Pune</option>
        <option>Ahmedabad</option>
        <option>Surat</option>
        <option>Jaipur</option>
   
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Country</label>
          <input type="text" value={formData.country} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500" disabled />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Pin Code</label>
          <input type="text" placeholder="Pincode" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-8">
        <button className="px-6 py-2 border border-gray-300 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition duration-150">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-600 text-sm font-semibold text-white rounded-lg hover:bg-blue-700 transition duration-150">
          Save Details
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import Navbar from './Navbar';
import BillingForm from './BillingForm';
import OrderSummary from './OrderSummary'; // Sahi capitalization ke sath import kiya hai
import { ArrowLeft } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f6f9] flex flex-col antialiased">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Layout Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-5 flex-1 flex flex-col">
        
        {/* Navigation Indicator Green Box (from Figma specifications) */}
        <div className="w-full border-2 border-green-500 bg-white rounded-lg px-4 py-2.5 flex items-center mb-6 shadow-xs">
          <button className="flex items-center text-xs text-gray-500 font-semibold hover:text-gray-800 transition duration-150">
            <ArrowLeft className="w-3.5 h-3.5 mr-2 text-gray-400" />
            Back to plans
          </button>
        </div>

        {/* Form and Summary side-by-side structure */}
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
          <BillingForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
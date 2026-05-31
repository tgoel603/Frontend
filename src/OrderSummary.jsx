import React, { useState } from 'react';
import { Wallet, ChevronUp } from 'lucide-react';

export default function OrderSummary() {
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');

  return (
    <div className="w-full lg:w-95 space-y-4">
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
        <h3 className="text-md font-bold text-gray-900 mb-4">Order Summary</h3>
        <div className="border border-blue-100 rounded-xl p-4 flex justify-between items-start bg-white">
          <div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">₹4,999</span>
              <span className="text-xs text-gray-500 ml-1">/month</span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">Includes 5,000 credits/mo.</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase block">Selected Plan</span>
            <span className="text-md font-bold text-gray-800">Startup</span>
          </div>
        </div>
        
        <button className="w-full mt-4 py-2 border border-blue-200 rounded-xl text-xs font-semibold text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center justify-center gap-1.5">
          <span>⚙</span> Upgrade to Growth Plan
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border border-gray-100 rounded-xl p-3 bg-white">
          <div className="flex items-center space-x-3">
            <Wallet className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-xs font-bold text-gray-800">Wallet Balance</p>
              <p className="text-[11px] text-gray-400">₹500.00 available</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-600 border border-blue-100 px-3 py-1 rounded-md bg-blue-50/50 hover:bg-blue-50 transition duration-150">
            Apply
          </button>
        </div>

        <div className="border border-gray-200 rounded-xl p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-800 flex items-center gap-1">🎟 Apply Coupon</span>
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex space-x-2 mb-3">
            <input type="text" placeholder="Enter coupon code" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-md text-xs placeholder-gray-400 focus:outline-none" />
            <button className="text-xs font-semibold text-blue-600 px-3 border border-blue-100 rounded-md bg-blue-50/50 hover:bg-blue-50">Apply</button>
          </div>

          <div className="space-y-2">
            <label className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition duration-150 ${selectedCoupon === 'WELCOME20' ? 'border-blue-600 bg-blue-50/10' : 'border-gray-100'}`}>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">WELCOME20</span>
                <span className="text-[10px] text-gray-400">20% off on your first month</span>
              </div>
              <input type="radio" checked={selectedCoupon === 'WELCOME20'} onChange={() => setSelectedCoupon('WELCOME20')} className="w-3 h-3 text-blue-600" />
            </label>

            <label className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition duration-150 ${selectedCoupon === 'ANNUAL50' ? 'border-blue-600 bg-blue-50/10' : 'border-gray-100'}`}>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">ANNUAL50</span>
                <span className="text-[10px] text-gray-400">50% off on annual plans</span>
              </div>
              <input type="radio" checked={selectedCoupon === 'ANNUAL50'} onChange={() => setSelectedCoupon('ANNUAL50')} className="w-3 h-3 text-blue-600" />
            </label>
          </div>
        </div>

        <div className="space-y-2 text-xs text-gray-500 pt-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-800">₹14,999.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (18% GST)</span>
            <span className="font-semibold text-gray-800">₹1,079.64</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="flex justify-between items-baseline pt-1">
          <span className="text-sm font-bold text-gray-900">Total due today</span>
          <span className="text-2xl font-black text-blue-600">₹16,078.64</span>
        </div>

        <button className="w-full bg-blue-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-blue-700 transition duration-150 shadow-sm">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
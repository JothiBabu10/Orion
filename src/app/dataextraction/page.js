"use client";
import { useState } from "react";

export default function DataExtractionPage() {
  // State for storing the extracted data values
  const [billedTo, setBilledTo] = useState("Imani Oliowe");
  const [invoiceNo, setInvoiceNo] = useState("12345");
  const [invoiceDate, setInvoiceDate] = useState("16 June 2025");
  const [subtotal, setSubtotal] = useState("$500");

  const handleExtractClick = () => {
    console.log("Data extraction process initiated!");
    // Logic for extracting the data can be added here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Breadcrumb */}
        <div className="mb-6 text-black">
          <h1 className="text-xl font-semibold">
            Invoices &gt; Data Extraction
          </h1>
        </div>

        {/* Top Navigation Steps */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-8 text-black">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">
                1
              </div>
              <span className="ml-2">Upload or choose document</span>
            </div>

            {/* Step Line */}
            <div className="h-px flex-grow bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">
                2
              </div>
              <span className="ml-2 font-bold">
                Choose data extraction rules
              </span>
            </div>

            {/* Step Line */}
            <div className="h-px flex-grow bg-gray-300"></div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">
                3
              </div>
              <span className="ml-2">Run Extraction</span>
            </div>
          </div>

          {/* Success message */}
          <div className="bg-green-100 text-green-700 p-4 rounded mt-4">
            Data extraction performed successfully
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex space-x-8">
          {/* Uploaded Document */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4 text-black">
              Uploaded Document
            </h2>
            <div className="border rounded-lg p-4">
              <img
                src="/invoice-sample.png"
                alt="Uploaded Invoice"
                className="w-full"
              />
            </div>
          </div>

          {/* Extracted Data */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4 text-black">
              Extracted Data
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-black">
                  Billed To
                </label>
                <input
                  type="text"
                  value={billedTo}
                  onChange={(e) => setBilledTo(e.target.value)}
                  className="border w-full p-2 rounded text-black"
                />
              </div>
              <div>
                <label className="block font-semibold text-black">
                  Invoice No.
                </label>
                <input
                  type="text"
                  value={invoiceNo}
                  onChange={(e) => setInvoiceNo(e.target.value)}
                  className="border w-full p-2 rounded text-black"
                />
              </div>
              <div>
                <label className="block font-semibold text-black">
                  Invoice Date
                </label>
                <input
                  type="text"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="border w-full p-2 rounded text-black"
                />
              </div>
              <div>
                <label className="block font-semibold text-black">
                  Subtotal
                </label>
                <input
                  type="text"
                  value={subtotal}
                  onChange={(e) => setSubtotal(e.target.value)}
                  className="border w-full p-2 rounded text-black"
                />
              </div>
            </div>

            {/* Extract Button with hover effect */}
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={handleExtractClick}
            >
              Extract
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

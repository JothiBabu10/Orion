"use client";
import { useState } from "react";

export default function InvoiceHistoryPage() {
  const invoices = [
    {
      name: "INVOICE_MAY_2024.PDF",
      date: "31/05/2024 9:55 PM",
    },
    {
      name: "INVOICE_JUNE_2024.PDF",
      date: "01/07/2024 7:32 AM",
    },
    {
      name: "INVOICE_JULY_2024.PDF",
      date: "03/08/2024 9:45 AM",
    },
  ];

  const handleDownload = (fileName) => {
    // Simulating a file download and alert message
    alert(`${fileName} has been downloaded!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Breadcrumb */}
        <div className="mb-6 text-black">
          <h1 className="text-xl font-semibold">Invoices &gt; History</h1>
        </div>

        {/* Info Banner */}
        <div className="bg-green-100 p-4 rounded-lg mb-6 text-black">
          <p>Browse previously compiled invoices</p>
        </div>

        {/* Invoices Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-black">Document(s)</h2>

          {/* Scrollable Table */}
          <div className="overflow-y-auto h-64">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b-2 py-2 text-black">File Name</th>
                  <th className="border-b-2 py-2 text-black">Date</th>
                  <th className="border-b-2 py-2 text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td className="py-4 text-black">{invoice.name}</td>
                    <td className="py-4 text-black">{invoice.date}</td>
                    <td className="py-4">
                      <button
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                        onClick={() => handleDownload(invoice.name)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v-4m0 0V8a4 4 0 014-4h8a4 4 0 014 4v4m-6 4l-4 4m0 0l-4-4m4 4V10"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

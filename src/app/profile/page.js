"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [organization, setOrganization] = useState("");
  const [gmailId, setGmailId] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = () => {
    alert("Password change requested!");
    // Add logic for password change process
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {/* Breadcrumb */}
        <div className="mb-6 text-black">
          <h1 className="text-xl font-semibold">Invoices &gt; Profile</h1>
        </div>

        {/* Profile Form */}
        <div className="bg-gray-200 p-8 rounded-lg border border-blue-500">
          <div className="space-y-6">
            {/* Name of Organization */}
            <div>
              <label className="block text-black font-bold mb-2">
                NAME OF ORGANIZATION
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 text-black"
                placeholder="Enter organization name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>

            {/* Gmail ID */}
            <div>
              <label className="block text-black font-bold mb-2">
                GMAIL ID
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 text-black"
                placeholder="Enter Gmail ID"
                value={gmailId}
                onChange={(e) => setGmailId(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-black font-bold mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-lg border border-gray-300 text-black"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mt-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={handlePasswordChange}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

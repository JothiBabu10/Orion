"use client";
import { useRef } from "react";

export default function Page() {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    // Trigger file input when button is clicked
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main content - ensure full height and width */}
      <main className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Top Navigation Steps */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between text-gray-700 mb-6">
            <h2 className="text-lg font-bold">
              Invoices &gt; Upload or choose document
            </h2>
          </div>

          <div className="flex items-center space-x-8 text-gray-600">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">
                1
              </div>
              <span className="ml-2 font-bold">Upload or choose document</span>
            </div>

            {/* Step Line */}
            <div className="h-px flex-grow bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
                2
              </div>
              <span className="ml-2">Choose data extraction rules</span>
            </div>

            {/* Step Line */}
            <div className="h-px flex-grow bg-gray-300"></div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
                3
              </div>
              <span className="ml-2">Run Extraction</span>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-black">
            Invoice Data Extraction
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            {/* Hidden File Input */}
            <input
              type="file"
              accept=".pdf"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                console.log(files);
                // Handle file selection
              }}
            />

            {/* Button triggers file selection */}
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold mb-4 transition duration-300 ease-in-out hover:bg-blue-700"
              onClick={handleFileSelect}
            >
              Select PDF Files
            </button>
            <p className="text-sm text-gray-500">or drop PDFs here</p>

            {/* Cloud storage icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <img
                src="/icons/google-drive-icon.svg"
                alt="Google Drive"
                className="w-8"
              />
              <img
                src="/icons/dropbox-icon.svg"
                alt="Dropbox"
                className="w-8"
              />
            </div>
          </div>

          <p className="mt-4 text-gray-500">
            *Upload Single or Multiple files in PDF format
          </p>
        </div>
      </main>
    </div>
  );
}

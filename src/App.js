import React, { useState, useCallback } from "react";
import Computation from "./Computation";

function App() {
  const [jsonData, setJsonData] = useState(null);
  console.log("jsonData", jsonData)

  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const parsedData = JSON.parse(reader.result);
          setJsonData(parsedData);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          setJsonData(null);
        }
      };

      reader.readAsText(file);
    },
    []
  );

  const renderKeys = () => {
    if (jsonData) {
      const keys = Object.keys(jsonData);

      return keys.map((key) => (
        <div key={key}>
          <strong>{key}: </strong>
          {JSON.stringify(jsonData[key])}
        </div>
      ));
    }

    return <div>No JSON data loaded.</div>;
  };

  return (
    <div className="w-full p-[150px] flex flex-col items-center">
      {/* {jsonData && <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">JSON File Mapper</h1>
        <div className="border-2 border-dashed rounded p-4 cursor-pointer">
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="text-center">

            <p className="text-sm text-gray-600">
              <label htmlFor="file-upload" className="cursor-pointer">
                Upload a JSON file
              </label>
            </p>
          </div>
        </div>
        <div className="mt-8">{renderKeys()}</div>
      </div>} */}
      {
        <Computation jsonData={jsonData} />
      }
    </div>
  );
}

export default App;

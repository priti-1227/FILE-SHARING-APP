import React, { useState } from "react";

function MainSection() {
  const [file, setFile] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFile((prevFiles) => [...prevFiles, ...droppedFiles]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = () => {
    setDragActive(false);
  };
 
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFile((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  return (
    <div className="h-screen flex items-center ">
      <div className="w-72 h-96 ml-20 bg-white rounded-lg">
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative p-4 border-2 border-dashed ${dragActive ? 'border-blue-500' : 'border-gray-300'} rounded-lg`}
        >
         {file.length ? (
        <div>
          <h3>Files Uploaded:</h3>
          <ul>
            {file.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <div className="text-center">
            <p>Drag and drop files here or click to select files</p>
            <div
              className="absolute bottom-4 left-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => document.querySelector('input[type="file"]').click()}
            >
              +
            </div>
            Add More files 
          </div>
        </>
      )}
        </div>
      </div>
    </div>
  );
}

export default MainSection;

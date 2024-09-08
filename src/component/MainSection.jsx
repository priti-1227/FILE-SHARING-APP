import React, { useState } from "react";

function MainSection() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
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
    
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };
  return (
    <div className="h-screen flex items-center">
      <div className="mx-4 bg-white shadow-lg rounded-lg px-4 pt-4 w-72 relative overflow-auto h-96 custom-scrollbar">
       
      <div className="overflow-y-auto">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 px-3 border-b border-gray-200 hover:bg-gray-100 group"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{file.name}</span>
              <span className="text-xs text-gray-500">
                {file.size} · {file.type}
              </span>
            </div>

            {/* Show X button on hover */}
            <button
              className="hidden group-hover:block text-red-500"
              onClick={() => removeFile(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>   
      {/* Add files button */}
      <div className="mt-4">
        <label className="flex items-center space-x-2 text-blue-500 font-semibold cursor-pointer">
          <span className="text-xl">+</span>
          <span>Add more files</span>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Storage and limit */}
      <div className="text-gray-400 text-sm mb-4">
        <span>Up to 2 GB free</span>
        <a href="#" className="ml-2 text-purple-500 font-semibold">
          Increase limit
        </a>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email to"
          className="border-b border-gray-300 p-2 rounded w-full focus:outline-none "
        />
        <input
          type="email"
          placeholder="Your email"
          className="border-b border-gray-300 p-2 rounded w-full focus:outline-none "
        />
        <input
          type="text"
          placeholder="Link"
          className="border-b border-gray-300 p-2 rounded w-full focus:outline-none "
        />
        <textarea
          placeholder="Message"
          className="border-b border-gray-300 p-2 rounded w-full h-24 focus:outline-none "
        ></textarea>
      </div>

      {/* Icons (Calendar, Price, Image, etc.) */}
      <div className="sticky z-10 bottom-0 left-0 flex flex-col gap-2 w-full bg-white  p-4">
      <div className="flex flex-col justify-between items-center ">
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded">
            <i className="far fa-calendar-alt"></i>
          </button>
          <button className="p-2 bg-gray-100 rounded">
            <i className="fas fa-dollar-sign"></i>
          </button>
          <button className="p-2 bg-gray-100 rounded">
            <i className="far fa-image"></i>
          </button>
          <button className="p-2 bg-gray-100 rounded">
            <i className="fas fa-lock"></i>
          </button>
        </div>
        
      </div>

      {/* Transfer Button */}
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded">
        Transfer
      </button>
      </div>
      </div>
    </div>
  );
}

export default MainSection;

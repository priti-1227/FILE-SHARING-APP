import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Download = () => {
  const { uuid } = useParams();
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(`/files/download/${uuid}`);
        setFileName(response.data.fileName); // Adjust according to your response structure
        setFileLink(response.data.download); // Adjust according to your response structure
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || 'Something went wrong.231');
        setLoading(false);
      }
    };

    fetchFile();
  }, [uuid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          src="https://example.com/download-icon.png"
          alt="Download"
          className="mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">Your file is ready to download</h2>
        <p className="text-gray-500 mb-4">Link expires in 24 hours</p>
        <p className="text-gray-700 mb-4">{fileName}</p>
        <a
          href={fileLink}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          download
        >
          Download File
        </a>
      </div>
    </div>
  );
};

export default Download;

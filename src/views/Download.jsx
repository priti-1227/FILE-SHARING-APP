import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Download = () => {
  const { uuid } = useParams();
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  console.log('File download link:', fileLink);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/files/${uuid}`);
        console.log('GET response:', response.data);

        setFileName(response.data.fileName);
        setFileLink(`${process.env.SERVER_URL}/files/download/${uuid}`);
        
        console.log('Set file name:', response.data.fileName);
      console.log('Set file link:', response.data.download);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching file:', err);
      setError(err.response?.data?.error || err.message || 'Something went wrong');
      setLoading(false);
      }
    };

    fetchFile();
  }, [uuid]);

  if (loading) {
    return <div>Loading....</div>;
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

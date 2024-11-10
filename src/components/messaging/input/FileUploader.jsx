import React, { useRef } from "react";
import {isUserAuthenticatedForFirebase, uploadFilesToFirebase}  from '../../../utils/firebaseUtils'
import { validateFiles } from '../../../utils/validateFiles'
const FileUploader = ({ setSelectedFiles }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = async (event) => {
    const files = Array.from(event.target.files);
    // console.log(files)

    // Check if the user is authenticated for Firebase upload
    const isAuthenticated = await isUserAuthenticatedForFirebase();
    if (!isAuthenticated) {
      alert("You must be signed in to upload files.");
      return;
    }

    // Validate files before uploading
    const { validFiles, invalidFiles } = validateFiles(files);
    if (invalidFiles.length > 0) {
      invalidFiles.forEach((invalidFile) => {
        alert(`File: ${invalidFile.file.name} - ${invalidFile.error}`);
      });
      return;
    }

    // Upload valid files to Firebase if authenticated
    try {
      const uploadURLs = await uploadFilesToFirebase(validFiles); // Upload the selected files
      console.log(uploadURLs)
      const updatedFiles = validFiles.map((file, index) => ({
        name: file.name,
        url: uploadURLs[index],  // Get the URL from Firebase
        type: file.type.split("/")[0],
      }));

      // Update the selected files with the Firebase URLs
      setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to upload files.");
    }
  };

  return (
    <>
      <button onClick={() => fileInputRef.current.click()} className="bg-zinc-800/[.4] p-2 text-white">
        📎
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
        multiple
      />
    </>
  );
};

export default FileUploader;

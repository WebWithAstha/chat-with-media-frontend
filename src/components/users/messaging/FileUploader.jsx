import React, { useRef } from "react";

const FileUploader = ({ setSelectedFiles }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type.split("/")[0],
    }));

    setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
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

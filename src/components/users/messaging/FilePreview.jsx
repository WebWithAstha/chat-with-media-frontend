import React from "react";

const FilePreview = ({ files, onRemoveFile }) => {
  const handleFileRemove = (index) => {
    onRemoveFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-2 mb-2">
      {files.map((file, index) => (
        <div key={index} className="relative flex items-center">
          {file.type === "image" && (
            <img src={file.url} alt={file.name} className="w-16 h-16 rounded-lg object-cover" />
          )}
          {file.type === "video" && (
            <video src={file.url} className="w-16 h-16 rounded-lg" controls />
          )}
          {file.type === "application" && (
            <div className="w-16 h-16 bg-gray-500 flex items-center justify-center rounded-lg text-white text-sm">
              📄 {file.name}
            </div>
          )}
          <button
            onClick={() => handleFileRemove(index)}
            className="absolute top-0 right-0 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;

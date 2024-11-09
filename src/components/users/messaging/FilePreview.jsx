import React from "react";
import { FaFilePdf, FaFileAlt, FaFileAudio, FaFileVideo } from "react-icons/fa";

const FilePreview = ({ files, onRemoveFile }) => {
  const handleFileRemove = (index) => {
    onRemoveFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-4 py-2 flex-wrap">
      {files.map((file, index) => (
        <div key={index} className="relative flex flex-col items-center">
          {/* Preview for Images */}
          {file.type === "image" && (
            <img
              src={file.url}
              alt={file.name}
              className="w-16 h-16 rounded-lg object-cover mb-1"
            />
          )}

          {/* Preview for Videos */}
          {file.type === "video" && (
            <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center text-white mb-1">
              <FaFileVideo className="text-2xl" />
            </div>
          )}

          {/* Preview for Audio */}
          {file.type === "audio" && (
            <div className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-1">
              <FaFileAudio className="text-2xl" />
            </div>
          )}

          {/* Preview for PDFs */}
          {file.type === "application/pdf" && (
            <div className="w-16 h-16 rounded-lg bg-red-500 flex items-center justify-center text-white mb-1">
              <FaFilePdf className="text-2xl" />
            </div>
          )}

          {/* Preview for Text Files */}
          {file.type === "text/plain" && (
            <div className="w-16 h-16 rounded-lg bg-green-500 flex items-center justify-center text-white mb-1">
              <FaFileAlt className="text-2xl" />
            </div>
          )}

          {/* Default Document Icon for Other Applications */}
          {!["image", "video", "audio", "application/pdf", "text/plain"].includes(
            file.type
          ) && (
            <div className="w-16 h-16 rounded-lg bg-gray-500 flex items-center justify-center text-white mb-1">
              📄
            </div>
          )}

          {/* File Name */}
          <span className="text-xs text-center w-16 truncate text-white">{file.name}</span>

          {/* Remove Button */}
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

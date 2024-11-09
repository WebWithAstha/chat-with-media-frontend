const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const ALLOWED_FILE_TYPES = [
  'image/jpeg', 'image/png',
  'audio/mpeg', 'audio/wav', 'audio/ogg',
  'video/mp4', 'video/webm', 'video/ogg',
  'application/zip', 'application/pdf', 'application/msword', 'text/plain'
];

// Validate multiple files and categorize as valid or invalid
export const validateFiles = (files) => {
  const validFiles = [];
  const invalidFiles = [];

  files.forEach((file) => {
    const errorMessage = validateFile(file);
    errorMessage 
      ? invalidFiles.push({ file, error: errorMessage }) 
      : validFiles.push(file);
  });

  return { validFiles, invalidFiles };
};

// Validate individual file's size and type
const validateFile = (file) => {
  if (file.size > MAX_FILE_SIZE) return 'File size should not exceed 10MB.';
  if (!ALLOWED_FILE_TYPES.includes(file.type)) 
    return 'Invalid file type. Allowed types: jpg, jpeg, png, zip, pdf, doc, txt.';
  return null;
};

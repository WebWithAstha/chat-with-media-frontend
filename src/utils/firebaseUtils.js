import { auth } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';

// Authenticate user with Firebase using a custom token
export async function authenticateWithFirebase(customToken) {
   try {
      await signInWithCustomToken(auth, customToken);
      console.log("Authenticated with Firebase");
   } catch (error) {
      console.error("Firebase authentication failed:", error);
   }
}

// Check if user is currently authenticated with Firebase
export const isUserAuthenticatedForFirebase = () => {
   return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(!!user));
   });
};

// Upload files to Firebase Storage for an authenticated user
export const uploadFilesToFirebase = async (files) => {
   try {
      const storage = getStorage();
      const user = auth.currentUser;

      if (!user) throw new Error('User is not authenticated!');

      const uploadPromises = Array.from(files).map(async (file) => {
         const fileRef = ref(storage, `user_files/${user.uid}/${file.name}`);
         const uploadResult = await uploadBytes(fileRef, file);
         return getDownloadURL(uploadResult.ref);
      });

      return await Promise.all(uploadPromises);

   } catch (error) {
      console.error('Error uploading files:', error);
      throw new Error('Error uploading files');
   }
};

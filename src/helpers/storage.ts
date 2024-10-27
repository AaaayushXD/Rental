import { storage } from "@/db/firebase.index";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const storeImageInFirebase = async (image: File, folder: string) => {
  if (!image) throw new Error("No image Found.");
  try {
    const imageRef = ref(storage, `${folder}/${image.name}`);
    console.log(imageRef.fullPath);
    await uploadBytes(imageRef, image);
    const imageUrl = getDownloadURL(imageRef).then((url) => url);
    return imageUrl;
  } catch (error) {
    throw new Error("Error while uploading image." + error);
  }
};

export { storeImageInFirebase };

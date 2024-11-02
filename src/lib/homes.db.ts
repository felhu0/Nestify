import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { HomeType } from "@/app/types/home";

export async function fetchHomes() {
    const homesCollection = collection(db, "filters");
    const homesSnapshot = await getDocs(homesCollection);
    const homes = homesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as HomeType[];
    return homes;
}


export async function fetchHomeId(homeId: string) {
  try {
    const homeDocRef = doc(db, "filters", homeId);
  const homeDoc = await getDoc(homeDocRef);
  if (homeDoc.exists()) {
    return { id: homeDoc.id, ...homeDoc.data() } as HomeType;
}
  return null;
  } catch (error) {
    console.error('Failed to fetch home id:', (error as Error).message);
    return null;
  }
  
}



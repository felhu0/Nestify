import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";


export const getFilters = async () => {
  const filtersCollection = collection(db, "filters");
  const filterSnapshot = await getDocs(filtersCollection);
  const listings = filterSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return listings;
};

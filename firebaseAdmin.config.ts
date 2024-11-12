
import * as admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

const serviceAccountConfig: admin.ServiceAccount = serviceAccount as admin.ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountConfig), 
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };

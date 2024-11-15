import * as admin from "firebase-admin";

const serviceAccountConfig = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || "{}");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountConfig),
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };


import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const apiKey = process.env.NEXT_PUBLIC_FB_API_KEY;
const projectId = process.env.NEXT_PUBLIC_FB_PROJECT_ID;
const messagingSenderId = process.env.NEXT_PUBLIC_FB_MESSAGE_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FB_APP_ID;
const databaseURL = process.env.NEXT_PUBLIC_FB_DB_URL;

const firebaseConfig = {
    apiKey, projectId, messagingSenderId, appId,
    authDomain: `${projectId}.firebaseapp.com`,
    storageBucket: `${projectId}.appspot.com`,
    databaseURL
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth();
export const db = getDatabase();

export default app;

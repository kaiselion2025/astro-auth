// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBskVeFo0d2WBoHPdYXX59ZyM-6PLBQBaQ',
	authDomain: 'astro-authentication-9581a.firebaseapp.com',
	projectId: 'astro-authentication-9581a',
	storageBucket: 'astro-authentication-9581a.firebasestorage.app',
	messagingSenderId: '987070401697',
	appId: '1:987070401697:web:9dd2a218ff8e08bfb6b4e0'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
auth.languageCode = 'es'

export const firebase = {
	app,
	auth
}

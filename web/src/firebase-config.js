const config = {
  apiKey: "AIzaSyAgcMf7umnASf0vSmuKWJlVSIbe3K0tAfA",
  authDomain: "chess-game-a8036.firebaseapp.com",
  databaseURL: "https://chess-game-a8036-default-rtdb.firebaseio.com",
  projectId: "chess-game-a8036",
  storageBucket: "chess-game-a8036.appspot.com",
  messagingSenderId: "481285790558",
  appId: "1:481285790558:web:3c2218fcedb674f0f94dcf",
  measurementId: "G-ZJ3RHK6632"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

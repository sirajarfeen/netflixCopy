import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config ={   
    apiKey: "AIzaSyC4gd38077sazoJqiXg0jMsR9kcss4yJ0s",
    authDomain: "netflix-clone-a1dfa.firebaseapp.com",
    databaseURL: "https://netflix-clone-a1dfa.firebaseio.com",
    projectId: "netflix-clone-a1dfa",
    storageBucket: "netflix-clone-a1dfa.appspot.com",
    messagingSenderId: "92378452807",
    appId: "1:92378452807:web:da8395b40aff0420787262"
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);


export { firebase };
import React, { useEffect, useState }  from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };



  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
    
      // console.log(loggedInUser);
      // handelIsAdmin()
      storeAuthToken();
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

//  const handelIsAdmin = () =>{
//   fetch(`http://localhost:9000/checkAdmin`,{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
  
//     body: JSON.stringify({email:loggedInUser.emails})
//   })
//     .then(res=>res.json())
//     .then(data=>{
//       if(data.email){
//         const newIsadmin = {...isAdmin}
//         newIsadmin.isAdmin = true
//         setAdmin(newIsadmin)
//         console.log('admin');
//       }
    
    
//     })
 

//  }
    // useEffect(()=>{
     
      

    // },[])


  return (

      <div class="d-flex justify-content-center">
        <button onClick={handleGoogleSignIn}>LogIn With Google</button>
      </div>

  );
};

export default Login;
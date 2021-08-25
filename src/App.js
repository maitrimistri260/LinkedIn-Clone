import React from 'react';
import './App.css';
import  Header  from './components/Header/Header';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Feed from './components/Body/Feed/Feed';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser} from "./features/userSlice";
import Widgets from './components/Body/Widget/Widget';
// import { login } from "./features/userSlice";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
      {/* App Body */}



    </div>
  );
}

export default App;

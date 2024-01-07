import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux';


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [profilePic, setProfilePic] = useState<string>("");

    const dispatch = useDispatch();

  const loginToApp = (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: userAuth.user.photoURL,
          })
        )
      }).catch((error) => alert(error.message));
      console.log("User Logedin Sucessfully");
  };

  const register = () => {
    if(!name || !password) {
        return alert("please enter a full name");
    };

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)   
      .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: profilePic,
          })
          );
      }).catch((error) => alert(error.message));
      console.log("User registered sucessfully!");
  };

  return (
    <div className='grid place-items-center ml-auto mr-auto pt-2.5 pb-2.5'>
      <img src='./images/biglinkedin.png' className='object-contain h-[70px] mt-5 mb-5' alt="this is logo" />
      <form className='flex flex-col'>
        <input
          name="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name reqiured if regitering"
          type="text"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          name="profile"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic url (optional)"
          type="text"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          name="mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email"
          type="email"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <button type="submit" onClick={loginToApp} className='w-[365px] h-[50px] text-[large] text-white bg-blue-600 rounded'>Sign in</button>
      </form>
      <p className='mt-5'>Not a member?{" "}
        <span className='text-blue-400 cursor-pointer' onClick={register}>Regiter now</span>
      </p>
    </div>
  )
}

export default Login
 
import {useEffect, useState} from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import {ref, onValue} from 'firebase/database'
import Wigets from './Wigets'
// import { login, logout, selectUser } from './features/userSlice';
// import { useDispatch, useSelector } from 'react-redux'
// import Login from './Login';
// import {auth} from './firebase';
import './App.css'; 

function App({database}: {database: any}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const postsRef = ref(database, 'posts');

    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postArray: any = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postArray)
      } 
    });
  }, []);

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           diplayName: userAuth.displayName,
  //           photoUrl: userAuth.photoUrl,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);
  
  return (
    <div className='bg-zinc-200 '>
      <Header/>

      {/* {!user ? (
        <Login auth={auth}/>
      ) : ( */}
        <div className='flex mt-[35px] max-w-[1200px] ml-[20px] mr-[20px]'>
          <Sidebar />
          <Feed database={database} posts={posts} />
          <Wigets />
         </div>  
       {/* )} */}
      
    </div>
  );
}

export default App;

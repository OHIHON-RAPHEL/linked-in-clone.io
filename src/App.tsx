import {useEffect, useState} from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Wigets from './Wigets'
import Feed from './Feed'
import {ref, onValue} from 'firebase/database'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

function App({database}: {database: any}) {
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        })
        );
      } else {
         dispatch(logout());
      }
    });
  },[])

  

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
  
  return (
    <div className='bg-zinc-200 '>
      <Header/>

      {!user ? (
        <Login />
      ) : (
        <div className='flex justify-center mt-[35px] max-w-full'>
          <Sidebar />
          <Feed database={database} posts={posts} />
          <Wigets />
         </div>  
       )}
      
    </div>
  );
}

export default App;

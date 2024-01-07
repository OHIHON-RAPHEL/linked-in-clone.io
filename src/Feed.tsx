import { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { ref,  push} from 'firebase/database'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';

const Feed = ({database, posts}: {database: any, posts: any}) => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");

  const sendPost = async (e: any) => {
    e.preventDefault();
    
    const postsRef = ref(database, 'posts');

    try {
      const newEntryData =  await push(postsRef, {
        name: "raphking",
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
      })
      console.log('Data submitted successfully with key:', newEntryData.key);
    }catch (error) {
        console.log(error);
    };

    setInput("")

  }

  return (
    <div className='flex-[0.4] m-[0 20px] mr-5'>
      <div className='bg-white p-2.5 pb-5 rounded-md mb-5'>
        <div className='border-2 border-gray-300 rounded-3xl flex p-2.5 text-gray-400 pl-[15px]'>
            <CreateIcon />
            <form className='flex w-full'>
                <input type="text" name="text" value={input} onChange={e => setInput(e.target.value)} className='border-[none] flex-[1] ml-2.5 outline-0 font-semobld'/>
                <button onClick={sendPost} type="submit" className=''>Send</button>
            </form>
        </div>
        <div className='flex justify-evenly'>
           <InputOption Icon={ImageIcon} title="photo" color="blue"/>
           <InputOption Icon={SubscriptionsIcon} title="Video" color="blue"/>
           <InputOption Icon={EventNoteIcon} title="Event" color="blue"/>
           <InputOption Icon={CalendarViewDayIcon} title="Write article" color="blue"/>
        </div>
      </div>
      {/* <FlipMove> */}
        {posts.map((posts: any, index: any) => {
          return <Post
            key={index}
            name={posts.name}
            description={posts.description}
            message={posts.message}
          />
        })}
      {/* </FlipMove> */}
      
    </div>
  )
}

export default Feed

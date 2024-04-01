
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InputOption from './InputOption'
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { ref, remove } from 'firebase/database';
// import { useParams } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom'



const Post = ({ name, description, message, photoUrl, database }: {name: string, description: string, message: string, photoUrl: string, database: any}) => {

  // const navigate = useNavigate();

  // const {id} = useParams();
  const deletePost = () => {

    const postRef = ref(database, "posts");

    remove(postRef)
      .then(() => {
        console.log('Post deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting entry:', error);
      });

      // navigate("/");
  };


  return (
    <div className='bg-white p-[15px] mb-2.5 rounded-md'>
      <div className='flex mb-2.5 '>
      <Avatar  src={photoUrl} />
        <div className='ml-2.5'>
            <h2 className='text-lg font-bold'>{name}</h2>
            <p className='text-xs text-gray-500'>{description}</p>
        </div>
        <div>
          <button onClick={deletePost} className="cursor-pointer">delete</button>
        </div>
      </div>

      <div className=''>
        <p className='text-base'>{message}</p>
      </div>

      <div className='flex justify-evenly'>
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>
        <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon} title="Share" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
        <InputOption Icon={DeleteIcon} title="delete" color="gray"/>
      </div>
    </div>
  )
}

export default Post

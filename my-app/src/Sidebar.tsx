import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';

const RecentItem = ({topic} : {topic: any}) => {
 return ( <div className='flex text-[13px] text-gray-500 font-bold mb-[5px] p-[5px] cursor-pointer hover:bg-gray-300 hover:rounded-md hover:text-black'>
    <span className='mr-2.5 ml-[5px]'>#</span>
    <p>{topic}</p>
  </div>)
};


const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className='sticky top-20 flex-[0.2] rounded-md text-center h-fit mr-5'>
      <div className='flex flex-col items-center border-2 border-gray-300  bg-white pb-5'>
        <img src='./images/bg.jpeg' alt="" className='mb-[-20px] w-full h-[60px] rounded-md object-cover'/>
        <Avatar src={user.photoUrl} className='mb-5' />
        <h2 className='text-lg font-bold'>{user.displayName}</h2>
        <h4 className='text-xs text-gray-500'>{user.email}</h4>
      </div>

      <div className='p-2.5 mb-2.5 border-2 border-gray-300 bg-white rounded-md'>
        <div className='flex mt-2.5 justify-between'>
          <p className='text-gray-500 text-sm font-semobold'>Who viewed you</p>
          <p className='font-bold text-blue-500'>2.543</p>
        </div>
        <div className='flex mt-2.5 justify-between'>
          <p className='text-gray-500 text-sm font-semobold'>Views on post</p>
          <p className='font-bold text-blue-500'>2.448</p>
        </div>
      </div>

      <div className='text-center p-2.5 border-2 border-gray-300 bg-white rounded-md mt-2.5'>
        <p>Recent</p>
        <RecentItem topic={"reactjs"}/>
        <RecentItem topic={"programming"}/>
        <RecentItem topic={"softwareengeering"}/>
        <RecentItem topic={"developer"}/>
      </div>
    </div>
  )
}

export default Sidebar
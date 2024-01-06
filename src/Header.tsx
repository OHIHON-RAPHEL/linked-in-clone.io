import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { useDispatch } from 'react-redux';
// import { logout } from './features/userSlice';
// import { auth } from './firebase'

const Header: React.FC = () => {
  // const dispatch = useDispatch();

  // const logoutOfApp = () => {
  //   dispatch(logout())
  //   auth.signOut()
  // };

  return (
    <div className='flex justify-evenly border-b-4 gray-500 pt-2.5 pb-2.5 w-full sticky top-0 bg-white'>
      <div className='flex'>
         <img src='./images/linkedin.png' className='object-contain h-10 mr-5'/>
         <div className='p-2.5 flex items-center rounded text-gray-200 bg-slate-200'>
            <SearchIcon/>
            <input placeholder="search" type="text" className='outline-none border-none '/>
         </div>
      </div>

      <div className='flex'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notification"/>
        <HeaderOption avater="path/to/avatar.png" title="Me" /> 
      </div>
    </div>
  )
}

export default Header


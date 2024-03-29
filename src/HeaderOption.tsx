   
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';

const HeaderOption = ({ avater, Icon, title, onClick }:{avater?: any, Icon?: any, title?: string, onClick?: () => void}) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black'>
      {Icon && <Icon className='object-contain h-6 w-6' />}
      {avater && (<Avatar  src={user?.photoUrl} />)}
      <h3 className='text-xs font-normal'>{title}</h3>
    </div>
  )
}

export default HeaderOption
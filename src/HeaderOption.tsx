import React from 'react'
import Avatar from '@mui/material/Avatar';

const HeaderOption = ({ avater, Icon, title, onClick }:{avater?: string, Icon?: any, title?: string, onClick?: () => void}) => {
  return (
    <div onClick={onClick} className='flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black'>
      {Icon && <Icon className='object-contain h-6 !important w-6' />}
      {avater && <Avatar alt="R" src={avater} />}
      <h3 className='text-xs font-normal'>{title}</h3>
    </div>
  )
}

export default HeaderOption
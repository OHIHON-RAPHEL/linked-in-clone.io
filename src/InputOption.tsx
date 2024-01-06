import React from 'react'

const InputOption = ({ Icon, title, color }: {Icon: any, title: string, color: string}) => {
  return (
    <div className='flex items-center mt-[15px] text-gray-500 p-2.5 cursor-pointer hover:bg-gray-300 hover:rounded-md'>
       <Icon style={{ color: color }}/>
       <h4 className='ml-[5px]'>{title}</h4>
    </div>
  )
}

export default InputOption

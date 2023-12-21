import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center'>
        <div className='flex flex-col left'>
          <h1>Invoices</h1>
          <span>There are 4 total invoices</span>
        </div>
        <div className='right flex '>
           <div  className='filter flex'> 
            <span>Filter by status</span>
            <ArrowDropDownIcon/>
            <ul className='filter_menu hidden'>
                <li>Draft</li>
                <li>Pending</li>
                <li>Paid</li>
                <li>Clear Filter</li>
            </ul>
           </div>
           <div   className='button flex'>
            <div className='inner_button flex'>
              <img src="" />
            </div>
            <span className=''>New Invoice</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home

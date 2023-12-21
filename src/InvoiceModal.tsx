import DeleteIcon from '@mui/icons-material/Delete';
import HeightIcon from '@mui/icons-material/Height';

const InvoiceModal = () => {
  return (
    <div className='fixed top-0 left-0 bg-[transparent] w-full h-screen overflow-scroll min-[900px]:left-[90px] flex flex-col'>
      <form className='relative p-[56px] max-w-[700px] w-full bg-[#141625] text-white
       shadow-[10px_4px_6px_-1px_rgba(0,0,0.2)] '>
        <h1 className='mb-[48px] text-white'>New Invoice</h1>
          {/* bill form */}
        <div className='mb-[48px] flex flex-col'>
           <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill Form</h4>
           <div className='mb-[24px] flex flex-col'>
              <label className='text-[12px] mb-[6px]'>Street Adress</label>
              <input required type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
            </div>
            <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <label className='text-[12px] mb-[6px]'>City</label>
                <input required type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <label className='text-[12px] mb-[6px]'>Zip Code</label>
                <input required type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <label className='text-[12px] mb-[6px]'>Country</label>
                <input required type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
        </div>

       {/* bill to */}
       <div className='bill-to flex flex-col'>
         <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill to</h4>
         <div className='mb-[24px] flex flex-col'>
           <label className='text-[12px] mb-[6px]'>Client Name</label>
           <input type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <label className='text-[12px] mb-[6px]'>Client Email</label>
           <input type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <label className='text-[12px] mb-[6px]'>Street Address</label>
           <input  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col'>
                <label className='text-[12px] mb-[6px]'>City</label>
                <input type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <label className='text-[12px] mb-[6px]'>Zip Code</label>
                <input type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <label className='text-[12px] mb-[6px]'>Country</label>
                <input  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
       </div>

       {/* invoice work details */}
       <div className='gap-6 flex flex-col'>
        <div className='gap-6 flex'>
          <div className='mb-[24px] flex flex-col flex[1]'>
            <label className='text-[12px] mb-[6px]'>Invoice Date</label>
            <input  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
          </div>
          <div className='mb-[24px] flex flex-col flex-[1]'>
            <label className='text-[12px] mb-[6px]'>Payment Due</label>
            <input  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
          </div>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <label className='text-[12px] mb-[6px]'>Payment Terms</label>
          <select required className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none'>
            <option value="30" >Net 3o Days</option>
            <option value="60" >Net 6o Days</option>
          </select>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <label className='text-[12px] mb-[6px]'>Product Description</label>
          <input required type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
        </div>
        <div className='w-full'>
          <h3 className='mb-[16px] text-[18px] text-[#777f98]'>Item List</h3>
          <table className='w-full'>
            <tr className='gap-4 text-[12px] flex'>
              <th className='basis-6/12'>Item Name</th>
              <th className='basis-[10%]'>Qty</th>
              <th className='basis-1/5'>Price</th>
              <th className='basis-1/5'>Total</th>
            </tr>
            <tr className='gap-4 text-[12px] flex'>
              <td className='item-name'><input type="text" /></td>
              <td className='qty'><input type="text" /></td>
              <td className='price'><input type="text" /></td>
              <td className='total flex'>something</td>
              <DeleteIcon />
            </tr>
          </table>

          <div className='flex button'>
            <HeightIcon />
            Add New Item
          </div>
        </div>
       </div>

        {/* save/Exit */}
        <div className='save flex'>
            <div className='left'>
              <button  className='bg-[#ec5757] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Cancel</button>
            </div>
            <div className='right flex'>
              <button  className='bg-[#252945] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Save Draft</button>
              <button  className='bg-[#7c5dfa] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Create Invoice</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default InvoiceModal
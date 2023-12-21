import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import InvoiceModal from './InvoiceModal'
import Home from './Home'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 750);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className='text-center justify-center items-center h-screen bg-[#141625] text-white'>
          <h2>sorry this app is not supported on mobile device</h2>
          <p className='mt-[16px]'>To use this app pls use a computer or tablet</p>
        </div>
      ) : (<div className='bg-[#141625] flex min-h-screen flex-col  min-[900px]:flex-row'>
        <Navigation />
        <div className='p-[20px] flex[1] relative flex flex-col'>
          <InvoiceModal />
         
        </div>
        <Home />
      </div>
      )}
    </div>
  )
}

export default App
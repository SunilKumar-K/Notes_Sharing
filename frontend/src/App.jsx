import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white text-black dark:bg-[#181818] dark:text-white'>
        {/* navbar */}
        <div className='bg-gray-100 rounded-md shadow-xl dark:bg-base-300'>
          <Navbar />
        </div>

        {/* content */}
        <div className='min-h-screen'>
          <Outlet />
        </div>

        {/* footer */}
        <div className=' bg-gray-100 text-black shadow-xl dark:bg-base-300 dark:text-white'>
          <Footer />
        </div>
    </div>
  )
}

export default App




import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        {/* navbar */}
        <div>
          <p>Navbar</p>
        </div>

        {/* content */}
        <div>
          <Outlet />
        </div>

        {/* footer */}
        <div>
          <p>Footer</p>
        </div>
    </div>
  )
}

export default App




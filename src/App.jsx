import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  const [userData, setUserData] = useState()

  useEffect(() => {
    if (WebApp.initDataUnsafe.user){
      setUserData(WebApp.initDataUnsafe.user)
    }
  },[])

  return (
    <>
      {userData ? (
        <ul>
          <li>id : {userData.id}</li>
          <li>first_name : {userData.first_name}</li>
          <li>last_name : {userData.last_name}</li>
          <li>username : {userData.username}</li>
          <li>language_code : {userData.language_code}</li>
          <li>is_premium : {userData.is_premium}</li>
          <li> added_to_attachment_menu: {userData.added_to_attachment_menu}</li>
          <li>allows_write_to_pm : {userData.allows_write_to_pm}</li>
          <li>photo_url : {userData.photo_url}</li>
        </ul>
      ) : (
        <p>No user data available now</p>
      )}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App

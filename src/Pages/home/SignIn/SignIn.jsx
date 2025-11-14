import React, { useContext, useState } from 'react'
import { WaggonContext } from '../../../Context/Context'

function SignIn() {
  const context = useContext(WaggonContext)

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const { theme, toggleTheme } = useContext(WaggonContext)
  console.log(context.userData)
  const storedUser = localStorage.getItem('userData')
  console.log(userName, userPassword)
  console.log(storedUser)



 
  const handleLogin = (e) => {
    const parsedUser = JSON.parse(storedUser)
    e.preventDefault()
    if (userPassword == parsedUser.password && userName == parsedUser.name) {
      context.logUser()
    } 
    else {
      alert('Ups, incorrect password, try again.')
    }

    
  }

  return (
    <div className={`${theme === 'Dark' ? 'flex items-center justify-center mt-[0vh] bg-neutral-700 text-white h-[100vh] mt-20' : 'flex items-center justify-center mt-20 text-black'}`}>
      <div className="w-full max-w-md p-8 space-y-6 ">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          {localStorage.getItem('userData') ? 'Log in' : 'Register'}
        </h1>

        <form className="space-y-6">
          {/* Campos */}
          <div >
            <label className={` block text-sm font-medium text-gray-700`}>Email o user:</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="tu@email.com"
              className={`${theme === 'Dark' ? 'w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-600' : 'w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your password:</label>
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              placeholder="Tu contraseña"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          {/* Botones */}
          <div className="space-y-4">
            <button
              onClick={handleLogin}
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
            >
              {localStorage.getItem('userData') ? 'Log in' : 'Register'}
            </button>

            
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn



/* <button
              onClick={() => {
                context.logUser()
                localStorage.setItem(
                  'userData',
                  JSON.stringify({
                    name: 'Invitado',
                    birth: '—',
                    country: '—',
                    password: '0 '
                  })
                )
              }}
              type="button"
              className="w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              Log in as guest
            </button> */
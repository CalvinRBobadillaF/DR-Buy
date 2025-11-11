import React, { useContext, useState } from 'react'
import { WaggonContext } from '../../../Context/Context'

function SignIn() {
  const context = useContext(WaggonContext)

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  console.log(context.userData)
  const storedUser = localStorage.getItem('userData')
  console.log(userName, userPassword)
  console.log(storedUser)



 
  const handleLogin = (e) => {
    const parsedUser = JSON.parse(storedUser)
    e.preventDefault()
    if (userPassword == parsedUser.password && userName == parsedUser.name) {
      context.logUser()
    } else {
      alert('Ups, incorrect password, try again.')
    }

    
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          {localStorage.getItem('userData') ? 'Log in' : 'Register'}
        </h1>

        <form className="space-y-6">
          {/* Campos */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email o user:</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="tu@email.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            <button
              onClick={() => {
                context.logUser()
                localStorage.removeItem('userData')

              }
              }
              type="button"
              className="w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              Log in as guest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn

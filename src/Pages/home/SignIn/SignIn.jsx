import React, { useContext } from 'react';
import { WaggonContext } from '../../../Context/Context';

function SignIn() {
  let context = useContext(WaggonContext)
  let logged = context.logged

  return (
    // 1. Contenedor principal para centrar todo en la pantalla
    <div className="flex items-center justify-center mt-20 ">
      
     
      <div className="w-full max-w-md p-8 space-y-6   ">
        
        {/* 3. Título */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Iniciar Sesión
        </h1>

        {/* 4. Formulario con espaciado vertical */}
        <form className="space-y-6">
          
          {/* 5. Campo de Usuario/Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email o Usuario:
            </label>
            <input
              id="email"
              type="text"
              placeholder="tu@email.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* 6. Campo de Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Tu contraseña:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Tu contraseña"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* 7. Contenedor de botones */}
          <div className="space-y-4">
            {/* Botón Principal */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Iniciar Sesión
            </button>

            {/* Botón Secundario */}
            <button onClick={context.logUser}
              type="button"
              className="w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Ingresar como invitado
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
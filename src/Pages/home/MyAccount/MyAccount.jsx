import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"
//import { User } from "lucide-react" // Icono de perfil temporal

function MyAccount() {
  const context = useContext(WaggonContext)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br ">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-amber-100">
        {/* Imagen o icono de perfil */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shadow-inner mb-4">
            {/* Aquí luego puedes poner <img src={context.userData.image} alt="Profile" className="w-full h-full object-cover rounded-full" /> */}
            
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">My Account</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your profile information</p>
        </div>

        {/* Datos del usuario */}
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-medium text-gray-800">{context.userData.name || "—"}</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all">
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-lg font-medium text-gray-800">{context.userData.birth || "—"}</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all">
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-lg font-medium text-gray-800">{context.userData.country || "—"}</p>
          </div>
        </div>

        {/* Botón de editar (opcional para futuro) */}
        <div className="mt-8 text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-xl transition-all ">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyAccount

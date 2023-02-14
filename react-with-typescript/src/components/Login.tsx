import { useReducer } from "react"

const initialState = {
    validate: true,
    token:null,
    username:'',
    name:'',
}

interface AuthState {
    validate:boolean;
    token:string | null;
    username:string;
    name:string;
}

type AuthAction = { type:'logout'}


const authReducer = (state:AuthState, action:AuthAction) :AuthState => {
    switch (action.type) {
        case 'logout':
            
            return{
                validate:false,
                token:null,
                username:'',
                name:'',
            }
    
        default:
            return state;
    }
}


export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)



  return (
    <div className="h-screen flex items-center flex-col gap-y-4">

        <h3 className="text-2xl font-bold mb-4">Login</h3>

        <div
            className="bg-blue-500 w-full h-36 items-center justify-center text-black font-bold flex"
        >
            Validando....
        </div>

        <div
            className="bg-red-500 w-full h-36 items-center justify-center text-black font-bold flex"
        >
            No autenticado
        </div>

        <div
            className="bg-green-500 w-full h-36 items-center justify-center text-black font-bold flex"
        >
            autenticado
        </div>


        <div className="flex flex-row gap-4">
            <button
                className="px-4 py-2 bg-yellow-300"
            >
                Login
            </button>
            <button
                className="px-4 py-2 bg-blue-300"
            >
                Logout
            </button>

        </div>

    </div>
  )
}

import { useEffect, useReducer } from "react"

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

type AuthAction = 
    |{ type:'logout'}
    |{type:'login', payload:LoginPayload}

type LoginPayload = {
    username:string,
    name:string
}


const authReducer = (state:AuthState, action:AuthAction) :AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                validate:false,
                token:null,
                username:'',
                name:'',
            }
        case 'login':
            const { name, username} = action.payload
            return{
                token:'abc',
                validate:false,
                name,
                username
            }
    
        default:
            return state;
    }
}


export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
      setTimeout( () => {
        dispatch({ type: 'logout'})
      }, 1500)
    }, [])


    const login = () => {
        dispatch({
            type:'login',
            payload:{
                name:'samir',
                username:'samirdev9669'
            }
        })
    }

    const logout = () => {
        dispatch({
            type:'logout'
        })
    }
    

    if(state.validate){
        return (
            <>
                <div
                className="bg-blue-500 w-full h-36 items-center justify-center text-black font-bold flex"
                >
                Validando....
                </div>
            </>
        )
    }


  return (
    <div className="h-screen flex items-center flex-col gap-y-4">

        <h3 className="text-2xl font-bold mb-4">Login</h3>

        {
            (state.token)
                ?    
                    <div
                        className="bg-green-500 w-full h-36 items-center justify-center text-black font-bold flex"
                    >
                        autenticado como  {state.name}
                    </div>    
                :
                    <div
                    className="bg-red-500 w-full h-36 items-center justify-center text-black font-bold flex"
                    >
                        No autenticado
                    </div>
        }

        <div className="flex flex-row gap-4">

        {   
            (state.token)
                ?    
                    <button
                        className="px-4 py-2 bg-red-500"
                        onClick={logout}
                    >
                        Logout
                    </button>
                       
                :
                    <button
                        className="px-4 py-2 bg-green-500"
                        onClick={login}
                    >
                        Login
                    </button>      
        }
        </div>

    </div>
  )
}

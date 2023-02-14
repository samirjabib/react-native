import { useState } from 'react';



export const useForm = <T extends Object>(form : T) => { //T nos indica que es un objeto generico

    const [ state, setState] = useState(form)

    const onChange = ( value:string, name :keyof T ) => {
        setState({
            ...state,
            [name] : value
        })
    }


  return{
    ...state,
    form:state,
    onChange

  }
}

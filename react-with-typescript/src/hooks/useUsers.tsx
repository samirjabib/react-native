import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList,User } from '../interfaces/reqRes';

export const useUsers = () => {
  
    const paginaRef = useRef(1)
    console.log(paginaRef)

    const [users, setUsers] = useState<User[]>([])

    useEffect( () => {
        chargeUsers()
     }, [])
 

    const chargeUsers =  async() => {
        const response = await reqResApi.get<ReqResList>('/users', {
            params:{
                page:paginaRef.current
            }
        })

        setUsers(response.data.data)

    }


    const nextPage = () => {
        paginaRef.current ++;
        chargeUsers()
        
    }

    const prevPage  = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
            chargeUsers()
        }
    }


    return{
        users,

        chargeUsers,
        nextPage,
        prevPage
    }
}

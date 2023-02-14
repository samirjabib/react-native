import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';

export const Users = () => {

    useEffect( () => {
        reqResApi.get('/users')
            .then( res => console.log(res.data.data) )
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h3>Users</h3>
        <table className='border border-black w-full'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>

    </div>
  )
}

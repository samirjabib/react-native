
import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

    const { users, nextPage, prevPage } = useUsers()


    const renderItem = ( user: User) => {
        return(
            <tr
                key={user.id.toString()}
                className='w-full text-center'
            >
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td><img className='w-12 h-12' src={user.avatar}/></td>
                <td>{user.email}</td>
            </tr>
            ) 
    }

  return (
    <div>
        <h3>Users</h3>
        <table className='border border-black w-full'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                    <th>Email</th>


                </tr>
            </thead>
            <tbody>
                { users.map(user => renderItem(user) )}
            </tbody>
        </table>

        <button
            className='bg-blue-500 text-white px-4 py-2'
            onClick={prevPage}
        >
            Anterior
        </button>
        
        <button
            className='bg-blue-500 text-white px-4 py-2'
            onClick={nextPage}
        >
            Siguiente
        </button>

    </div>
  )
}

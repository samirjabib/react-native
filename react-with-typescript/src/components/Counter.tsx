import { useCounter } from '../hooks/useCounter';

export const Counter = () => {

    const { decrement, increment, value} = useCounter(4)



  return (
    <div className='flex w-full flex-col gap-2 text-center'>
        <p>{value}</p>
        <div>
            <button 
                className='bg-red-500 p-2'
                onClick={() => increment(1)}
            >
                +1
            </button>
            <button 
                className='bg-red-500 p-2'
                onClick={() => decrement(1)}
            >
                -1
            </button>
        </div>
    </div>
  )
}

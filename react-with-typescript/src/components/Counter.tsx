import { useState } from 'react';

export const Counter = () => {

    const [ value, setValue] = useState<number>(0)

    const increment = ( number: number)  => {
        setValue( value + number)
    }

    const decrement = ( number: number)  => {
        setValue( value - number)
    }


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

import { useState } from 'react';

export const useCounter = () => {


    const [ value, setValue] = useState<number>(0)

    const increment = ( number: number)  => {
        setValue( value + number)
    }

    const decrement = ( number: number)  => {
        setValue( value - number)
    }

  return{
    value,

    increment, 
    decrement
  }
}

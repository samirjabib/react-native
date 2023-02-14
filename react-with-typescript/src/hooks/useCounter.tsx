import { useState } from 'react';

export const useCounter = (initial:number)  => {


    const [ value, setValue] = useState<number>(initial)

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

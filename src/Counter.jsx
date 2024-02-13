import React,{useState} from 'react'

export function  Counter(){

    const [count, setcount] = useState(0)

    return(
        <>
           <button className='buttoncount' onClick={()=> setcount( count + 1)}>Increase</button>
           <button className='buttoncount' onClick={()=> setcount(count - 1)}>Decrease</button>
           <h1 className='count'>{count}</h1>
        </>
    )
}

export default Counter
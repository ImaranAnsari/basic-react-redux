import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
    const { counterVal } = useSelector(store => store.counter)
    console.log('counterVal', counterVal);
    return <p className="lead mb-4">
        Counter Current Value : {counterVal}
    </p>

}

export default DisplayCounter
import { useRef } from "react";
import { useDispatch } from "react-redux"

const Controls = () => {
    const dispatch = useDispatch();
    const inputEle = useRef();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    const handlePrivacyTogle = () => {
        dispatch({ type: 'PRIVACY_TOGGLE' })
    }

    const handleAddintion = () => {
        dispatch({ type: 'ADDITION', payload: { number: inputEle.current.value } });
        inputEle.current.value = "";
    }

    const handleSubtract = () => {
        dispatch({ type: 'SUBTRACTION', payload: { number: inputEle.current.value } })
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-warning" onClick={handlePrivacyTogle}>Privacy</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center row_control">
                <input type="text" placeholder="Enter Number" ref={inputEle} className="number_input" onClick={handleIncrement} />
                <button type="button" className="btn btn-info" onClick={handleAddintion}>Add</button>
                <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
            </div>
        </>
    )
}

export default Controls
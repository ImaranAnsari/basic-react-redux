import { useRef } from "react"
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privecyActions } from "../store/privacy";

const Controls = () => {
    const dispatch = useDispatch()
    const inputEle = useRef();
    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    const handlePrivacyTogle = () => {
        dispatch(privecyActions.toggle());
    };

    const handleAddintion = () => {
        dispatch(counterActions.addition(
            inputEle.current.value
        ));
        inputEle.current.value = "";
    };

    const handleSubtract = () => {
        dispatch(counterActions.subtraction(
            inputEle.current.value
        ));
        inputEle.current.value = "";
    };
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleIncrement}
                >
                    +1
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleDecrement}
                >
                    -1
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handlePrivacyTogle}
                >
                    Privacy
                </button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center row_control">
                <input
                    type="text"
                    placeholder="Enter Number"
                    ref={inputEle}
                    className="number_input"
                    onClick={handleIncrement}
                />
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleAddintion}
                >
                    Add
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSubtract}
                >
                    Subtract
                </button>
            </div>
        </>
    );
};

export default Controls;

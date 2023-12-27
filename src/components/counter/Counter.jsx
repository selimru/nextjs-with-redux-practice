import { useReducer } from "react";

const Counter = () => {
    const initialState = 0

    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') {
            return state + 1
        }
        else if (action.type === 'DECREMENT') {
            return state - 1
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className=" bg-blue-300 w-[500px] h-[500px] mx-auto">
            <p className=" text-center py-5">{state}</p>
            <div className=" flex gap-5 justify-center">
                <button
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                    className=" bg-yellow-400 px-4 py-3 rounded-md">Increment</button>
                <button
                    onClick={() => dispatch({ type: 'DECREMENT' })}
                    className=" bg-yellow-400 px-4 py-3 rounded-md">Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
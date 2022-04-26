import './App.css';
import {useReducer} from "react"


const init = (initCount) => {
    return {count1: initCount, count2: initCount, count3: initCount};
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            if (action.payload === 1) {
                return {...state, count1: state.count1 + 1}
            } else if (action.payload === 2) {
                return {...state, count2: state.count2 + 1}
            } else if (action.payload === 3) {
                return {...state, count3: state.count3 + 1}
            }
        case 'dec':
            if (action.payload === 1) {
                return {...state, count1: state.count1 - 1}
            } else if (action.payload === 2) {
                return {...state, count2: state.count2 - 1}
            } else if (action.payload === 3) {
                return {...state, count3: state.count3 - 1}
            }
        case 'reset':
            if (action.payload === 1) {
                return {...state, count1:0}
            } else if (action.payload === 2) {
                return {...state, count2:0}
            } else if (action.payload === 3) {
                return {...state, count3:0}
            }

    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div className='App'>
            <div className="c">
                <h2>{state.count1}</h2>
                <div className="c_btns">
                    <button onClick={() => dispatch({type: 'inc', payload: 1})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec', payload: 1})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset', payload: 1})}>reset</button>
                </div>
            </div>
            <div className="c">
                <h2>{state.count2}</h2>
                <div className="c_btns">
                    <button onClick={() => dispatch({type: 'inc', payload: 2})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec', payload: 2})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset', payload: 2})}>reset</button>
                </div>
            </div>
            <div className="c">
                <h2>{state.count3}</h2>
                <div className="c_btns">
                    <button onClick={() => dispatch({type: 'inc', payload: 3})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec', payload: 3})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset', payload: 3})}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;

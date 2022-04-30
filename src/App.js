import './App.css';
import {useReducer, useState} from "react";
import {useForm} from "react-hook-form";


const reducer = (state, action) => {
    switch (action.type) {
        case 'catAdd':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'dogAdd':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'catDelete':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        case 'dogDelete':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
    }
}

function App() {
    const [state, dispatcher] = useReducer(reducer, {cats: [], dogs: []});

    const {register, handleSubmit} = useForm();

    const [cat, setCat] = useState(null);
    const addCat = (data) => {
        dispatcher({type: 'catAdd', payload: data.cat});
    }
    const addDog = (data) => {
        dispatcher({type: 'dogAdd', payload: data.dog});
    }

    console.log(state);
    return (
        <div className="App">
            <div className="forms">
                <form className="cat" onSubmit={handleSubmit(addCat)}>
                    <input type="text" placeholder='Cat' {...register('cat')}/>
                    <button>Add</button>
                </form>
                <form className="dog" onSubmit={handleSubmit(addDog)}>
                    <input type="text" placeholder='Dog' {...register('dog')}/>
                    <button>Add</button>
                </form>
            </div>
            <div className="out">
                <ul className="cat_out">
                    {state.cats && state.cats.map(cat =>
                        <li key={cat.id}>
                            {cat.name}
                            <button onClick={()=>dispatcher({type:'catDelete',payload:cat.id})}>delete</button>
                        </li>
                    )}
                </ul>
                <ul className="dog_out">
                    {state.dogs && state.dogs.map(dog =>
                        <li key={dog.id}>
                            {dog.name}
                            <button onClick={()=>dispatcher({type:'dogDelete',payload:dog.id})}>delete</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;

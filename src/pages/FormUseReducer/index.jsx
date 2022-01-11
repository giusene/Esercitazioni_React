import { useReducer } from 'react';
import styles from './FormUseReducer.module.scss';

const init = {
    name: '',
    surname: '',
    age: 20,
    job: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        // se volessimo usare una sola action type
        case 'update-input':
            return { ...state, [action.payload.field]: action.payload.value };
        case 'update-name':
            return { ...state, name: action.payload };
        case 'update-surname':
            return { ...state, surname: action.payload };
        case 'update-age':
            return { ...state, age: parseInt(action.payload) };
        case 'update-job':
            return { ...state, job: action.payload };
        default:
            return state;
    }
};

const FormUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, init);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }


    return (
        <div className={styles.main}>
            <p>Questo esercizio utilizza l'Hook useReducer per aggiornare lo State</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => dispatch({ type: 'update-input', payload: {value: e.target.value, field: 'name'} })} name="name" type="text" placeholder="name" value={state.name} />
                <input onChange={(e) => dispatch({ type: 'update-surname', payload: e.target.value })}  name="surname" type="text" placeholder="surname" value={state.surname} />
                <input onChange={(e) => dispatch({ type: 'update-age', payload: e.target.value })} name="age" type="text" placeholder="age" value={state.age} />
                <input onChange={(e) => dispatch({ type: 'update-job', payload: e.target.value })} name="job" type="text" placeholder="junior developer" value={state.job} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default FormUseReducer;
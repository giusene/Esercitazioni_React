import { useEffect, useReducer } from 'react';
import { RenderData } from './../../components/RenderData';
import styles from './EsercizioUseReducer.module.scss';


const INIT_STATE = {
    buttonAdd: 'aggiungi',
    buttonReset: 'reset',
    dataList: [],
}

const newData = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            state.dataList.push(...newData);
            newData.length = 0;
            return { ...state };
        case 'reset':
            state.dataList = [];
            return { ...state };
        default:
            return state;
    }
}

const EsercizioUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const pushFunction = (dispatchType) => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => response.json()).then((data) => { newData.push(data) })
            .then(() => { dispatch({ type: dispatchType }) })
    }

    useEffect(() => {
        pushFunction('add');
        return dispatch({ type: 'reset' });
    }, []);

    return (
        <div className={styles.main}>
            <p>Questo esercizio utilizza l'Hook useReducer per aggiornare lo State</p>
            <div className={styles.buttonWrapper}>
                <button onClick={() => pushFunction('add')} className={styles.button}>{state.buttonAdd}</button>
                <button onClick={() => dispatch({ type: 'reset' })} className={styles.button}>{state.buttonReset}</button>
            </div>

            {state.dataList.map((item, index) => (
                <RenderData key={index} text={item.text} url={item.permalink} num={index + 1} />
            ))}
        </div>
    )

}

export default EsercizioUseReducer;
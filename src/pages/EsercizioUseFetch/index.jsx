import { useState, useEffect } from "react";
import useFetch from 'use-http';
import styles from './EsercizioUseFetch.module.scss';



const EsercizioUseFetch = () => {
    const [data, setData] = useState([]);
    const { get, response } = useFetch('https://fakestoreapi.com')

    useEffect(() => {
        async function loadInitialData() {
            const initialData = await get('/products')
            if (response.ok) {
                setData(initialData);
                console.log(initialData)
            }
        }

        loadInitialData()
    }, [response, get]);



    return (
        <div className={styles.EsercizioUseFetch}>
            <p>Questo esercizio utilizza la libreria <a href="https://use-http.com/#/" target="_blank" rel="noreferrer">useFetch</a> per caricare i dati da API esterne</p>
            <div className={styles.productlist}>
                {data.map((item, index) => {
                    return (
                        <div className={styles.product} style={{ backgroundImage: "url(" + item.image + ")" }} key={index}>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default EsercizioUseFetch;



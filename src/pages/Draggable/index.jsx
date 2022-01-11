
import GridLayout from 'react-grid-layout';
import styles from './Draggable.module.scss';


const Draggable = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
        <div className={styles.main}>
            <p>Questo esercizio utilizza <a href="https://github.com/react-grid-layout/react-grid-layout" target="_blank" without rel="noreferrer">React Grid Layout</a> per draggare i div</p>
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </GridLayout>
        </div>
    )
}

export default Draggable;
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const menuState = [
    { label: 'useReducer', link: '/useReducer', date: '17-dic-21' },
    { label: 'useFetch', link: '/useFetch', date: '20-dic-21' }
]

const Navigation = () => {
    return (
            <ul className={styles.Navigation}>
                {menuState.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={( {isActive}) => isActive ? styles.active : '' } to={item.link}>{item.label}<span>{item.date}</span></NavLink>
                        </li>
                    )
                })}
            </ul>
    )
}

export default Navigation;
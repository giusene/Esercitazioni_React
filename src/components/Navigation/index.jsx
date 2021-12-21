import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = ({menuState}) => {
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
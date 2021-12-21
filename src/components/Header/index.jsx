import Logo from './../Logo';
import Navigation from './../Navigation';
import styles from './Header.module.scss';



const Header = ({menuState}) => {
    return (
        <div className={styles.header}>
            <Logo src='Esercitazioni React' />
            <Navigation menuState={menuState} />
        </div>
    )
}

export default Header;
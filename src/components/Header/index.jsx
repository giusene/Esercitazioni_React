import Logo from './../Logo';
import Navigation from './../Navigation';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo src='Esercitazioni React' />
            <Navigation />
        </div>
    )
}

export default Header;
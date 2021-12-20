import styles from './Navigation.module.scss';

const menuState = [
    { label: 'useFetch', link: '/useFetch' },
]

const Navigation = () => {
    return (
            <ul className={styles.Navigation}>
                {menuState.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    )
                })}
            </ul>
    )
}

export default Navigation;
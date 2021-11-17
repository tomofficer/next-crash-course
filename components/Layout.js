import Nav from './Nav'
import styles from '../styles/Layout.module.css'


const layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout

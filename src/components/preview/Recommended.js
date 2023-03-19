import styles from './Recommended.module.css'

const models = [
    "Audi",
    "Mercedes",
    "Volvo",
    "Mazda",
    "Škoda",
    "Renault",
    "Peugeot"
]

const Recommended = () => {
    const firstRandom = Math.floor(Math.random() * models.length);
    let secondRandom = Math.floor(Math.random() * models.length);

    while(firstRandom === secondRandom)
    {
        secondRandom = Math.floor(Math.random() * models.length);
    }

    return (
        <div className={styles.cont}>
            <div className={styles.box}>Try to search for</div>
            <div className={styles.box}>{models[firstRandom]}</div>
            <div className={styles.box}>{models[secondRandom]}</div>
        </div>
    )
}

export default Recommended
import Image from "next/image"
import styles from '@/app/home/Div1_0/styles.module.css'

export const Div1 = () => {
    return(
        <div className={styles.Div1}>
            <div className={styles.image} >
                <img src="Foto centroteste.png" alt=""/>
            </div>
            {/* <TEXT
                characters="“Preservar o meio ambiente é também uma forma
                            de preservar nossa própria vida”"
            /> */}
        </div>
    )
}
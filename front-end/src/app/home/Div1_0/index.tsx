import Image from "next/image"
import styles from '@/app/home/Div1_0/styles.module.css'

export const Div1 = () => {
    return(
        <div className={styles.Div1}>
            <Image
                src="/Foto centroteste.png"
                width={1800} 
                height={507}
                alt="Figura centroteste"
            />
        </div>
    )
}
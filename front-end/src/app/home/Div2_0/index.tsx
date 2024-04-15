import Image from "next/image"
import styles from '@/app/home/Div2_0/styles.module.css'

export const Div2 = () => {
    return(
        <div className={styles.Div2}>
            <Image
                src="/Foto_Div2.png"
                width={1800} 
                height={385}
                alt="Figura div2"
            />
        </div>
    )
}
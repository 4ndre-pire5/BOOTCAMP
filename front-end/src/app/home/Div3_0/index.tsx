import Image from "next/image"
import styles from '@/app/home/Div3_0/styles.module.css'

export const Div3 = () => {
    return(
        <div className={styles.Div3}>
            <Image
                src="/Foto_Div3.png"
                width={1800} 
                height={764}
                alt="Figura div3"
            />
        </div>
    )
}
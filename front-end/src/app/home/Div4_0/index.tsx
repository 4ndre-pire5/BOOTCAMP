import Image from "next/image"
import styles from '@/app/home/Div4_0/styles.module.css'

export const Div4 = () => {
    return(
        <div className={styles.Div4}>
            <Image
                src="/Foto_Div4.png"
                width={1800} 
                height={430}
                alt="Figura div4"
            />
        </div>
    )
}
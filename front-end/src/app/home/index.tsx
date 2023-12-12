import styles from '@/app/home/styles.module.css'
import { Div1 as Div1_0 } from '@/app/home/Div1_0'
import { Div2 as Div2_0 } from '@/app/home/Div2_0'
import { Div3 as Div3_0 } from '@/app/home/Div3_0'
import { Div4 as Div4_0 } from '@/app/home/Div4_0'
import { Footer } from './Footer';

export default function Home() {
    // if (session) session.user.accessToken = "dddd";
  
    return (
      <div className={styles.HomePage}>
        <Div1_0/>
        <Div2_0/>
        <Div3_0/>
        <Div4_0/>
        <Footer/>
      </div>
    );
  }
  
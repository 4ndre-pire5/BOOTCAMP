import "./style.css";
import { Headerbackground as Headerbackground_0 } from "@/app/home/assets/Headerbackground_0";
import { TEXT } from "@/app/home/components/TEXT";
import { Logo as Logo_0 } from "@/app/home/assets/Logo_0";
import { User1 as User1_0 } from "@/app/home/assets/User1_0";

export const Header = () => {
  return (
    <div className="Header_28_77">
      <Headerbackground_0 />
      <TEXT characters="Sobre" className="TEXT_28_79" />
      <TEXT characters="Mapa" className="TEXT_28_80" />
      <TEXT characters="Quem Somos" className="TEXT_28_81" />
      <TEXT characters="Ongs" className="TEXT_28_82" />
      <TEXT characters="Entrar" className="TEXT_28_83" />
      <Logo_0 />
      <User1_0 />
    </div>
  );
};

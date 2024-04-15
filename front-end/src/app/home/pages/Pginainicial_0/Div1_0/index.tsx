import "./style.css";
import { Rectangle1 as Rectangle1_0 } from "@/app/home/assets/Rectangle1_0";
import { Fotobordas as Fotobordas_0 } from "@/app/home/assets/Fotobordas_0";
import { Fotocentro as Fotocentro_0 } from "@/app/home/assets/Fotocentro_0";
import { TEXT } from "@/app/home/components/TEXT"
import { Rectangle7 as Rectangle7_0 } from "@/app/home/assets/Rectangle7_0";

export const Div1 = () => {
  return (
    <div className="Div1_28_71">
      <Rectangle1_0 />
      <Fotobordas_0 />
      <Fotocentro_0 />
      {/* <TEXT
        characters="Refloresta"
        className="TEXT_28_75"
      /> */}
      <Rectangle7_0 />
      <TEXT
        characters="“Preservar o meio ambiente é também uma forma"
        className="TEXT_28_76"
      />
      <TEXT
        characters= "de preservar nossa própria vida”"
        className="TEXT_28_77"
      />
    </div>
  );
};

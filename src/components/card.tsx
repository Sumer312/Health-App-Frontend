import { useContext } from "solid-js";
import { ThemeContext } from "../main";

interface cardPropType {
  title: string;
  imageUrl: string;
}

export default function Card(props: cardPropType) {
  const [value, setValue] = useContext(ThemeContext)
  return (
    <div class="card h-96 w-96 image-full border-4 border-base-100 hover:border-primary-focus" data-theme={value()}>
      <figure>
        <img src={props.imageUrl} width="400" height="100" alt="image!" />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-sans text-[24px] font-semibold">{props.title}</h2>
      </div>
    </div>
  );
}

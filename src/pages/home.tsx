import Card from "../components/card";
import { Link } from "@solidjs/router";
export enum programEnum {
  MUSCLE = "muscle",
  FAL_LOSS = "fatloss",
  MAINTAIN = "maintain",
}

export default function Home() {
  return (
    <div class='main'>
      <div class="xl:mt-36">
        <div class='grid gap-16 xl:grid-cols-3 xl:gap-8 xs:grid-col-1 sm:grid-cols-1 sm:gap-16 md:grid-cols-1 md:gap-16 lg:grid-cols-2 lg:gap-16'>
          <Link href={"/user-input/" + programEnum.FAL_LOSS}>
            <Card
              title='Fat Loss'
              imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq7MMS-iz1-0S8yDmZojm9ig1jWk5c4Wtgg'
            />
          </Link>
          <Link href={"/user-input/" + programEnum.MUSCLE}>
            <Card
              title='Muscle Building'
              imageUrl='https://cdn.fitnesspassion.it/image/original/cbum-shoulders.jpg'
            />
          </Link>
          <Link href={"/user-input/" + programEnum.MAINTAIN}>
            <Card
              title='Maintain'
              imageUrl='https://www.greatestphysiques.com/wp-content/uploads/2017/06/Courtney-King-10.jpg'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

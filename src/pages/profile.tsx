import { Link } from "@solidjs/router";

export default function Profile() {
  return (
    <div class='main'>
      <div class="radial-progress text-success mt-12" style={"--value:" + 50 + "; --size:24rem; --thickness: 1rem;"}>curr/goal</div>
      <h1 class="text-[16px] text-secondary-content"> hi you are doing this rn</h1>
      <p class="text-[12px] text-secondary-content mt-56"> *Progress Bar is updated every 24 hours</p>
    </div>
  );
}

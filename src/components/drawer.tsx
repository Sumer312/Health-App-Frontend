import { DrawerContext, ThemeContext } from "../main";
import { useContext } from "solid-js";
import { TbLogin } from 'solid-icons/tb'

//@ts-ignore
export default function Drawer(props) {
  const [drawerToggle, changeDrawerToggle] = useContext(DrawerContext);
  const [theme, changeTheme] = useContext(ThemeContext);
  return (
    <div class="drawer" data-theme={theme()}>
      <input id="my-drawer" type="checkbox" class="drawer-toggle" checked={drawerToggle()} readonly />
      <div class="drawer-content overflow-auto">{props.children}</div>
      <div class="drawer-side z-50">
        <label for="my-drawer" class="drawer-overlay" onClick={() => changeDrawerToggle(false)}></label>
        <ul class="menu p-4 w-72 h-full bg-base-100 text-base-content backdrop-blur-lg bg-opacity-50">
          <button class="btn btn-sm btn-circle btn-primary place-self-end mb-4" onClick={() => changeDrawerToggle(!drawerToggle())}>X</button>
          <li><a href="/auth/login"><TbLogin size="1.5rem" />Login</a></li>
        </ul>
      </div>
    </div>
  )
} 

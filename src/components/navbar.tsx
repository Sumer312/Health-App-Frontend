import { Link } from "@solidjs/router";
import { BsBrightnessHighFill } from "solid-icons/bs";
import { BiSolidMoon } from "solid-icons/bi"
import { useContext } from "solid-js";
import { ThemeContext, theme_enum } from "../main";
import { FiMenu } from 'solid-icons/fi'
import { DrawerContext } from "../main";

export default function Navbar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const [drawerToggle, changeDrawerToggle] = useContext(DrawerContext);
  return (
    <>
      <nav class='fixed z-40 navbar h-20 bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <div class="navbar-start">
          <button class="ml-4" onClick={() => changeDrawerToggle(!drawerToggle())} >
            <FiMenu size="1.5rem" />
          </button>
        </div>
        <div class="navbar-center">
          <div class='flex-1'>
            <Link class='btn btn-ghost normal-case text-[24px] font-sans font-bold' href='/'>
              <img
                src='https://img.icons8.com/?size=512&id=X3XGYoBQVt1Q&format=png'
                width='30'
                height='10'
              />
              Fitness App
            </Link>
          </div>
        </div>
        <div class="navbar-end">
          <button
            class="mr-4"
            onclick={() =>
              changeTheme(
                theme() === theme_enum.LIGHT
                  ? theme_enum.DARK
                  : theme_enum.LIGHT,
              )
            }
          >
            {theme() === theme_enum.DARK ? (
              <BsBrightnessHighFill size='1.5rem' />
            ) : (
              <BiSolidMoon size='1.5rem' />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

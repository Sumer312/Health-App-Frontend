import { createContext, createSignal } from "solid-js";
import App from "./App";
import Drawer from "./components/drawer";

export enum theme_enum {
  LIGHT = "retro",
  DARK = "coffee",
}

export const ThemeContext = createContext<any>([theme_enum.LIGHT, () => { }]);
export const DrawerContext = createContext<any>([false, () => { }]);

export default function Main() {
  const [theme, changeTheme] = createSignal<theme_enum>(theme_enum.DARK);
  const [drawerToggle, changeDrawerToggle] = createSignal<boolean>(false);
  return (
    <DrawerContext.Provider value={[drawerToggle, changeDrawerToggle]}>
      <ThemeContext.Provider value={[theme, changeTheme]}>
        <Drawer>
          <App />
        </Drawer>
      </ThemeContext.Provider>
    </DrawerContext.Provider>
  );
}

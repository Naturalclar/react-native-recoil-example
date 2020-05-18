import * as React from "react";
import { TodoList } from "./TodoList";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-native-sketchbook";
import {
  AppearanceProvider,
  useColorScheme,
  Appearance,
} from "react-native-appearance";

Appearance.getColorScheme();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ModeProvider>
      <RecoilRoot>
        <ThemeProvider appearance={colorScheme}>
          <TodoList />
        </ThemeProvider>
      </RecoilRoot>
    </ModeProvider>
  );
}

const ModeProvider = ({ children }) => {
  return <AppearanceProvider>{children}</AppearanceProvider>;
};

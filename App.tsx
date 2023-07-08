import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import { useFonts } from "expo-font";
import { BalooThambi_Regular400 } from "@expo-google-fonts/baloo-thambi";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Property } from "./src/screens/Property";

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooThambi_Regular400,
  })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Property />
        <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content"/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

import { StatusBar, Dimensions } from "react-native";

class ScreenApp {
  static getHeightStatusBar(): number {
    return StatusBar?.currentHeight ?? 0;
  }

  static getHeightTotalApp(): number {
    return Dimensions.get("window").height;
  }

  static getWidthTotalApp(): number {
    return Dimensions.get("window").width;
  }
};

export default ScreenApp;
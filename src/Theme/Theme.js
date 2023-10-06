import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import COLORS from "./Colors";
const Theme = {
  Light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,

      //common
      glass: COLORS.transparent,
      black: COLORS.black,
      white: COLORS.white,
      gradients: COLORS.lightGradients,

      //----- brand colors --------//
      Sunset: "#F65B4E",
      Twilight: "#29319F",
      Morning: "#FFBA7C",
      Fog: "#FFDEEF",
      Eclipse: "#573353",

      //text
      eclipseText: COLORS.Eclipse,
      morningText: COLORS.Morning,
      dimasText: COLORS.Dimas,

      //bottom menu
      bottomMenuBackground: COLORS.white,
      plusButtonPrimaryBackground: COLORS.Sunrise,
      plusButtonSecondaryBackground: COLORS.Dimas,

      //ui
      cardBackground: COLORS.white,

      primaryIconColor: COLORS.Eclipse,
      secondaryIconColor: COLORS.Dimas,

      cardButtonBackground: COLORS.Sunrise,
      buttonMorningBackground: COLORS.Sunrise,
      buttonDimasBackground: COLORS.Dimas,
      buttonEclipseBackground: COLORS.Eclipse,

      darkModeToggleBackground: COLORS.Midday,
      //layout
      primaryGradientBackground: COLORS.lightGradients[5],
      primaryBackground: COLORS.Midday,
      secondaryBackground: COLORS.white,
      overlay: COLORS.Dark,
      shadow: COLORS.darkGrey,
    },
  },
  Dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,

      //common
      glass: COLORS.transparent,

      black: COLORS.white,
      white: COLORS.black,
      gradients: COLORS.darkGradients,

      //----- brand colors --------//
      Sunset: "#F65B4E",
      Twilight: "#29319F",
      Morning: "#FFBA7C",
      Fog: "#FFDEEF",
      Eclipse: "#573353",

      //text
      eclipseText: COLORS.Eclipse,
      morningText: COLORS.Morning,
      dimasText: COLORS.Dimas,

      //bottom menu
      bottomMenuBackground: COLORS.Dimas,
      plusButtonPrimaryBackground: COLORS.Sunrise,
      plusButtonSecondaryBackground: COLORS.Dimas,

      //ui
      cardBackground: COLORS.Dark,

      primaryIconColor: COLORS.Dimas,
      secondaryIconColor: COLORS.Morning,

      cardButtonBackground: COLORS.Sunset,
      buttonMorningBackground: COLORS.Sunrise,
      buttonDimasBackground: COLORS.Dimas,
      buttonEclipseBackground: COLORS.Morning,

      darkModeToggleBackground: COLORS.Dimas,
      //layout
      primaryGradientBackground: COLORS.darkGradients[4],
      primaryBackground: COLORS.Sunset,
      secondaryBackground: COLORS.Dark,
      overlay: COLORS.lightWhite,
      shadow: COLORS.darkGrey,

      //----- brand colors --------//
      Sunset: "#663129",
      Twilight: "#221f46",
      Morning: "#674f3a",
      Fog: "#665b61",
      Eclipse: "#2d202b",
    },
  },
};

export default Theme;

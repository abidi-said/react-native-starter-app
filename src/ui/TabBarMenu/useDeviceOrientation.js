import { useEffect, useState, useCallback } from "react";
import { Dimensions } from "react-native";

const screen = Dimensions.get("window");

export function useDeviceOrientation() {
  const isOrientationPortrait = ({ width, height }) => height >= width;
  const isOrientationLandscape = ({ width, height }) => width >= height;

  const [orientation, setOrientation] = useState({
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen),
  });

  const onChange = useCallback((screen) => {
    setOrientation({
      portrait: isOrientationPortrait(screen),
      landscape: isOrientationLandscape(screen),
    });
  }, []);

  useEffect(() => {
    const subscription = () =>
      Dimensions.addEventListener("change", () => {
        const screen = Dimensions.get("window");
        onChange(screen);
      });
    subscription();
    return () => subscription().remove();
    // return () => {
    //   Dimensions.removeEventListener('change', ()=>{
    //     const screen = Dimensions.get('window');
    //     onChange(screen);
    //   });
    // };
  }, []);

  return orientation.portrait === true ? "PORTRAIT" : "LANDSCAPE";
}

import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
function HButton(props) {
  const {
    onPress,
    containerStyle,
    iconSource,
    imageStyle,
    title,
    titleStyle,
    renderTitle,
    onLongPress,
    onPressOut,
    onPressIn,
    iconRef,
    onLayout,
  } = props;

  return (
    <TouchableOpacity
      ref={iconRef}
      onLayout={onLayout}
      style={[styles.headerButtonContainer, containerStyle]}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      onPressIn={onPressIn}
      onPress={onPress}
    >
      {iconSource && (
        <Image style={[styles.Image, imageStyle]} source={iconSource} />
      )}
      {renderTitle && <Text style={[styles.title, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

export default HButton;

const styles = StyleSheet.create({
  headerButtonContainer: {
    padding: 15,
  },
  Image: {
    width: 25,
    height: 25,
    margin: 6,
  },
  title: {
    color: "#151723",
    fontSize: 12,
  },
});

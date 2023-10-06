import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDeviceOrientation } from "../../useDeviceOrientation";
import { getPath, getPathUp } from "./path";
import useStyle from "./styles";

const defaultProps = {
  bgColor: "gray",
  type: "down",
  borderTopLeftRight: false,
  strokeWidth: 0,
};

const BottomBarComponent = (props) => {
  const {
    type,
    style,
    width = null,
    height = 65,
    circleWidth = 50,
    bgColor,
    initialRouteName,
    tabBar,
    renderCircle,
    borderTopLeftRight,
    strokeWidth,
  } = props;

  const styles = useStyle();

  const [selectTab, setSelectTab] = useState(initialRouteName);
  const [itemLeft, setItemLeft] = useState([]);
  const [itemRight, setItemRight] = useState([]);
  const [maxWidth, setMaxWidth] = useState(width);
  const [maxHeight, setMaxHeight] = useState(Dimensions.get("window").height);
  const children = props?.children;
  const orientation = useDeviceOrientation();

  useEffect(() => {
    const { width: w, height: h } = Dimensions.get("window");
    if (!width) {
      setMaxWidth(w);
    }
    setMaxHeight(h);
  }, [orientation]);

  const _renderButtonCenter = () => {
    return renderCircle();
  };

  useEffect(() => {
    const arrLeft = children.filter((item) => item.props.position === "left");
    const arrRight = children.filter((item) => item.props.position === "right");

    setItemLeft(arrLeft);
    setItemRight(arrRight);

    setRouteName(initialRouteName);
  }, []);

  const setRouteName = (name) => {
    setSelectTab(name);
  };

  const d =
    type === "down"
      ? getPath(
          maxWidth,
          height,
          circleWidth >= 50 ? circleWidth : 50
          // borderTopLeftRight
        )
      : getPathUp(
          maxWidth,
          height + 30,
          circleWidth >= 50 ? circleWidth : 50
          // borderTopLeftRight
        );
  if (d) {
    return (
      <View style={styles.wrapContainer}>
        <View style={[styles.routeNameContainer, { height: maxHeight }]}>
          {children?.map((route, index) => {
            const routeName = route.props.name;
            return (
              <View
                key={index}
                style={[
                  selectTab === routeName ? { flex: 1 } : { display: "none" },
                ]}
              >
                {route.props.component()}
              </View>
            );
          })}
        </View>

        <View style={[styles.svgContainer, style]}>
          <Svg width={maxWidth} height={height + (type === "down" ? 0 : 30)}>
            <Path
              fill={bgColor}
              stroke="#DDDDDD"
              strokeWidth={strokeWidth}
              {...{ d }}
            />
          </Svg>
          <View
            style={[
              styles.main,
              { width: maxWidth },
              type === "up" && { top: 30 },
            ]}
          >
            <View style={[styles.rowLeft, { height: height }]}>
              {itemLeft.map((item, index) => {
                const routeName = item.props.name;

                return (
                  <View style={{ flex: 1 }} key={index}>
                    {tabBar({
                      routeName,
                      selectTab: selectTab,
                      navigation: (selectTab) => {
                        setRouteName(selectTab);
                      },
                    })}
                  </View>
                );
              })}
            </View>
            {_renderButtonCenter()}
            <View style={[styles.rowRight, { height: height }]}>
              {itemRight.map((item, index) => {
                const routeName = item.props.name;
                return (
                  <View style={{ flex: 1 }} key={index}>
                    {tabBar({
                      routeName,
                      selectTab: selectTab,
                      navigation: (selectTab) => {
                        setRouteName(selectTab);
                      },
                    })}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }
  return null;
};

BottomBarComponent.defaultProps = defaultProps;

export default BottomBarComponent;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HeaderContainer = () => {
  return (
    <View style={styles.header}>
      <Image
        style={[styles.buttonIcon, styles.avatarLayout]}
        contentFit="cover"
        source={require("../assets/button1.png")}
      />
      <View style={styles.title}>
        <Text style={[styles.thursday08July, styles.helloLinhPosition]}>
          Thursday, 08 July
        </Text>
        <Text style={[styles.helloLinh, styles.helloLinhPosition]}>
          Hello Linh!
        </Text>
      </View>
      <View style={[styles.avatar, styles.avatarLayout]}>
        <Image
          style={styles.avatar6Icon}
          contentFit="cover"
          source={require("../assets/avatar-6.png")}
        />
      </View>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/icon-1.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    height: 56,
    width: 56,
    top: 3,
    position: "absolute",
  },
  helloLinhPosition: {
    textAlign: "left",
    left: "0%",
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  buttonIcon: {
    left: 271,
  },
  thursday08July: {
    marginTop: -2,
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.headline06,
    color: Color.colorsBlack100,
  },
  helloLinh: {
    marginTop: -26,
    fontSize: FontSize.headline06_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraph03,
    color: Color.gray_100,
  },
  title: {
    marginTop: -25.5,
    width: "51.07%",
    right: "24.46%",
    left: "24.46%",
    height: 52,
    top: "50%",
    position: "absolute",
  },
  avatar6Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  avatar: {
    left: 0,
  },
  icon1: {
    top: 0,
    left: 9,
    width: 59,
    height: 59,
    position: "absolute",
  },
  icon: {
    top: 45,
    left: 47,
    width: 16,
    height: 16,
    position: "absolute",
  },
  header: {
    top: 76,
    left: 23,
    width: 327,
    height: 61,
    position: "absolute",
  },
});

export default HeaderContainer;

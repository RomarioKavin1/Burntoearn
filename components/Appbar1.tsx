import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Appbar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.appbar, styles.appbarLayout]}>
      <View style={[styles.appbar1, styles.appbarLayout]}>
        <View style={styles.base} />
        <View style={[styles.item5, styles.itemIconPosition]}>
          <Image
            style={[styles.dotIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dot1.png")}
          />
          <Text style={styles.home}>Reward</Text>
        </View>
        <Image
          style={[styles.item4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/item-41.png")}
        />
        <Image
          style={[styles.playIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/play1.png")}
        />
        <Image
          style={[styles.item2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/item-21.png")}
        />
        <Pressable
          style={[styles.item1, styles.itemIconPosition]}
          onPress={() => navigation.navigate("HomeScroll3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/item-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbarLayout: {
    height: 102,
    width: 375,
    left: 0,
    position: "absolute",
  },
  itemIconPosition: {
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  base: {
    right: "0%",
    left: "0%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorsWhite100,
    bottom: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  dotIcon: {
    height: "3.81%",
    width: "6.67%",
    top: "61.9%",
    right: "46.67%",
    bottom: "34.29%",
    left: "46.67%",
    position: "absolute",
  },
  home: {
    marginTop: -12,
    width: "86.67%",
    top: "50%",
    left: "6.67%",
    fontSize: FontSize.paragraph03_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.headline02,
    color: Color.colorsBlack100,
    textAlign: "center",
    position: "absolute",
  },
  item5: {
    right: "5.33%",
    left: "78.67%",
  },
  item4Icon: {
    right: "22.67%",
    left: "61.33%",
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  playIcon: {
    height: "61.9%",
    width: "17.33%",
    top: "16.19%",
    right: "41.33%",
    bottom: "21.9%",
    left: "41.33%",
    position: "absolute",
  },
  item2Icon: {
    right: "61.33%",
    left: "22.67%",
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  item1: {
    left: "5.33%",
    right: "78.67%",
  },
  appbar1: {
    top: 0,
  },
  appbar: {
    top: 710,
  },
});

export default Appbar;

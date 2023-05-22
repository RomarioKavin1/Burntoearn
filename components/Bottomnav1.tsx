import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Bottomnav1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appbarParent}>
      <View style={styles.appbar}>
        <View style={styles.base} />
        <Pressable
          style={[styles.item5, styles.itemIconPosition]}
          onPress={() => navigation.navigate("RewardReward")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/item-5.png")}
          />
        </Pressable>
        <Image
          style={[styles.item4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/item-4.png")}
        />
        <Image
          style={[styles.playIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/play.png")}
        />
        <Image
          style={[styles.item2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/item-2.png")}
        />
        <View style={[styles.item1, styles.itemIconPosition]}>
          <Image
            style={[styles.dotIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dot.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemIconPosition: {
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  base: {
    right: "0%",
    left: "0%",
    borderRadius: Border.br_21xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  item5: {
    left: "78.67%",
    right: "5.33%",
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
    right: "41.33%",
    bottom: "38.1%",
    left: "41.33%",
    top: "0%",
    maxWidth: "100%",
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
    marginTop: -11.5,
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
  item1: {
    right: "78.67%",
    left: "5.33%",
  },
  appbar: {
    top: 25,
    left: 0,
    width: 375,
    height: 105,
    position: "absolute",
  },
  appbarParent: {
    flex: 1,
    height: 154,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
  },
});

export default Bottomnav1;

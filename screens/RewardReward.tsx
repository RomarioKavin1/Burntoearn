import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import WalletConnector from "../components/WalletConnector";
import ProgressContainer from "../components/ProgressContainer";
import { useNavigation } from "@react-navigation/native";
import HeaderContainer from "../components/HeaderContainer";
import ConnectedContainer from "../components/ConnectedContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const RewardReward = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rewardreward}>
      <View style={styles.body}>
        <WalletConnector />
        <ProgressContainer />
        <LinearGradient
          style={styles.bodyChild}
          locations={[0, 1]}
          colors={["rgba(255, 96, 121, 0.16)", "rgba(255, 96, 121, 0.09)"]}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon10.png")}
        />
        <Text style={[styles.yourAvaialblePoint, styles.thisWeekPointsTypo]}>
          Your Avaialble points
        </Text>
        <Text style={[styles.pts, styles.ptsTypo]}>
          <Text style={styles.text}>{`8918 `}</Text>
          <Text style={styles.pts1}>pts.</Text>
        </Text>
        <Text style={[styles.pts2, styles.ptsTypo]}>
          <Text style={styles.text1}>{`25/50 `}</Text>
          <Text style={styles.pts3}>pts</Text>
        </Text>
        <View style={[styles.base, styles.basePosition]} />
        <View style={[styles.status, styles.basePosition]} />
        <Image
          style={[styles.illustrationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/illustration.png")}
        />
        <Image
          style={styles.image28Icon}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <Text style={[styles.thisWeekPoints, styles.homePosition]}>
          Todays points
        </Text>
      </View>
      <View style={[styles.appbar, styles.appbarLayout]}>
        <View style={[styles.appbar1, styles.text2Position]}>
          <View style={[styles.base1, styles.base1Position]} />
          <View style={[styles.item5, styles.itemIconPosition]}>
            <Image
              style={[styles.dotIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/dot1.png")}
            />
            <Text style={[styles.home, styles.homePosition]}>Reward</Text>
          </View>
          <Image
            style={[styles.item4Icon, styles.itemIconPosition]}
            contentFit="cover"
            source={require("../assets/item-41.png")}
          />
          <Image
            style={[styles.playIcon, styles.playIconPosition]}
            contentFit="cover"
            source={require("../assets/play1.png")}
          />
          <Image
            style={[styles.item2Icon, styles.itemIconPosition]}
            contentFit="cover"
            source={require("../assets/item-21.png")}
          />
          <Pressable
            style={[styles.item1, styles.itemIconPosition]}
            onPress={() => navigation.navigate("HomeScroll3")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/item-1.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.metamaskFox1Icon}
        contentFit="cover"
        source={require("../assets/metamask-fox-1.png")}
      />
      <HeaderContainer />
      <View style={[styles.minttokens, styles.playIconPosition]}>
        <View style={[styles.buttonShape, styles.base1Position]} />
        <Text style={[styles.text2, styles.text2Position]}>Mint Tokens</Text>
      </View>
      <ConnectedContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  thisWeekPointsTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    left: "10.03%",
    textAlign: "left",
    width: "42.25%",
  },
  ptsTypo: {
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
  },
  basePosition: {
    backgroundColor: Color.black,
    borderRadius: Border.br_9xs,
    bottom: "25.19%",
    top: "74.07%",
    height: "0.74%",
    left: "9.12%",
    position: "absolute",
  },
  homePosition: {
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    top: "50%",
    position: "absolute",
  },
  appbarLayout: {
    height: 102,
    width: 375,
    left: 0,
  },
  text2Position: {
    top: 0,
    position: "absolute",
  },
  base1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  itemIconPosition: {
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  playIconPosition: {
    left: "41.33%",
    position: "absolute",
  },
  bodyChild: {
    top: 225,
    left: 2,
    borderRadius: 30,
    width: 325,
    height: 189,
    opacity: 0.8,
    backgroundColor: Color.new,
    position: "absolute",
  },
  icon: {
    height: "4.44%",
    width: "7.29%",
    top: "45.19%",
    right: "83.59%",
    bottom: "50.37%",
    left: "9.12%",
    maxWidth: "100%",
    position: "absolute",
  },
  yourAvaialblePoint: {
    marginTop: 25,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.headline07_size,
    top: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.headline02_size,
  },
  pts1: {
    fontSize: FontSize.headline06_size,
  },
  pts: {
    marginTop: 46,
    left: "10.94%",
    lineHeight: 34,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    width: "42.25%",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
  },
  text1: {
    fontSize: FontSize.bodyBody1_size,
  },
  pts3: {
    fontSize: FontSize.headline07_size,
  },
  pts2: {
    marginTop: 96,
    left: "73.86%",
    lineHeight: 26,
    textAlign: "right",
    top: "50%",
    position: "absolute",
  },
  base: {
    width: "84.8%",
    right: "6.08%",
    opacity: 0.1,
  },
  status: {
    width: "36.47%",
    right: "54.41%",
  },
  illustrationIcon: {
    height: "33.89%",
    width: "92.79%",
    top: "42.87%",
    right: "3.31%",
    bottom: "23.24%",
    left: "3.9%",
    opacity: 0.05,
    position: "absolute",
  },
  image28Icon: {
    top: 267,
    left: 199,
    width: 123,
    height: 92,
    position: "absolute",
  },
  thisWeekPoints: {
    marginTop: 98,
    height: 26,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    left: "10.03%",
    width: "42.25%",
  },
  body: {
    top: 156,
    left: 23,
    width: 329,
    height: 540,
    position: "absolute",
  },
  base1: {
    borderRadius: Border.br_21xl,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    backgroundColor: Color.colorsWhite100,
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
    left: "6.67%",
    textAlign: "center",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
  },
  item5: {
    right: "5.33%",
    left: "78.67%",
  },
  item4Icon: {
    right: "22.67%",
    left: "61.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  playIcon: {
    height: "61.9%",
    width: "17.33%",
    top: "16.19%",
    right: "41.33%",
    bottom: "21.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  item2Icon: {
    right: "61.33%",
    left: "22.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  item1: {
    left: "5.33%",
    right: "78.67%",
  },
  appbar1: {
    height: 102,
    width: 375,
    left: 0,
  },
  appbar: {
    top: 710,
    position: "absolute",
  },
  metamaskFox1Icon: {
    top: 634,
    left: 34,
    width: 62,
    height: 62,
    position: "absolute",
    overflow: "hidden",
  },
  buttonShape: {
    height: "82.14%",
    top: "10.71%",
    bottom: "7.14%",
    borderRadius: Border.br_base,
    backgroundColor: "#ffdee4",
    left: "0%",
    right: "0%",
  },
  text2: {
    left: 19,
    fontSize: 10,
    lineHeight: 28,
    width: 60,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "left",
  },
  minttokens: {
    height: "3.45%",
    width: "26.31%",
    top: "64.16%",
    right: "32.35%",
    bottom: "32.39%",
  },
  rewardreward: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
  },
});

export default RewardReward;

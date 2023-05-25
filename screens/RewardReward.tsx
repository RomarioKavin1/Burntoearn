import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import ProgressContainer from "../components/ProgressContainer";
import HeaderContainer from "../components/HeaderContainer";
import ConnectedContainer from "../components/ConnectedContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const RewardReward = () => {
  return (
    <View style={styles.rewardreward}>
      <View style={styles.offset}>
      <View style={styles.body}>
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
        <Text
          style={[styles.yourAvaialblePoint, styles.thisWeekPointsPosition]}
        >
          Your Avaialble points
        </Text>
        <Image
          style={styles.image28Icon}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <View style={[styles.pointscard]}>
        <Text style={[styles.pts, styles.ptsTypo]}>
          <Text style={[styles.text]}>{`8918 `}</Text>
          <Text style={styles.pts1}>pts.</Text>
        </Text>
        <Text style={[styles.points]}>25</Text>
        <Text style={[styles.pts2, styles.ptsTypo]}>
          <Text style={[styles.text1]}>{`25/50 `}</Text>
          <Text style={styles.pts3}>pts</Text>
        </Text>
        {/* <View style={[styles.base, styles.basePosition]} /> */}
        {/* <View style={[styles.status, styles.basePosition]} /> */}
        
        <Text style={[styles.thisWeekPoints, styles.thisWeekPointsPosition]}>
          Todays points
        </Text>
        </View>
      </View>
      <Image
        style={styles.metamaskFox1Icon}
        contentFit="cover"
        source={require("../assets/metamask-fox-1.png")}
      />
      <ConnectedContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointscard:{
    top:240
  },
  points:{
    top: 110,
    left: 150,
    fontFamily: FontFamily.paragraph03},

  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  offset: {
    left:24,
    top:15
  },
  thisWeekPointsPosition: {
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    left: "10.03%",
    textAlign: "left",
    top: "50%",
    width: "42.25%",
    position: "absolute",
  },
  ptsTypo: {
    color: Color.colorsBlack100,
    // fontFamily: FontFamily.headline02,
    fontWeight: "700",
    position: "absolute",
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
  bodyChild: {
    top: 200,
    left: 2,
    borderRadius: 30,
    width: 325,
    height: 189,
    opacity: 0.8,
    // backgroundColor: Color.gradientLightPurple,
    position: "absolute",
  },
  icon: {
    height: "4.44%",
    width: "7.29%",
    top: "40.19%",
    right: "83.59%",
    bottom: "50.37%",
    left: "9.12%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  yourAvaialblePoint: {
    marginTop: -20,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.headline07_size,
  },
  text: {
    fontSize: FontSize.headline02_size,
  },
  pts1: {
    // fontSize: FontSize.paragraph03_size,
  },
  pts: {
    marginTop: 46,
    left: "10.94%",
    lineHeight: 34,
    textAlign: "left",
    top: "50%",
    color: Color.colorsBlack100,
    // fontFamily: FontFamily.headline02,
    fontWeight: "700",
    width: "42.25%",
  },
  text1: {
    // fontSize: FontSize.paragraph02_size,
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
    color: Color.colorsBlack100,
    // fontFamily: FontFamily.headline02,
    fontWeight: "700",
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
    lineHeight: 24,
    height: 26,
    fontSize: FontSize.size_mid,
    textAlign: "left",
  },
  body: {
    top: 156,
    left: 23,
    width: 329,
    height: 540,
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
    right: "0%",
    bottom: "7.14%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: "#ffdee4",
    position: "absolute",
    width: "100%",
  },
  text2: {
    top: 0,
    left: 19,
    fontSize: 10,
    lineHeight: 28,
    width: 60,
    textAlign: "left",
  },
  minttokens: {
    height: "3.45%",
    width: "26.31%",
    top: "64.16%",
    right: "32.35%",
    bottom: "32.39%",
    left: "41.33%",
    position: "absolute",
  },
  rewardreward: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default RewardReward;

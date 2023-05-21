import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WalletConnector = () => {
  return (
    <View style={styles.connectYourWallet}>
      <View style={styles.walletcard}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={styles.background} />
          <View style={styles.point}>
            <Text style={[styles.h20Min, styles.titleTypo]}>4h 20 min</Text>
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon8.png")}
            />
          </View>
          <View style={styles.text}>
            <Text style={[styles.title, styles.titlePosition]}>
              Metamask Wallet
            </Text>
            <Text style={[styles.connect, styles.connectTypo]}>
              Connect to your wallet to claim your rewards
            </Text>
          </View>
          <View style={styles.avatar}>
            <Image
              style={[styles.avatar1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/avatar-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.title1, styles.title1Position]}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon3.png")}
        />
        <Text style={[styles.connectWallet, styles.titleTypo]}>
          Connect Wallet
        </Text>
      </View>
      <View style={[styles.connectbutton, styles.connectbuttonLayout]}>
        <Image
          style={[styles.connectbuttonChild, styles.connectbuttonLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.plus1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/plus-1.png")}
        />
      </View>
      <Text style={[styles.connectToYour, styles.connectTypo]}>
        Connect to your wallet to claim your rewards
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    bottom: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  titleTypo: {
    textAlign: "left",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  titlePosition: {
    width: 122,
    top: "50%",
    left: 0,
  },
  connectTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    lineHeight: 18,
    fontSize: FontSize.headline07_size,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
  },
  title1Position: {
    right: "0%",
    position: "absolute",
  },
  connectbuttonLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  background: {
    height: "102.08%",
    width: "100.46%",
    top: "-1.04%",
    right: "-0.23%",
    bottom: "-1.04%",
    left: "-0.23%",
    borderRadius: Border.br_17xl,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1.5,
    opacity: 0.2,
    position: "absolute",
  },
  h20Min: {
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    display: "none",
  },
  icon: {
    display: "none",
  },
  point: {
    marginTop: -12,
    left: "66.67%",
    width: 0,
    height: 0,
    display: "none",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -13,
    lineHeight: 26,
    textAlign: "left",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.headline06_size,
  },
  connect: {
    marginTop: 13,
    width: 122,
    top: "50%",
    left: 0,
    display: "none",
  },
  text: {
    marginTop: -25,
    right: 125,
    height: 26,
    left: 80,
    top: "50%",
    position: "absolute",
  },
  avatar1Icon: {
    left: "0%",
    bottom: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  avatar: {
    marginTop: -28,
    left: 8,
    width: 56,
    height: 56,
    display: "none",
    top: "50%",
    position: "absolute",
  },
  content: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  walletcard: {
    top: 28,
    width: 327,
    height: 72,
    left: 0,
    position: "absolute",
  },
  icon1: {
    height: "85.71%",
    width: "7.34%",
    top: "7.14%",
    bottom: "7.14%",
    left: "92.66%",
  },
  connectWallet: {
    marginTop: -14,
    width: "87.77%",
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    top: "50%",
    left: "0%",
  },
  title1: {
    height: "28%",
    width: "99.39%",
    bottom: "72%",
    left: "0.61%",
    top: "0%",
    right: "0%",
  },
  connectbuttonChild: {
    top: 0,
    left: 0,
  },
  plus1Icon: {
    top: 11,
    left: 12,
  },
  connectbutton: {
    top: 40,
    left: 267,
  },
  connectToYour: {
    top: 61,
    width: 160,
    height: 33,
    left: 80,
  },
  connectYourWallet: {
    top: 440,
    width: 329,
    height: 100,
    left: 0,
    position: "absolute",
  },
});

export default WalletConnector;

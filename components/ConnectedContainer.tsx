import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ConnectedContainer = () => {
  return (
    <View style={styles.tokenbar}>
      <View style={[styles.tokenbarChild, styles.tokenbarBorder]} />
      <Image
        style={[styles.metamaskFox2Icon, styles.tokenLayout]}
        contentFit="cover"
        source={require("../assets/metamask-fox-2.png")}
      />
      <Text style={[styles.walletAddress, styles.connected1Typo]}>
        0x2f59dBBcb3B393D86dbd539105E22ee4CaC23563
      </Text>
      <View style={[styles.tokenbarItem, styles.tokenbarBorder]} />
      <View style={[styles.token, styles.tokenLayout]}>
        <Image
          style={[styles.tokenChild, styles.tokenLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.strengthIcon1}
          contentFit="cover"
          source={require("../assets/strengthicon-1.png")}
        />
        <Text style={[styles.tokenNumbers, styles.connected1Typo]}>52</Text>
      </View>
      <View style={[styles.connected, styles.connectedLayout]}>
        <View style={[styles.connectedChild, styles.connectedLayout]} />
        <Text style={[styles.connected1, styles.connected1Typo]}>
          Connected
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenbarBorder: {
    borderColor: "#f5f4f4",
    borderStyle: "solid",
    position: "absolute",
  },
  tokenLayout: {
    width: 16,
    position: "absolute",
  },
  connected1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
    position: "absolute",
  },
  connectedLayout: {
    width: 63,
    position: "absolute",
  },
  tokenbarChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorsWhite100,
    borderWidth: 5,
    height: 44,
    left: 0,
    top: 0,
    width: 254,
  },
  metamaskFox2Icon: {
    left: 16,
    height: 16,
    overflow: "hidden",
    top: 9,
  },
  walletAddress: {
    marginTop: -19.5,
    width: "72.44%",
    left: "13.78%",
    height: 28,
    color: Color.colorsBlack100,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
  },
  tokenbarItem: {
    top: -1,
    left: 207,
    borderRightWidth: 5,
    width: 5,
    height: 49,
  },
  tokenChild: {
    height: 15,
    left: 0,
    top: 0,
  },
  strengthIcon1: {
    top: 3,
    left: 4,
    width: 8,
    height: 9,
    position: "absolute",
  },
  tokenNumbers: {
    marginTop: -8,
    width: "62.5%",
    left: "18.75%",
    height: 23,
    color: Color.colorsBlack100,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
  },
  token: {
    top: 10,
    left: 222,
    height: 30,
  },
  connectedChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.palegreen,
    height: 11,
    top: 9,
    left: 0,
  },
  connected1: {
    left: 14,
    color: Color.black,
    width: 48,
    height: 12,
    textAlign: "left",
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
    top: 0,
  },
  connected: {
    top: 16,
    left: 83,
    height: 20,
  },
  tokenbar: {
    top: 17,
    left: 97,
    height: 45,
    width: 254,
    position: "absolute",
  },
});

export default ConnectedContainer;

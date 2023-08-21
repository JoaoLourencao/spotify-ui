import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { BottomModal, ModalContent } from "react-native-modals";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { cardData, mixData, showsData, showsDataRounded } from "../../../data/Data";
import travis from "../../assets/images/travis.jpg";
import Header from "../../components/Header";
import MixCard from "../../components/MixCard";
import PlaylistCard from "../../components/PlaylistCard";
import ShowCard from "../../components/ShowCard";
import ShowCardRounded from "../../components/ShowCardRounded";
import Tag from "../../components/Tag";

export function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0.2);
  const [currentTime, setCurrentTime] = useState(100000);
  const [totalDuration, setTotalDuration] = useState(250000);
  const circleSize = 12;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Header />
          <View style={styles.tagContainer}>
            <Tag text={"Música"} />
            <Tag text={"Podcast e programas"} />
          </View>
          <View style={styles.cardContainer}>
            {cardData.map(dat =>
              <PlaylistCard key={dat.title} title={dat.title} img={dat.img} />
            )}
          </View>
          <View style={styles.showContainer}>
            <Text style={styles.text}>Feitas para você</Text>
            <ScrollView horizontal={true}>
              {showsData.map(dat =>
                <ShowCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
              )}
            </ScrollView>
          </View>
          <View style={styles.showContainer}>
            <Text style={styles.text}>Seus artistas favoritos</Text>
            <ScrollView horizontal={true}>
              {showsDataRounded.map(dat =>
                <ShowCardRounded key={dat.title} title={dat.title} img={dat.img} />
              )}
            </ScrollView>
          </View>
          <View style={styles.bestContainer}>
            <Text style={styles.text}>Top Mixes</Text>
            <ScrollView horizontal={true}>
              {mixData.map(dat =>
                <MixCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.player}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 3 }}
              source={travis}
            />
            <View>
              <Text
                style={{
                  fontSize: 13,
                  width: 220,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                goosebumps
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#cccccc",
                }}
              >
                Travis Scott
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            {/* <AntDesign name="heart" size={24} color="#1DB954" /> */}
            <MaterialCommunityIcons name="laptop" size={30} color="white" />
            <Pressable>
              <MaterialCommunityIcons name="play" size={30} color="white" />
            </Pressable>
          </View>
        </Pressable>
      </View>
      <BottomModal
        visible={modalVisible}
        onHardwareBackPress={() => setModalVisible(false)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
      >

        <ModalContent
          style={{ height: "100%", width: "100%", backgroundColor: "rgba(92, 10, 10,1)" }}
        >

          <View style={{ height: "100%", width: "100%", marginTop: 40 }}>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MaterialCommunityIcons onPress={() => setModalVisible(!modalVisible)} name="chevron-down" size={24} color="white" />

              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
              >
                This is Travis Scott
              </Text>

              <MaterialCommunityIcons onPress={() => setModalVisible(!modalVisible)} name="dots-horizontal" size={24} color="white" />
            </Pressable>
            <View style={{ height: 70 }} />

            <View style={{ padding: 10, }}>
              <Image
                style={{
                  width: "100%", height: 330
                }}
                source={travis}
              />
              <View
                style={{
                  marginTop: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    goosebumps
                  </Text>
                  <Text style={{ color: "#D3D3D3", marginTop: 2 }}>
                    Travis Scott
                  </Text>
                </View>

                <MaterialCommunityIcons style={{ marginTop: 10 }} name="plus-circle-outline" size={24} color="white" />
              </View>

              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    width: "100%",
                    marginTop: 10,
                    height: 3,
                    backgroundColor: "gray",
                    borderRadius: 5,
                  }}
                >
                  <View
                    style={[
                      styles.progressbar,
                      { width: `${progress * 100}%` },
                    ]}
                  />
                  <View
                    style={[
                      {
                        position: "absolute",
                        top: -5,
                        width: circleSize,
                        height: circleSize,
                        borderRadius: circleSize / 2,
                        backgroundColor: "white",
                      },
                      {
                        left: `${progress * 100}%`,
                        marginLeft: -circleSize / 2,
                      },
                    ]}
                  />
                </View>
                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, color: "#D3D3D3" }}
                  >
                    {formatTime(currentTime)}
                  </Text>

                  <Text
                    style={{ color: "white", fontSize: 12, color: "#D3D3D3" }}
                  >
                    {formatTime(totalDuration)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 17,
                }}
              >
                <Pressable>
                  <MaterialCommunityIcons name="swap-horizontal" size={30} color="#03C03C" />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons name="skip-previous" size={50} color="white" />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons name="pause-circle" size={80} color="white" />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons name="skip-next" size={50} color="white" />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons name="repeat" size={30} color="white" />
                </Pressable>
              </View>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  subContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 210,
  },
  tagContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxHeight: 210,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showContainer: {
    marginTop: 30,
    flex: 1,
    minHeight: 60
  },
  bestContainer: {
    flex: 1,
    marginTop: 30,
  },
  player: {
    backgroundColor: "rgba(92, 10, 10,1)",
    width: "95%",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    borderRadius: 6,
    left: 8,
    bottom: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  progressbar: {
    height: "100%",
    backgroundColor: "white",
  },
});

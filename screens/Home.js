import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, images, icons, FONTS, SIZES } from "../constants";

const Home = () => {
  // Dummy Data

  const [trending, setTrending] = React.useState([
    {
      id: 0,
      name: "Nike Air Zoom Pegasus 36",
      img: images.nikePegasus36,
      bgColor: "#BF012C",
      type: "RUNNING",
      price: "$186",
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Black,
      bgColor: "#D39C67",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: "Nike Air Zoom Kobe 1 Proto",
      img: images.nikeZoomKobe1Proto,
      bgColor: "#7052A0",
      type: "BASKETBALL",
      price: "$199",
      sizes: [6, 7, 8, 9],
    },
  ]);

  // Render
  function renderTrendingShoes(item, index) {
    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginTop: SIZES.base,
            borderTopLeftRadius: 10,
            marginRight: SIZES.padding,
            backgroundColor: item.bgColor,
          }}
        ></View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}
      >
        Trending
      </Text>

      {/* Trending */}
      <View style={{ height: 200, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
});

export default Home;

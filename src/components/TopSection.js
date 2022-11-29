import { View, Text, ScrollView } from "react-native";
import React from "react";
import CardLarge from "./CardLarge";

const TopSection = () => {
  return (
    <View className="w-5/6 mx-auto mb-5">
      <Text className="text-xl font-bold mb-2">Top Destinations</Text>
      <ScrollView horizontal={true}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </ScrollView>
    </View>
  );
};

export default TopSection;

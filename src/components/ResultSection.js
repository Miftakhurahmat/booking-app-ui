import { View, Text } from "react-native";
import React from "react";
import CardMedium from "./CardMedium";

const ResultSection = ({ navigation }) => {
  return (
    <View className="w-5/6 mx-auto mb-96">
      <Text className="text-xl font-bold mb-2">Seach Result</Text>
      <View>
        <CardMedium navigation={navigation} />
        <CardMedium />
        <CardMedium />
        <CardMedium />
        <CardMedium />
      </View>
    </View>
  );
};

export default ResultSection;

import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const CardMedium = ({ navigation }) => {
  return (
    <TouchableOpacity
      className="flex-row"
      onPress={() => navigation.navigate("DetailHotel")}
    >
      <Image
        source={require("../images/destination.jpg")}
        className="w-28 h-36 mb-4 rounded-lg"
      />
      <View className="my-auto ml-8">
        <Text>Tangkuban Parahu</Text>
        <Text className="text-xs font-extralight text-slate-400">
          Deskripsi
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMedium;

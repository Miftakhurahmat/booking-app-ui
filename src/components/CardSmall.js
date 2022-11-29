import { View, Text, Image } from "react-native";
import React from "react";

const CardSmall = () => {
  return (
    <View className="flex flex-row border-solid border-2 border-slate-200 p-4 rounded-3xl rounded-tl-none mb-6">
      <Image
        source={require("../images/HouseFav.png")}
        className="w-20 h-20 rounded-lg rounded-tl-none"
      />
      <View className="mx-2 px-2">
        <Text className="font-medium pb-2">House of Alice</Text>
        <Text className="font-thin text-xs text-slate-500 w-5/6">
          Sun Building, 1235 Brooklyn St Block A1, Room 123
        </Text>
      </View>
    </View>
  );
};

export default CardSmall;

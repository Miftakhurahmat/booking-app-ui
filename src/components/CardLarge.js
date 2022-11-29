import { View, Text, Image } from "react-native";
import React from "react";

const CardLarge = () => {
  return (
    <View className="mr-6">
      <Image
        source={require("../images/kota.jpg")}
        className="w-36 h-44 mb-2 rounded-lg"
      />
      <Text>Kota Bandung</Text>
      <Text className="text-xs font-extralight text-slate-400">Deskripsi</Text>
    </View>
  );
};

export default CardLarge;

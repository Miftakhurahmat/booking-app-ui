import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import CardSmall from "../components/CardSmall";

const Favorites = () => {
  return (
    <View className="w-5/6 mx-auto my-10">
      <Header>Favorites</Header>
      <ScrollView>
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </ScrollView>
    </View>
  );
};

export default Favorites;

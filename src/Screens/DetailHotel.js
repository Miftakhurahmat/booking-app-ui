import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { TabActions } from "@react-navigation/native";
import Recap from "./Recap";

const DetailHotel = ({ navigation }) => {
  return (
    <View className="w-5/6 mx-auto">
      <Header>Pick Your Hotel</Header>
      <Image
        source={require("../images/hotel.jpg")}
        className="w-full h-1/2 rounded-3xl rounded-tl-none mb-4"
      />
      <Text className="text-xs font-bold mb-4">Location's name</Text>
      <Text className="font-extralight text-slate-600 border-b border-slate-200 mb-4">
        House of Alice
      </Text>
      <Text className="text-xs font-extralight text-slate-600 mb-10">
        Lorem ipsum dolor sit amet consectetur. Elementum ut ultricies nisl ut
        quis volutpat sit tellus eros. A facilisi vestibulum a nunc nunc. Diam
        nulla egestas at pulvinar habitasse vitae mattis dictumst. Duis turpis a
        vulputate sed at. Nisl.
      </Text>
      {/* <Tab.Navigator>
        <Tab.Screen name="Recap" component={Recap} />
      </Tab.Navigator> */}
      <Button onPress={() => navigation.navigate("Recap")}>
        Book this Hotel
      </Button>
    </View>
  );
};

export default DetailHotel;

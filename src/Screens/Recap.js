import { View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Recap = () => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  return (
    <View className="w-5/6 mx-auto">
      <Header>Book Your Hotel</Header>
      <View>
        <Text className="font-semibold mb-4">Contact Informations</Text>
        <View className="mb-6">
          <Text className="text-xs mb-2">Name</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            {profileData.firstName} {profileData.lastName}
          </TextInput>
          <Text className="text-xs">Email</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            {profileData.email}
          </TextInput>
          <Text className="text-xs">No Handphone</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            081918928198123
          </TextInput>
        </View>
      </View>
      <View>
        <Text className="font-semibold mb-4">Price Summary</Text>
        <View className="mb-6">
          <Text className="text-xs mb-2">Detail Book</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            3 Days, 1 Room, 2 Guest
          </TextInput>
          <Text className="text-xs">Total</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            $ 100.00
          </TextInput>
          <Text className="text-xs">Payable Now</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            $ 10.00
          </TextInput>
        </View>
      </View>
      <Button>Checkout</Button>
    </View>
  );
};

export default Recap;

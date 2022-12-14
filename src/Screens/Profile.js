import { View, Text, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import Header from "../components/Header";
import CardSmall from "../components/CardSmall";

const Profile = () => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const namaLengkap = `${profileData.firstName} ${profileData.lastName}`;
  console.log(profileData);
  return (
    <View className="w-5/6 mx-auto">
      <Header>Profile</Header>
      <View className="mb-8">
        <View className="border-solid border-2 border-slate-200 h-24 w-full mt-4 absolute border-l-0 rounded-3xl shadow-lg shadow-blue-500/50 bg-white"></View>
        <View className="flex-row">
          <Image
            source={require("../images/profile.png")}
            className="w-32 h-32 rounded-full rounded-tl-none"
          />
          <View className="my-auto ml-4">
            <Text className="font-semibold text-indigo-900 mb-2">
              {namaLengkap}
            </Text>
            <Text className="font-thin text-xs text-slate-400">
              {profileData.email}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row grid grid-cols-3 gap-x-10 border-solid border-2 border-slate-200 w-full rounded-xl mx-auto p-4 mb-6">
        <View className="items-center">
          <Text className="font-semibold mb-1">Bookings</Text>
          <Text className="font-light text-xs text-slate-400">27</Text>
        </View>
        <View className="items-center">
          <Text className="font-semibold mb-1">Reviews</Text>
          <Text className="font-light text-xs text-slate-400">27</Text>
        </View>
        <View className="items-center">
          <Text className="font-semibold mb-1">Favorites</Text>
          <Text className="font-light text-xs text-slate-400">27</Text>
        </View>
      </View>
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

export default Profile;

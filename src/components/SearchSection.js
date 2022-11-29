import { Image, View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const SearchSection = () => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );

  return (
    <View className="w-5/6 mx-auto mb-5">
      <View className="bg-[#6E6BE8] w-screen -ml-10 rounded-b-[48px]">
        <View className="w-5/6 mx-auto mt-10">
          <Text className="font-bold text-xl text-white">
            Hi {profileData.firstName},
          </Text>
          <Text className="text-white mb-6">Where do you want to go?</Text>
          <View className="flex flex-row bg-slate-100 mb-6 p-4 rounded-2xl rounded-tl-none">
            <Image
              source={require("../icons/search.png")}
              className="flex-none"
            />
            <TextInput
              autoCorrect={true}
              placeholder=" Find it here"
              className="flex-1"
            />
          </View>
          <View className="flex-row">
            <View className="flex-1 flex-row bg-slate-100 mb-6 mr-2 p-4 rounded-2xl">
              <Image
                source={require("../icons/calendar.png")}
                className="flex-none"
              />
              <TextInput
                autoCorrect={true}
                placeholder=" Check-in Date"
                className="flex-1"
              />
            </View>
            <View className="flex-1 flex-row bg-slate-100 mb-6 p-4 rounded-2xl">
              <Image
                source={require("../icons/calendar.png")}
                className="flex-none"
              />
              <TextInput
                autoCorrect={true}
                placeholder=" Check-out Date"
                className="flex-1"
              />
            </View>
          </View>
          <View className="flex-row bg-slate-100 mb-6 p-4 rounded-2xl">
            <Image
              source={require("../icons/user.png")}
              className="flex-none"
            />
            <TextInput
              autoCorrect={true}
              placeholder=" Guest"
              className="flex-1"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchSection;

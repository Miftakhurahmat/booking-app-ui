import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

const Settings = () => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  console.log(profileData);
  return (
    <View className="w-5/6 mx-auto my-10">
      <Header>Settings</Header>
      <View>
        <Text className="text-lg font-semibold mb-4">My Account</Text>
        <View className="mb-8">
          <Text className="font-medium mb-2">Name</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            {profileData.firstName} {profileData.lastName}
          </TextInput>
          <Text className="font-medium">Email</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            {profileData.email}
          </TextInput>
          <Text className="font-medium">No Handphone</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            081918928198123
          </TextInput>
          <Text className="font-medium">Gender</Text>
          <TextInput className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            {profileData.gender}
          </TextInput>
        </View>
        <Button>Update Profile</Button>
        <View>
          <Text className="text-lg font-semibold">Support</Text>
          <Text className="font-thin text-slate-500 mb-4 border-b border-slate-200 py-2">
            Term & Policy
          </Text>
          <Text className="font-thin text-red-500 mb-4 border-b border-slate-200 py-2">
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;

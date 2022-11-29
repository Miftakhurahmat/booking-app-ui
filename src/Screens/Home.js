import { View, Text, ScrollView } from "react-native";
import React from "react";
import SearchSection from "../components/SearchSection";
import TopSection from "../components/TopSection";
import PopularSection from "../components/PopularSection";

const Home = () => {
  return (
    <View>
      <SearchSection />
      <ScrollView>
        <TopSection />
        <PopularSection />
      </ScrollView>
    </View>
  );
};

export default Home;

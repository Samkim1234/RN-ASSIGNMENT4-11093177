import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Frame1 from "./projectComponents/Frame1"; 
import SearchBar from "./projectComponents/SearchBar"; 
import PopularJobs from "./projectComponents/PopularJobs"; 

import CategorySection from "./projectComponents/CategorySection"; 
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          
          <Frame1/>
          <SearchBar/>
          <CategorySection/>
          <PopularJobs/>
          
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0', // SafeAreaView should have the same background color
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#f0f0f0",
    
  },
});

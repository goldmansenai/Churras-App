import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppItem from "../components/AppItem";

export default function AppList() {
  const [items, setItems] = useState([
    {
      id: 1,
      kgCarne: 5000,
      bebidas: 8000,
      salGrosso: 1500,
      carvao: 6000,
      gelo: 4000,
    },
    {
      id: 2,
      kgCarne: 10000,
      bebidas: 15000,
      salGrosso: 2500,
      carvao: 8000,
      gelo: 7500,
    },
    {
      id: 3,
      kgCarne: 2000,
      bebidas: 1000,
      salGrosso: 500,
      carvao: 1250,
      gelo: 500,
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Churrascos</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              id={item.id}
              carne={item.kgCarne + " g"}
              litros={item.bebidas + " ml"}
              sal={item.salGrosso + " g"}
              carvao={item.carvao + " g"}
              gelo={item.gelo + " g"}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "90%",
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
});

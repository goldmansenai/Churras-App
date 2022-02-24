import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppItem from "../components/AppItem";
import { getItems } from "../Database/Database";

export default function AppList({ route, navigation }) {
  function handlePress() {
    navigation.navigate("AppForm")
  }
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => setItems(items));
  }, [route]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Churrascos</Text>
      <ScrollView style={styles.scrollContainer}>
        {items == '' && (
          <View>
            <Text>Você não possui nenhum churrasco, gostaria de criar um? {'\n'}</Text>


            <View>
              <TouchableOpacity onPress={() => {navigation.navigate("AppForm")}} style={{backgroundColor:'red', padding:25}}>
                <Text>GERAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              id={item.id}
              nome={item.nomeChurrasco}
              carne={item.kgCarne + " Kg"}
              litros={item.bebidas + " L"}
              sal={item.salGrosso + " Kg"}
              carvao={item.carvao + " Kg"}
              gelo={item.gelo + " Kg"}
              navigation={navigation}
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
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  btn: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#D93600',
    color: 'white',
    width:'100%',
    fontSize: 20,
    padding: 5,
    borderRadius: 100
  }
});
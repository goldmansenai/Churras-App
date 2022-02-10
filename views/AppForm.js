import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bebidas from "../components/Bebidas";

export default function AppForm({ navigation }) {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [carne, setCarne] = useState(0);

  useEffect(() => {
    setCarne(homens * 500 + mulheres * 400 + criancas * 200);
  }, [<TextInput />]);

  async function handleButtonPress() {
    if (homens == "" || mulheres == "" || criancas == "") {
      alert("Campos em branco");
    } else {
      const litros = localStorage.getItem("litros");
      const item = {
        id: new Date().getTime(),
        kgCarne: parseFloat(carne),
        bebidas: parseFloat(litros),
        salGrosso: parseFloat(),
        carvao: parseFloat(),
        gelo: parseFloat(),
      };
      let savedItems = [];
      const response = await AsyncStorage.getItem("dados");

      if (response) savedItems = JSON.parse(response);
      savedItems.push(item);

      await AsyncStorage.setItem("dados", JSON.stringify(savedItems));
      navigation.navigate("AppList", item);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Quantos homens?"
          keyboardType={"numeric"}
          clearButtonMode="always"
          onChangeText={setHomens}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantas mulheres?"
          keyboardType={"numeric"}
          clearButtonMode="always"
          onChangeText={setMulheres}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantas crianças?"
          keyboardType={"numeric"}
          clearButtonMode="always"
          onChangeText={setCriancas}
        />
        <View style={styles.button}>
          <Text style={styles.buttonText}>{carne}</Text>
        </View>
        <Bebidas />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: "90%",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
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
});

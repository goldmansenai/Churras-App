import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Bebidas from "../components/Bebidas";
import { saveItem } from "../Database/Database";
import { CheckBox } from "@react-native-community/checkbox";

export default function AppForm({ navigation }) {
  const [nome, setNome] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [carne, setCarne] = useState(0);
  const [bebidas, setBebidas] = useState(false);

  useEffect(() => {
    setCarne(homens * 600 + mulheres * 500 + criancas * 200);
  }, [<TextInput />]);

  async function handleButtonPress() {
    if (nome == "" || homens == "" || mulheres == "" || criancas == "") {
      alert("Campos em branco");
    } else {
      const litros = localStorage.getItem("litros");
      const salGrosso = carne * 0.2;
      const kgCarvao = carne * 0.75;
      const kgGelo = litros * 0.5;
      const item = {
        id: new Date().getTime(),
        nomeChurrasco: nome,
        kgCarne: parseFloat(carne),
        bebidas: parseFloat(litros),
        salGrosso: parseFloat(salGrosso),
        carvao: parseFloat(kgCarvao),
        gelo: parseFloat(kgGelo),
      };
      saveItem(item).then((response) => navigation.navigate("AppList", item));
      localStorage.removeItem("litros");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome/Data do churrasco "
          clearButtonMode="always"
          onChangeText={setNome}
        />
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
        <View>
          <Text>Bebidas?</Text>
          <CheckBox value={bebidas} onValueChange={setBebidas} />
        </View>
        {bebidas && <Bebidas />}
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

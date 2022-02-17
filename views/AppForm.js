import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import Bebidas from "../components/Bebidas";
import { saveItem } from "../Database/Database";
// import { getLitros } from "../Database/Database";
import CheckBox from "expo-checkbox";

export default function AppForm({ route, navigation }) {
  const [nome, setNome] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [carne, setCarne] = useState(0);
  const [numeroCervejas, setNumeroCervejas] = useState(0);
  const [numeroRefris, setNumeroRefris] = useState(0);
  const [numeroSucos, setNumeroSucos] = useState(0);
  const [litros, setLitros] = useState(0);

  const [bebidas, setBebidas] = useState(false);
  const [cerveja, setCerveja] = useState(false);
  const [refrigerante, setRefrigerante] = useState(false);
  const [suco, setSuco] = useState(false);
  // const [litrosBebidas, setLitrosBebidas] = useState([]);

  useEffect(() => {
    setCarne(homens * 0.6 + mulheres * 0.5 + criancas * 0.2);
  }, [<TextInput />]);

  // useEffect(() => {
  //   getLitros().then((response) => {
  //     setLitrosBebidas(response);
  //     // console.log(litrosBebidas);
  //   });
  // }, [route]);

  useEffect(() => {
    if (!cerveja) setNumeroCervejas(0);
    if (!refrigerante) setNumeroRefris(0);
    if (!suco) setNumeroSucos(0);

    setLitros(numeroCervejas * 1.2 + numeroRefris * 0.8 + numeroSucos * 0.6);
  }, [<TextInput />]);

  async function handleButtonPress() {
    if (nome == "" || homens == "" || mulheres == "" || criancas == "") {
      alert("Campos em branco");
    } else {
      const salGrosso = carne * 0.2;
      const kgCarvao = carne * 0.75;
      const kgGelo = litros * 0.5;
      const item = {
        id: new Date().getTime(),
        nomeChurrasco: nome,
        kgCarne: parseFloat(carne).toFixed(2),
        bebidas: parseFloat(litros).toFixed(2),
        salGrosso: parseFloat(salGrosso).toFixed(2),
        carvao: parseFloat(kgCarvao).toFixed(2),
        gelo: parseFloat(kgGelo).toFixed(2),
      };
      saveItem(item).then((response) => navigation.navigate("AppList", item));
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Crie seu churrasco</Text>
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
          {bebidas && (
            // <Bebidas />
            <View style={styles.checkboxContainer}>
              <View>
                <Text>Cerveja?</Text>
                <CheckBox
                  style={styles.checkbox}
                  value={cerveja}
                  onValueChange={setCerveja}
                />
                {cerveja && (
                  <TextInput
                    style={styles.input}
                    placeholder="Quantos bebem?"
                    keyboardType={"numeric"}
                    clearButtonMode="always"
                    onChangeText={setNumeroCervejas}
                  />
                )}
              </View>
              <View>
                <Text>Refrigerante?</Text>
                <CheckBox
                  style={styles.checkbox}
                  value={refrigerante}
                  onValueChange={setRefrigerante}
                />
                {refrigerante && (
                  <TextInput
                    style={styles.input}
                    placeholder="Quantos bebem?"
                    keyboardType={"numeric"}
                    clearButtonMode="always"
                    onChangeText={setNumeroRefris}
                  />
                )}
              </View>
              <View>
                <Text>Suco?</Text>
                <CheckBox
                  style={styles.checkbox}
                  value={suco}
                  onValueChange={setSuco}
                />
                {suco && (
                  <TextInput
                    style={styles.input}
                    placeholder="Quantos bebem?"
                    keyboardType={"numeric"}
                    clearButtonMode="always"
                    onChangeText={setNumeroSucos}
                  />
                )}
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{litros}</Text>
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </ScrollView>
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
  scrollContainer: {
    flex: 1,
    width: "90%",
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: "100%",
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
  checkboxContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});

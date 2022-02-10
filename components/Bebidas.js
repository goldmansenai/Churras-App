import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Bebidas(props) {
  const [cerveja, setCerveja] = useState(false);
  const [refrigerante, setRefrigerante] = useState(false);
  const [suco, setSuco] = useState(false);

  const [numeroCervejas, setNumeroCervejas] = useState(0);
  const [numeroRefris, setNumeroRefris] = useState(0);
  const [numeroSucos, setNumeroSucos] = useState(0);
  const [litros, setLitros] = useState(0);

  useEffect(() => {
    if (!cerveja) setNumeroCervejas(0);
    if (!refrigerante) setNumeroRefris(0);
    if (!suco) setNumeroSucos(0);

    setLitros(numeroCervejas * 1200 + numeroRefris * 800 + numeroSucos * 600);
    localStorage.setItem("litros", litros);
  }, [<TextInput />]);

  return (
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
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});

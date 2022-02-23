import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { deleteItem } from "../Database/Database";

export default function AppItem(props) {
  function handleDeletePress() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () =>
            deleteItem(props.id).then((response) =>
              props.navigation.navigate("AppList", { id: props.id })
            ),
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textItem}>{props.nome}</Text>
        <Text style={styles.textItem}>🥩{props.carne}</Text>
        <Text style={styles.textItem}>🍻{props.litros}</Text>
        <Text style={styles.textItem}>🧂{props.sal}</Text>
        <Text style={styles.textItem}>{props.carvao} de carvão</Text>
        <Text style={styles.textItem}>{props.gelo} de gelo</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Image
            source={require("../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 30,
    marginTop: 10,
  },
  editButton: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  textItem: {
    fontSize: 20,
  },
});

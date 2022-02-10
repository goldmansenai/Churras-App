import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(item) {
  item.id = new Date().getTime();
  let savedItems = [];
  const response = await AsyncStorage.getItem("dados");

  if (response) savedItems = JSON.parse(response);
  savedItems.push(item);

  return AsyncStorage.setItem("items", JSON.stringify(savedItems));
}

async function getItems() {
  const response = await AsyncStorage.getItem("dados");
  if (response) return Promise.resolve(JSON.parse(response));
  else return Promise.resolve([]);
}

module.exports = {
  saveItem,
  getItems,
};

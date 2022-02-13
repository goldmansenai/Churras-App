import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItem = async (item) => {
  item.id = new Date().getTime();
  let savedItems = [];
  const response = await AsyncStorage.getItem("dados");

  if (response) savedItems = JSON.parse(response);
  savedItems.push(item);

  return AsyncStorage.setItem("dados", JSON.stringify(savedItems));
};

export const getItems = async () => {
  const response = await AsyncStorage.getItem("dados");
  if (response) return Promise.resolve(JSON.parse(response));
  else return Promise.resolve([]);
};

export const deleteItem = async (id) => {
  let savedItems = await getItems();
  const index = await savedItems.findIndex((item) => item.id === id);
  savedItems.splice(index, 1);
  return AsyncStorage.setItem("dados", JSON.stringify(savedItems));
};

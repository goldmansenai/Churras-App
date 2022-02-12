import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItem = async () => {
  const item = JSON.parse(localStorage.getItem("obj"));
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

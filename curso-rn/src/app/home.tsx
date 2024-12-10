import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import Button from "../components/Button";

const Home = () => {
  const onSave = () => {
    Alert.alert("Hello", "Testing an alert");
  };

  return (
    <View style={styles.container}>
      <Image
        src="https://th.bing.com/th/id/OIP.3iP4oOAiL4f9hQlE9lEvawHaE8?rs=1&pid=ImgDetMain"
        style={styles.image}
      />
      <Button color="green" onPress={onSave}>
        <Text style={styles.text}>Hello world</Text>
      </Button>
      <Text style={styles.text}>Bem vindo à tela inicial</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
    overflow: "hidden",
    resizeMode: "cover",
  },
});

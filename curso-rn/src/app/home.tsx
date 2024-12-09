import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        src="https://th.bing.com/th/id/OIP.3iP4oOAiL4f9hQlE9lEvawHaE8?rs=1&pid=ImgDetMain"
        style={styles.image}
      />
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

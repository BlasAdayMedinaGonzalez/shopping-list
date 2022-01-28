import { useState } from "react";

import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [productName, setproductName] = useState("");
  
  const productNameHandler = (productText) => {
    setproductName(productText);
    console.log(productText);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.productInput}
          placeholder="Add a new product to shopping list"
          onChangeText={productNameHandler}
          //(userText) => setproductName(userText)
        />
        <Button style={styles.productButton} title="Add" />
      </View>
      <View></View>
    </View>
  );
}

/** Estilo, crear para cada conjunto de elementos */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    padding: 20,
  },
  productInput: {
    width: "75%",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
    height: 40,
  },
  productButton: {
    width: "25%",
  },
});

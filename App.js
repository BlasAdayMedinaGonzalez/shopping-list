import { useState } from "react";

import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [productName, setproductName] = useState("");
  const [productList, setproductList] = useState([]);
  
  const productNameHandler = (productText) => {
    setproductName(productText);
    console.log(productText);
  }

  const addproductHandler = () => {
    if (productName !== "") {
      setproductList((currentProductList) => [...currentProductList, productName]);
      setproductName("");
    }
  }

  // const addproductHandler = () => {
  //   // setproductList([...productList, productName]) forma mal
  //   setproductList((currentProductList) => {
  //     const newState = [...currentProductList, productName]
  //     console.log("El productList -> ", newState);
  //     return newState;
  //   });
  //   setproductName("");
  //   // Forma bien sin mostrar
  //   // setproductList((currentProductList) => [...currentProductList, productName]);
  // }
  
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.productInput}
          placeholder="Add a new product to shopping list"
          value={productName}
          onChangeText={productNameHandler}
          //(userText) => setproductName(userText)
        />
        <Button style={styles.productButton} title="Add" onPress={addproductHandler} />
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

import { useState } from "react";

import { Button, ScrollView, StyleSheet, TextInput, Text, View } from "react-native";

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
    console.log(productList);
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
      <View style={styles.listContainer}>
        <ScrollView>
          {productList.map((product) => {
              return ( 
                <View key={Math.random().toString()} style={styles.listItem}>
                  <Text style={styles.itemText}>{product}</Text>
                </View>
              );
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

/** Estilo, crear para cada conjunto de elementos */
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "90%"
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
  listContainer: {
    width: "100%",
    padding: 20
  },
  listItem: {
    height: 100,
    width: "100%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    shadowColor: "yellow",
    borderRadius: 5,
    margin: 0
  },
  itemText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold"
  }
});

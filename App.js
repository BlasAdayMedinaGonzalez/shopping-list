import { useState } from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import InputGroup from "./components/InputGroup";
import Item from "./components/ProductItem";

export default function App() {
  const [productList, setproductList] = useState([]);

  const addproductHandler = (productName) => {
    if (productName !== "") {
      setproductList((currentProductList) => [
        ...currentProductList,
        productName,
      ]);
    }
    console.log(productList);
  };

  return (
    <View style={styles.container}>
      <InputGroup onAddproductHandler={addproductHandler} />
      <View style={styles.listContainer}>
        <ScrollView>
          {productList.map((product) => <Item key={Math.random().toString()} value={product} /> )}
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
    height: "90%",
  },
  listContainer: {
    width: "100%",
    padding: 20,
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
    margin: 0,
  },
  itemText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
});

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

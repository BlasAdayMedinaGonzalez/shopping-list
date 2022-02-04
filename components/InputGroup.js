import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputGroup = ({onAddproductHandler}) => {
  const [productName, setproductName] = useState("");

  const productNameHandler = (productText) => {
    setproductName(productText);
    console.log(productText);
  };

  const validateProduct = () => {
    onAddproductHandler(productName);
    setproductName("");
  };

  return (
    <View style={styles.inputGroup}>
      <TextInput
        style={styles.productInput}
        placeholder="Add a new product to shopping list"
        value={productName}
        onChangeText={productNameHandler}
        //(userText) => setproductName(userText)
      />
      <Button
        style={styles.productButton}
        title="Add"
        onPress={validateProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default InputGroup;

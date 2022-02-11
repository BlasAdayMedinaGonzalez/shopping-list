import { useState } from "react";
import { Modal, Button, StyleSheet, TextInput, View } from "react-native";

const InputGroup = ({onAddproductHandler, addModal}) => {
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
    <Modal visible={addModal} animationType={"slide"} transparent={true}>
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
    </Modal>
    
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1
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

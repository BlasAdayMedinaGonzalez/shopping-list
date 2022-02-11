
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Item = ({value, onDelete}) => {
  return(
    <TouchableOpacity onPress={onDelete} underlayColor={"pink"} activeOpacity={0.4}>
        <View key={Math.random().toString()} style={styles.listItem}>
            <Text style={styles.itemText}>{value}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
      margin: 2
    },
    itemText: {
      color: "white",
      fontSize: 50,
      fontWeight: "bold",
    }
});

export default Item;

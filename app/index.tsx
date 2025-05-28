import { Text, View, StyleSheet } from "react-native";
import TATETI from "./TATETI";

export default function Index() {
  return (
    <View style={styles.container}>
      <TATETI/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
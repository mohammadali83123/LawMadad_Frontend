import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/home.tsx to edit this screen.</Text>
      <Link href="../documentDraft" style={styles.button}>Go to Document Draft</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
  },
});

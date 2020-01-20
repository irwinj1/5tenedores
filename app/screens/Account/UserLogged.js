import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View>
      <Text>User Logged</Text>
      {/* funcion flecha con firebse.auth().singOut() que cerrar sesion */}
      <Button title="Cerra Sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

import React from "react";
//importamos el stylesheet para hijas de estilo y
//activityindicator para los indicadores que necesitamos
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
//importamos overlay para vista flotante al frente de la aplicacion
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  //volcamos datos recibimos por medio de props en nuestras variables
  const { isVisible, text } = props;
  return (
    //creamos el overlay le damos un estilo
    /* dentro del overlay creamos una vista junto
    al activityindicator junto a una condicion que mostrara el texto que queremos mostrar
    */
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rbga(0,0,0, .5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}
//creamos una variable de estilos en la cual crearemos nuestros estilos independientes
const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#00a680",
    textTransform: "uppercase",
    marginTop: 10
  }
});

import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
//importamos withNavigation para pasar parametros por medio de props con la navegacion y asi redireccionar a otra pagina
import { withNavigation } from "react-navigation";

function UserGuest(props) {
  const { navigation } = props;
  return (
    //scrool view permite dar scroll si la pantalla del telefono es muy pequena
    /*
    Image cargamos la imagen con sus propiedades desde react native
    Button damos estilos desde react native element
    onPress={() => navigation.navigate("Login")} para direccionar al login con los parametros que obtenemos del props
    */
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
      <Text style={styles.description}>
        Como describirias tu mejor restaurantes? busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustadi mas y
        comenta como ha sido tu experiencia
      </Text>
      <View style={styles.viewbtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
}
export default withNavigation(UserGuest);
const styles = StyleSheet.create({
  viewBody: {
    marginRight: 30,
    marginLeft: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewbtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});

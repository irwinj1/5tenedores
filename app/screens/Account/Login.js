import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";

export default function Login(props) {
  const { navigation } = props;
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <Text>Fom Login</Text>
        {/*<Text>Create Account</Text>
        enviamos los props a el componente interno
        */}
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <Text>Login Facebook</Text>
      </View>
    </ScrollView>
  );
}
//componente interno recibe props
function CreateAccount(props) {
  {
    /*hacemos destucturin de los props recibidos*/
  }
  const { navigation } = props;

  return (
    <Text style={styles.textRegister}>
      aun no tienes una cuenta?
      {/*por medio de la navigation ibtenemos el navigate para direccionar nuestra pagina*/}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        registrarte
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  container: {
    marginRight: 40,
    marginLeft: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  },
  viewBody: {
    marginRight: 10,
    marginLeft: 10
  }
});

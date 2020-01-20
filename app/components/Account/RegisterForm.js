import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import { withNavigation } from "react-navigation";
import Loading from "../Loading";
import * as firebase from "firebase";

function RegisterForm(props) {
  const { toastRef, navigation } = props;

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswords, setHidePasswords] = useState(true);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repitePassword, setRepitePassword] = useState("");

  //funcion asincrona
  const register = async () => {
    setIsVisibleLoading(true);
    /*console.log("usuario registrado");
    console.log("email: " + email);
    console.log("Password: " + password);
    console.log("Repite Password: " + repitePassword);
    const resultValdidateEmail = validateEmail(email);
    console.log("validacion del email " + resultValdidateEmail);*/
    if (!email || !password || !repitePassword) {
      //toastRef.current.show que recibe un props de nuestro componente register
      //recibimos el valor de current y show mostramos un toast en la aplicacion
      toastRef.current.show("todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        //toastRef.current.show que recibe un props de nuestro componente register
        //recibimos el valor de current y show mostramos un toast en la aplicacion
        toastRef.current.show("el email no es valido");
      } else {
        if (password !== repitePassword) {
          //toastRef.current.show que recibe un props de nuestro componente register
          //recibimos el valor de current y show mostramos un toast en la aplicacion
          toastRef.current.show("Las password no son iguales");
        } else {
          //decimos que espere que termine de ejecutarse la funcion
          //auth() autenticamos y creamos el usuario y la password con los datos
          //creamos la promesa con then para que realice la insercion
          //ponemos un catch en caso que no se pueda registrar el usuario
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("MyAcount");
            })
            .catch(() => {
              toastRef.current.show(
                "error al crear la cuenta intentelo mas tarde"
              );
            });
        }
      }
    }
    setIsVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      {/*creamos los input */}
      <Input
        /*propiedad place holder */
        placeholder="Correo Electronico"
        /* el contenedor de stylos para el input*/
        containerStyle={styles.inputForm}
        /* para la funcion que hara el input*/
        onChange={e => setEmail(e.nativeEvent.text)}
        /* icono que tendra  */
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        password={true}
        /*pasamos el estado a la propiedad para mostrar o no la password */
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            /* una condicion para mostrar el icono dondo si es cierto mostramos un icono 
            y si es falso mostramos otro icono*/
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            //en la propidad onPress creamos una function arrow o funcion de flecha
            //en la cual cambiamos el valor del estado de verdadero a falso o viseversa
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Repetir password"
        password={true}
        secureTextEntry={hidePasswords}
        containerStyle={styles.inputForm}
        onChange={e => setRepitePassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePasswords ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePasswords(!hidePasswords)}
          />
        }
      />
      <Button
        /* titulo */
        title="unirse"
        /* contenedor de estylo */
        containerStyle={styles.btbStyle}
        //estilo para el boton
        buttonStyle={styles.btnRegister}
        //accion que realizara el boto
        onPress={register}
      />
      <Loading text="creando cuenta" isVisible={isVisibleLoading} />
    </View>
  );
}
export default withNavigation(RegisterForm);
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  btbStyle: {
    marginTop: 25,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  }
});

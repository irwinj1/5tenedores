import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
//importamos todo de firebase
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function MyAcount() {
  // creamos una variable para verificar el estado del login
  const [login, setLogin] = useState(null);

  useEffect(() => {
    //mandamos la auteticacion a firebase y lo cargamos en user
    firebase.auth().onAuthStateChanged(user => {
      // verificamos el valor que posee la variable user
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  //verificamos lo que posee la varible user
  if (login === null) {
    return <Loading isVisble={true} text="Cargando..." />;
  }
  //condicional si login tiene contenido mostramos logged o no logged
  return login ? <UserLogged /> : <UserGuest />;
  /*if (login) {
    return (
      <View>
        <Text>Usuario logeado</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Usuario no logeado</Text>
    </View>
  );
  /*return (
    <View>
      <Text>MyAcount</Text>
    </View>
  );*/
}

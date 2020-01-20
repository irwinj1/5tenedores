import React from "react";
import { firebaseApp } from "./app/utils/FireBase";
//importamos el componente que contiene el contenedor de los tab a mostrar
import Navigation from "./app/navigation/Navigation";

export default function App() {
  //mostramos la informacion del componente importado
  return <Navigation />;
}

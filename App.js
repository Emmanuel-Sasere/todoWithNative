import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

//component

//styled component
import AppLoading from "expo-app-loading";
import Home from "./components/home";
import { Container } from "./styles/appStyles";

export default function App() {
  const [ready, setReady] = useState(false);

  //initial todos
  const initialTodos = [
    // {
    //   title: "Get some books",
    //   date: " Fri, 05 Jan 2024 16:32:11",
    //   key: "1",
    // },
    // {
    //   title: " Read a book",
    //   date: " Fri, 05 Jan 2024 16:32:11",
    //   key: "2",
    // },
    // {
    //   title: " Learn to Pray",
    //   date: " Fri, 05 Jan 2024 16:32:11",
    //   key: "3",
    // },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Container>
      <Home todos={todos} setTodos={setTodos} />
      <StatusBar style="light" />
    </Container>
  );
}

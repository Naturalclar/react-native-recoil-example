import * as React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./RecoilStates/TodoListState";

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", alignItems: "center" },
  input: {
    paddingHorizontal: 8,
    marginRight: 4,
    backgroundColor: "white",
    height: 40,
    flex: 1,
    width: 100,
    color:'#333',
  },
  addButton: { backgroundColor: "blueviolet", padding: 8, borderRadius: 5 },
  buttonText: { color: "white" },
});

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('')
  };

  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={onChange}
        placeholder={"Enter Todo Item Here..."}
      />
      <TouchableOpacity onPress={addItem} style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

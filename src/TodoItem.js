import * as React from "react";
import { useRecoilState } from "recoil";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { todoListState } from "./RecoilStates/TodoListState";
import { CheckBox, Margin } from "react-native-sketchbook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 8,
    marginRight: 4,
    backgroundColor: "white",
    height: 40,
    flex: 1,
    color:'#333',
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 24,
    width: 24,
    backgroundColor: "tomato",
  },
  deleteButtonLabel: { color: "white" },
});

export function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (value) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={item.text}
        onChangeText={editItemText}
      />
      <CheckBox
        checked={item.isComplete}
        onValueChange={toggleItemCompletion}
      />
      <Margin size={"small"} />
      <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
        <Text style={styles.deleteButtonLabel}>x</Text>
      </TouchableOpacity>
    </View>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

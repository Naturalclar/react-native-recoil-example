import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { filteredTodoListState } from "./RecoilStates/TodoListState";
import {
  Heading,
  SubHeading,
  Margin,
  useColors,
} from "react-native-sketchbook";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const { baseBackgroundColor } = useColors();
  return (
      <SafeAreaView style={[styles.container,{ backgroundColor: baseBackgroundColor }]}>
        <FlatList
          style={{ padding: 24 }}
          ListHeaderComponent={
            <>
              <Heading>Recoil Todo List</Heading>
              <Margin size="medium" />
              <TodoItemCreator />
              <Margin size="medium" />
              <TodoListFilters />
              <Margin size="medium" />
              <TodoListStats/>
              <Margin size="medium" />
              <SubHeading>TODOs:</SubHeading>
              <Margin size="medium" />
            </>
          }
          data={todoList}
          renderItem={({ item }) => <TodoItem item={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
  );
}


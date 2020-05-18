import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {useRecoilState} from 'recoil'
import { todoListFilterState } from './RecoilStates/TodoListState';
import {SubHeading,Margin,RadioButton,RadioButtonItem} from 'react-native-sketchbook'

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (value) => {
    setFilter(value);
  };

  return (
    <>
      <SubHeading>Filter:</SubHeading>
      <Margin size="small"/>
      <RadioButton.Group value={filter} onValueChange={updateFilter}>
      <View style={styles.optionContainer}>
        <RadioButtonItem value="Show All" label="All"/>
        <RadioButtonItem value="Show Completed" label="Completed"/>
        <RadioButtonItem value="Show Uncompleted" label="Uncompleted"/>
      </View>
      </RadioButton.Group>
    </>
  );
}

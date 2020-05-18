import * as React from 'react'
import {Typography} from 'react-native-sketchbook'
import {useRecoilValue} from 'recoil'
import {todoListStatsState} from './RecoilStates/TodoListState'

export function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <>
      <Typography>Total items: {totalNum}</Typography>
      <Typography>Items completed: {totalCompletedNum}</Typography>
      <Typography>Items not completed: {totalUncompletedNum}</Typography>
      <Typography>Percent completed: {formattedPercentCompleted}</Typography>
    </>
  );
}

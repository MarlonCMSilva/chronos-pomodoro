import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { TaskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimeWorkerManager';
import { TaskActionTypes } from './TasksActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/taskStateModel';

type TaskContextProvidreProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvidreProps) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state');

    if (storageState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaning: 0,
      formattedSecondsRemaning: ' 00:00',
    };
  });
  const playBeebRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeebRef.current) {
        playBeebRef.current();
        playBeebRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaning: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaning} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeebRef.current === null) {
      playBeebRef.current = loadBeep();
    } else {
      playBeebRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

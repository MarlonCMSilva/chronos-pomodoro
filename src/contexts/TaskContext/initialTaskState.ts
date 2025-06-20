import type { TaskStateModel } from '../../models/taskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaning: 0,
  formattedSecondsRemaning: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};

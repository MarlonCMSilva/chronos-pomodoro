import type { TaskStateModel } from '../../models/taskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemanin: 0,
  formattedSecondsRemaning: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    logBrealTime: 15,
  },
};

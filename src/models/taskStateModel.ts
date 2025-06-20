import type { TaskModel } from './taskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaning: number;
  formattedSecondsRemaning: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

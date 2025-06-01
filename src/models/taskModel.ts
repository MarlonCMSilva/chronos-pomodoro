import type { TaskStateModel } from './taskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando o timer chegar ao final
  interruptDate: number | null; // qunado a task for imterrompida
  type: keyof TaskStateModel['config'];
};

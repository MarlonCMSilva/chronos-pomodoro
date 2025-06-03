import type { TaskModel } from '../models/taskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'logBrealTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}

import { createContext } from 'react';
import type { TaskStateModel } from '../../models/taskStateModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from './TasksActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

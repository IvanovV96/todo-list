const { createSlice, nanoid } = require('@reduxjs/toolkit');

const taskInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    removeTask(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, removeTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

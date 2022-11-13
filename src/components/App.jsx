import { Provider } from 'react-redux/es/exports';
import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <AppBar />
          <TaskForm />
          <TaskList />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

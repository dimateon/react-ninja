import { Provider } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
}

export default App;

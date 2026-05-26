import AppRouter from './AppRouter';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';

function App() {
  return (
    <AlertProvider>
      <Alert />
      <AppRouter />
    </AlertProvider>
  );
}

export default App;
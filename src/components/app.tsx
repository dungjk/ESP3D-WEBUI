import { FunctionalComponent, h } from 'preact';
import DashboardComponent from './dashboard/dashboard.component';
import { Provider } from 'unistore/preact';
import applicationStore from './../stores/application.store';

const App: FunctionalComponent = () => {
  return (
    <Provider store={applicationStore}>
      <DashboardComponent />
    </Provider>
  );
};

export default App;

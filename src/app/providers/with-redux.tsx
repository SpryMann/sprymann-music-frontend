import { store } from 'processes/store';
import { Provider } from 'react-redux';

function withRedux(component: () => React.ReactNode) {
  return function () {
    return <Provider store={store}>{component()}</Provider>;
  };
}

export default withRedux;

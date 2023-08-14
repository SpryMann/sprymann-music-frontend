import Routing from 'pages';

import withProviders from './providers';

import './index.scss';

function App() {
  return <Routing />;
}

const AppWithProdivers = withProviders(App);

export default AppWithProdivers;

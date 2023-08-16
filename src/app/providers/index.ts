import compose from 'compose-function';

import withRedux from './with-redux';
import withRouter from './with-router';

const withProviders = compose(withRedux, withRouter);

export default withProviders;

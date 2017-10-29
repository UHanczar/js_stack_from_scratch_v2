// @flow

import { connect } from 'react-redux';

import { sayHelloAsync } from '../actions/hello';
import Button from '../components/Button';

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);

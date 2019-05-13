import { Container } from 'unstated';

/* eslint-disable react/prefer-stateless-function */
class GlobalContext extends Container {
  state = {
    organizationName: 'the-road-to-learn-react',
    value: '',
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = e => {
    this.setState(prevState => ({
      organizationName: prevState.value,
    }));
    e.preventDefault();
  };
}

export { GlobalContext };

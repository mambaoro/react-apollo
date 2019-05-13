import { Container } from 'unstated';

export class CommentContext extends Container {
  state = {
    isShow: false,
  };

  onToggleShow() {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  }
}

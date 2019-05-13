import { Container } from 'unstated';

export class CommentFormContext extends Container {
  state = { commentBody: null };

  onBodyChange(e) {
    this.setState({
      commentBody: e.target.value,
    });
  }
}

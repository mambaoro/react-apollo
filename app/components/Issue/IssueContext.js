import { Container } from 'unstated';
import { ISSUE_STATES } from './Issues/constants';

export class IssueContext extends Container {
  state = {
    issueState: ISSUE_STATES.NONE,
  };

  onIssueStateChange(issueState) {
    this.setState({ issueState });
  }
}

import { Component } from 'react';
import { Card } from './Card/Card';

export class App extends Component {
  state = {
    id: '1',
    user: 'User Name',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    tweets: 247,
    followers: 100500,
    isFollowing: false,
  };

  componentDidMount() {
    const status = JSON.parse(localStorage.getItem('follow'));
    console.log('status', status);

    if (status === null) {
      localStorage.setItem('follow', JSON.stringify(this.state));
      console.log('status', status);
    } else if (status.isFollowing !== this.state.isFollowing) {
      this.setState({ ...status });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isFollowing !== prevState.isFollowing) {
      localStorage.setItem('follow', JSON.stringify(this.state));
    }
  }

  onFollow = () => {
    if (!this.state.isFollowing) {
      this.setState(prevState => ({
        followers: prevState.followers + 1,
        isFollowing: true,
      }));
    } else {
      this.setState(prevState => ({
        followers: prevState.followers - 1,
        isFollowing: false,
      }));
    }
  };

  render() {
    const { isFollowing, avatar, tweets, followers, user } = this.state;

    return (
      <Card
        avatar={avatar}
        tweets={tweets}
        followers={followers.toLocaleString('en')}
        user={user}
        isFollowing={isFollowing}
        onFollow={this.onFollow}
      />
    );
  }
}

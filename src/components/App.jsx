import { Component } from 'react';
import { CardList } from './CardList/CardList';
import { Section } from './Section/Section.styled';
import users from '../data/users.json';

export class App extends Component {
  state = {
    data: users,
  };

  componentDidMount() {
    console.log(this.state.data);
    const status = JSON.parse(localStorage.getItem('follow'));
    if (status) {
      this.setState({ data: status });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.data !== this.state.data) {
      localStorage.setItem('follow', JSON.stringify(this.state.data));
    }
  }

  onFollow = userid => {
    this.setState(prevState => ({
      data: prevState.data.map(user => {
        if (user.id === userid) {
          return {
            ...user,
            isFollowing: !user.isFollowing,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    return (
      <Section>
        <CardList users={this.state.data} onFollow={this.onFollow} />
      </Section>
    );
  }
}

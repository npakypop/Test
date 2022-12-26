import PropTypes from 'prop-types';
import { Card } from '../Card/Card';
import { UserList, User } from './CardList.styled';

export const CardList = ({ users, onFollow }) => {
  return (
    <UserList>
      {users.map(({ id, avatar, tweets, followers, isFollowing }) => (
        <User key={id}>
          <Card
            id={id}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
            isFollowing={isFollowing}
            onFollow={() => onFollow(id)}
          />
        </User>
      ))}
    </UserList>
  );
};

CardList.propTypes = {
  onFollow: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      isFollowing: PropTypes.bool,
      tweets: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

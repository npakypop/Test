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

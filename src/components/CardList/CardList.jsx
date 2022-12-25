import { Card } from '../Card/Card';
import { UserList, User } from './CardList.styled';
export const CardList = ({ users, isFollowing, onFollow }) => {
  console.log(users);
  return (
    <UserList>
      {users.map(({ id, avatar, tweets, followers }) => (
        <User key={id}>
          <Card
            id={id}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
            isFollowing={isFollowing}
            onFollow={onFollow}
          />
        </User>
      ))}
    </UserList>
  );
};

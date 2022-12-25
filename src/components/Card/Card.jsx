import logo from './logo1.svg';
import cicle from './cicle.png';
import rect from './rect.png';

import {
  Avatar,
  Username,
  Tweets,
  Followers,
  FollowBtn,
  Info,
  UserCard,
  Logo,
  Cicle,
  Line,
  AvatarWrp,
} from './Card.styled.js';

export const Card = ({
  avatar,
  tweets,
  followers,
  isFollowing,
  user,
  onFollow,
}) => {
  return (
    <UserCard>
      <Logo src={logo} alt="logo" />
      <AvatarWrp>
        <Line src={rect} alt=""></Line>
        <Avatar src={avatar} alt="user photo" width={92} />
        <Cicle src={cicle} alt="" />
      </AvatarWrp>
      <Info>
        {/* <Username>{user}</Username> */}
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>{followers} FOLLOWERS</Followers>
      </Info>
      <FollowBtn type="button" onClick={onFollow} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </FollowBtn>
    </UserCard>
  );
};

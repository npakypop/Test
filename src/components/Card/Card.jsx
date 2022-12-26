import logo from '../../img/logo1.svg';
import cicle from '../../img/cicle.png';
import rect from '../../img/rect.png';

import {
  Avatar,
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

export const Card = ({ avatar, tweets, followers, isFollowing, onFollow }) => {
  return (
    <UserCard>
      <Logo src={logo} alt="logo" />
      <AvatarWrp>
        <Line src={rect} alt=""></Line>
        <Avatar src={avatar} alt="user photo" width={92} />
        <Cicle src={cicle} alt="" />
      </AvatarWrp>
      <Info>
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>{followers.toLocaleString('en')} FOLLOWERS</Followers>
      </Info>
      <FollowBtn type="button" onClick={onFollow} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </FollowBtn>
    </UserCard>
  );
};

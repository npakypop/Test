import styled from 'styled-components';
import img from '../../img/picture.svg';

export const UserCard = styled.div`
  margin: 0 auto;
  background-image: url(${img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat, no-repeat;
  background-position: 52px 34px, center;
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  width: 454px;
  height: 547px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Info = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Logo = styled.img`
  width: 88px;
  height: 26px;
  position: absolute;
  top: 24px;
  left: 24px;
`;
export const FollowBtn = styled.button`
  margin-top: 32px;
  width: 226px;
  height: 56px;
  background: ${props => (props.isFollowing ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: box-shadow 250ms ease 0s;
  transition: transform 250ms ease 0s;
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    transform: scale(1.02);
  }
`;

export const AvatarWrp = styled.div`
  width: 100%;
  margin-top: 209px;
  position: relative;
`;
export const Line = styled.img`
  position: absolute;
  width: 100%;
  top: 42px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`;
export const Cicle = styled.img`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`;
export const Username = styled.h4``;
export const Tweets = styled.p``;
export const Followers = styled.p``;

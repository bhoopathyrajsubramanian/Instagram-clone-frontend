import homeIcon from '../../assets/images/home.svg';
import searchIcon from '../../assets/images/search.svg';
import exploreIcon from '../../assets/images/explore.svg';
import reelsIcon from '../../assets/images/reels.svg';
import messageIcon from '../../assets/images/messenger.svg';
import notificationIcon from '../../assets/images/notification.svg';
import createIcon from '../../assets/images/newPost.svg';
import moreIcon from '../../assets/images/more.svg';
import { getCookie } from '../../helper';

const user_id = getCookie('user_id');

export const contentData = [
  {
    name: 'Home',
    image: homeIcon,
    route: 'home',
  },
  {
    name: 'Search',
    image: searchIcon,
    route: 'home',
  },
  {
    name: 'Explore',
    image: exploreIcon,
    route: 'home',
  },
  {
    name: 'Reels',
    image: reelsIcon,
    route: 'home',
  },
  {
    name: 'Message',
    image: messageIcon,
    route: 'home',
  },
  {
    name: 'Notifcation',
    image: notificationIcon,
    route: 'home',
  },
  {
    name: 'Create',
    image: createIcon,
    route: 'create',
  },
  {
    name: 'Profile',
    image: createIcon,
    route: `user/${user_id}`,
  },
  {
    name: 'More',
    image: moreIcon,
    route: 'home',
  },
];

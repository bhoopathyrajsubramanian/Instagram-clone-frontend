import logo from '../../assets/images/logo.svg';
import moreIcon from '../../assets/images/more.svg';
import instagramLogo from '../../assets/images/instagramLogo.svg';
import { contentData } from './sideBarData';
import SideBarButton from './button';
import './sideBar.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  return (
    <>
      {sidebarCollapse ? (
        <div className='sidebar-collapsed'>
          <div className='sidebar-content'>
            <div className='instagram-logo'>
              <img src={instagramLogo} width='60px' height='60px' />
            </div>
            {contentData.map((content, key) => {
              return (
                <button
                  key={key}
                  className='content-button'
                  onClick={() => navigate(`/${content.route}`)}
                >
                  <img src={content.image} className='content-button-image' />
                </button>
              );
            })}
            <button
              className='content-button'
              onClick={() => {
                setSidebarCollapse(!sidebarCollapse);
              }}
            >
              <img src={moreIcon} className='content-button-image' />
            </button>
          </div>
        </div>
      ) : (
        <div className='sidebar'>
          <div className='sidebar-header'>
            <img
              src={logo}
              alt='instagram logo'
              className='sidebar-header-logo'
            />
          </div>
          <div className='sidebar-content'>
            {contentData.map((content, key) => {
              return (
                <SideBarButton
                  key={key}
                  route={content.route}
                  name={content.name}
                  image={content.image}
                />
              );
            })}
            <button
              className='content-button'
              onClick={() => {
                setSidebarCollapse(!sidebarCollapse);
              }}
            >
              <img src={moreIcon} className='content-button-image' />
              <span className='cotent-button-name'>More</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;

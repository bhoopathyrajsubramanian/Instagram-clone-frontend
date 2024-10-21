import logo from '../../assets/images/logo.svg';
import { contentData } from './sideBarData';
import SideBarButton from './button';
import './sideBar.scss';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="instagram logo" className="sidebar-header-logo" />
      </div>
      <div className="sidebar-content">
        {contentData.map((content, key) => {
          return (
            <SideBarButton
              key={key}
              name={content.name}
              image={content.image}
            />
          );
        })}
        
      </div>
    </div>
  );
};
export default SideBar;

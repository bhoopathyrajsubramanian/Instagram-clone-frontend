import { useNavigate } from 'react-router-dom';

const SideBarButton = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className='content-button'
        onClick={() => navigate(`/${props.route}`)}
      >
        <img
          src={props.image}
          alt={props.name}
          className='content-button-image'
        />
        <p className='cotent-button-name'>{props.name}</p>
      </button>
    </div>
  );
};

export default SideBarButton;

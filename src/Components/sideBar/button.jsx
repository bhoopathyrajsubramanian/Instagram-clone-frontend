const SideBarButton = (props) => {
  return (
    <div>
      <button className="content-button">
        <img
          src={props.image}
          alt={props.name}
          className="content-button-image"
        />
        <p className="cotent-button-name">{props.name}</p>
      </button>
    </div>
  );
};

export default SideBarButton;

import "../Pages/innerPage.scss";

function BurgerPanel(props) {
  return (
    <div className="burger-panel">
      <div className="burger-icon" onClick={props.onClick}>
        <span className="burger-icon-lines"></span>
        <span className="burger-icon-lines"></span>
        <span className="burger-icon-lines"></span>
      </div>
    </div>
  );
}

export default BurgerPanel;

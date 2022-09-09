/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
// eslint-disable-next-line react/prop-types
import Title from '../Title/Title';
import './Screen.scss';

function Screen({ img, name, id }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="mainContainer">
      <Title
        name={name}
        id={id}
      />
      <img className="pokeImg" src={img} alt={name} />
    </div>
  );
}

export default Screen;

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Title.scss';

function Title({ name, id }) {
  return (
    <div className="mainTitleContainer">
      <h1 className="pokeName">{name}</h1>
      <span className="pokeId">{`No. ${id}`}</span>
    </div>
  );
}

export default Title;

import React from "react";

const Card = ({id,name,email}) => {
  return (
    <div className="dib br3 pa2 ma2 grow shadow-5" style={{backgroundColor:'rgb(133, 215, 138)'}}>
      <img src={`https://robohash.org/${id}150x150`} alt=""/>
      <div className='tc'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
// rgb(40, 134, 207)
//rgb(7, 86, 147)
//style={{backgroundImage : 'linear-gradient(rgb(128 121 255),rgb(209 207 249))'}}

import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  const CardComponent = robots.map(robot => {
      return <Card id={robot.id} name={robot.name} email={robot.email}/>;
    }
  );
  return !CardComponent.length ?  <h1>No robots found</h1> :
      <div>
        {CardComponent}
      </div>
}

export default CardList;

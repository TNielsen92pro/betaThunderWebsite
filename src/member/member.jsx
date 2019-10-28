import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import './member.scss';

const element = <FontAwesomeIcon icon={faCheckCircle} className={'checkIcon'} />

function Member(props) {
  console.log("Props: ", props);
  return (
    <>
      <div className={'imgWrapper'}>
        <img className={'memberImage'} alt={''} src={require('../images/' + props.name + '.jpg')} />
        <div className={'text'}>
          <div className={'nameText'}>{props.name}</div>
          <p className={'breadText'}>{props.contributions}</p>
        </div>
      </div>
    </>
  );
}

export default Member;
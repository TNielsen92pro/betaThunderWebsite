import React from 'react';

import './header.scss';

const orcImage = 'https://www.daz3d.com/media/catalog/product/cache/1/image/960x1248/17f82f742ffe127f42dca9de82fb58b1/0/0/00-main-orc-hd-for-geneis-8-male-daz3d.jpg';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={'headerWrapper'}>
          <img className={'orcImage'} alt={''} src={orcImage} />
          <div className={'headerColumn1'}>
            <h1 className={'welcomeText'}>Beta Thunder</h1>
            <h2 className={'welcomeCitation'}>"Competitive gameplay, cooperative fun"</h2>
          </div>
          <img className={'orcImage'} alt={''} src={orcImage} />
        </div >
      </div>
    );
  }
}

export default Header;
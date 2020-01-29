import React from 'react';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.history.push('/scan');
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: '#e9607d',
            padding: '4px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            width='64px'
            height='64px'
            src={require('./logo.png')}
            alt='logo'
          />
        </div>
        <div style={{ margin: '16px' }}>
          <br />
          {/* <br /> */}
          <div style={{ margin: '0 8px', fontSize: '18px' }}>
            <div style={{ color: '#e9607d' }}>Bienvenue sur HeyTom !</div>
            <div style={{ color: '#e9607d' }}>
              Pour commander, scannez un qr code en cliquant sur le bouton
              ci-dessous
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              width: '220px',
              height: '220px',
              overflow: 'hidden',
              margin: '0px auto',
              outline: 'none'
            }}>
            <img
              style={{
                transform: 'translate3d(0px, 0px, 0px)',
                width: '100%',
                height: '100%',
                marginLeft: '16px'
              }}
              alt='scan'
              src={require('./scan.gif')}
            />
          </div>
          <br />
          <br />
          <div>
            <button className='scanner' onClick={this.handleClick}>
              SCANNER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);

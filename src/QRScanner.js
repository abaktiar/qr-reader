import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: ''
  };

  handleScan = data => {
    let url = String(data).toLowerCase();
    if (url.startsWith('http') || url.startsWith('www')) {
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = data;
      a.click();
    }
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
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
          <br />
          <div style={{ color: '#e9607d' }}>
            Placez le QR code au centre du carré !
          </div>
          <div
            style={{
              fontSize: '13px',
              color: 'grey',
              fontStyle: 'italic',
              marginTop: '12px'
            }}>
            (Place the QR in the red square !)
          </div>
          <br />
          <br />
          <br />
          <div>
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
              resolution={800}
            />
          </div>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default QRScanner;

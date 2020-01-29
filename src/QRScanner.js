import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: ''
  };

  handleScan = data => {
    if (
      String(data)
        .toLowerCase()
        .startsWith('http')
    ) {
      // window.location.assign(data);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = data;
      // a.target = '_blank';
      // a.download = resumeTitle + ".pdf";
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
      <div style={{ margin: '16px' }}>
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
        <br />
        <br />
        <div style={{ color: '#e9607d' }}>
          Placez le QR code au centre du carré !
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
          />
        </div>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRScanner;

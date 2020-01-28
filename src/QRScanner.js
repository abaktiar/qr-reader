import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: 'No result'
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
      <div>
        <div
          style={{
            background: 'rgb(235, 98, 125)',
            padding: '16px',
            margin: '16px',
            color: '#fff'
          }}>
          TOM
        </div>
        <br />
        <br />
        <div style={{ color: '#eb627d' }}>
          Placez le QR code au centre du carré !
        </div>
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

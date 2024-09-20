import React from 'react';
import '../index.css';
import '../handball.css';

const Handball = () => (
    <div className="container">
      <div className="court">
        <div className="player">
          <div className="head">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>
          <div className="body"></div>
          <div className="arm"></div>
          <div className="legs">
            <div className="leg"></div>
            <div className="leg"></div>
          </div>
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );

export default Handball;

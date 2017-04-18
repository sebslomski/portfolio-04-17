import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Widget from '../components/Widget';
import { uniqueId } from '../utils';
import { Element } from 'react-scroll';

export default class Normal extends Component {
 

  render() {
    return (
    <Element id="comp" style={{marginTop: '400px'}}>
      <div className="wrapper">
        <div className="widget-list">
        
              <LazyLoad height={200} offset={[-100, 0]}>
                <Widget  />
              </LazyLoad>

        </div>
      </div>
      </Element>
    );
  }
}
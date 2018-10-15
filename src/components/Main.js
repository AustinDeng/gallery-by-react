require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 导入图片信息
let imageDates = require('../data/imageData.json')

// 给图片增加其对应的 URL 信息
imageDates = ( imageDataArr => {
  for (let i = 0, j = imageDataArr.length; i < j; i++ ) {
    let singleImageData = imageDataArr[i]
    singleImageData.imageURL = require('../images/' + singleImageData.fileName)
    imageDataArr[i] = singleImageData
  }
  return imageDataArr
})(imageDates)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

import React from 'react'

class ImgFigure extends React.Component {

  // imgFigure 的点击处理函数
  handleClick = (e) => {
    // 如果在中间就翻转,否则就居中
    if (this.props.arrange.isCenter) {
      this.props.inverse()
    } else {
      this.props.center()
    }

    e.stopPropagation()
    e.preventDefault()
  }

  render() {
    let styleObj = {}

    // 如果 pos 属性中指定了这张图片的位置,则使用
    if (this.props.arrange.pos) {
      styleObj = this.props.arrange.pos
    }

    // 如果图片的旋转角度不为零,则添加旋转角度
    if (this.props.arrange.rotate) {
      (['MozTransform', 'msTransform', 'WebkitTransform', '']).forEach((value) => {
        styleObj[value] = 'rotate(' + + this.props.arrange.rotate + 'deg)'
      })
    }

    // 使中心图片不被其他图片遮住
    if (this.props.arrange.isCenter) {
      styleObj.zIndex = 11
    }

    let imgFigureClassName = 'img-figure'
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : ''

    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title} />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>{this.props.data.desc}</p>
          </div>
        </figcaption>
      </figure>
    )
  }
}

export default ImgFigure

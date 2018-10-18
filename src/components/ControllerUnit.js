import React from 'react'

class ControllerUnit extends React.Component {

  // 事件处理函数
  handleClick = (e) => {
    // 如果点击的按钮所对应的图片为居中态,则翻转,否则居中
    if (this.props.arrange.isCenter) {
      this.props.inverse()
    } else {
      this.props.center()
    }

    e.preventDefault
    e.stopPropagation
  }

  render() {
    let contorllerUnitClassName = 'controller-unit'

    // 如果对应的是居中状态的图片,添加居中态的属性
    if (this.props.arrange.isCenter) {
      contorllerUnitClassName += ' is-center'
      // 如果同时也为翻转态的图片,添加翻转态的属性
      if (this.props.arrange.isInverse) {
        contorllerUnitClassName += ' is-inverse'
      }
    }

    return (
      <span className={contorllerUnitClassName} onClick={this.handleClick}></span>
    )
  }
}

export default ControllerUnit

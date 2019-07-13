const BASE = 16

class FontSize {
  constructor (size = 'defaults') {
    let fontSize = '16px'
    if (size === 'small') {
      fontSize = '14px'
    }

    this.size = size
    this.fontSize = fontSize
    return this
  }

  withLineHeight () {
    this.lineHeight = '19px'

    if (this.size === 'small') {
      this.lineHeight = '16px'
    }

    return this
  }
}

export default {
  fontSize: (size) => {
    return new FontSize(size)
  },

  spacing: (scale = 1) => {
    return `${BASE * scale}px`
  }
}

const BASE = 16

const fonts = {
  small: {
    fontSize: '14px',
    lineHeight: '16px'
  },

  default: {
    fontSize: '16px',
    lineHeight: '19px'
  },

  big: {
    fontSize: '22px',
    lineHeight: '28px'
  }
}

class FontSize {
  constructor (size = 'default') {
    this.size = size
    this.fontSize = fonts[size].fontSize
    return this
  }

  withLineHeight () {
    this.lineHeight = fonts[this.size].lineHeight

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

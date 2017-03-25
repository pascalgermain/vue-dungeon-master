export default {
  backgroundImage (image) {
    return {backgroundImage: `url(${require(`@/assets/images/${image}.png`)})`}
  },
  transformRotate (rotation) {
    return {transform: `rotate(${rotation * 90}deg)`}
  }
}

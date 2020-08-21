export const generateBubbleData = (colors) => {
    return colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`,
    }))
}

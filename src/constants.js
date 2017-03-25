export default {
  dungeon: {
    position: {x: 0, y: 5},
    rotation: 90,
    cells: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 1, 5, 1, 6, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  champions: [
    {id: 3, name: 'Halk', hands: {left: 0, right: 0}, params: {health: 100, stamina: 80, mana: 0}},
    {id: 4, name: 'Syra', hands: {left: 0, right: 2}, params: {health: 90, stamina: 70, mana: 80}},
    {id: 5, name: 'Hissssa', hands: {left: 0, right: 1}, params: {health: 80, stamina: 60, mana: 70}},
    {id: 6, name: 'Elija', hands: {left: 0, right: 3}, params: {health: 70, stamina: 50, mana: 60}}
  ]
}

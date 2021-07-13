---
id: beach-boiis
title: Beach-Boiis
custom_edit_url: null
---

export const Highlight = ({children, color, fontColor}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: fontColor ? 'black' : 'white',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

## Partner
[TheWeeWooMachine](https://github.com/TheWeeWooMachine)

## Project Overview

- A mobile volleyball game that involves timing both tapping/swiping to get the ball over the net
- The player has to tap the screen at the right time or they will lose the game
- Each tap/swipe increments a scoreboard by one
- List of scores are displayed at the end of the game
- Later on there could be multiplayer integration with players having to control their own avatar's actions
- Simple graphic design similar to [Im Ping Pong King](https://www.youtube.com/watch?v=Mu5GPEYDZZw)

## Development

- For this app to work on both mobile and PC we went with a PWA React App
- We used [react-swipeable](https://www.npmjs.com/package/react-swipeable) to handle the movements and used plain JS to render and handle gameplay logic

### Issues / Resolution
- <Highlight color="#C590E8">Issue #1:</Highlight> Getting the game to adapt (meaning receive input) using React <code>useState</code> hook
- <Highlight color="#25c2a0">Resolved:</Highlight> Had to refactor the code to use plain vanilla JS and use a pseudo-state constructor for the object. Also had to use React <code>useRef</code> hooks to bind the object to the state
- <Highlight color="#C590E8">Issue #2:</Highlight> Getting the ball to in a fluid motion over the net
- <Highlight color="#25c2a0">Resolved</Highlight> Not a terribly hard fix but to get the ball to curve, we had to use a <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve"> Bézier Curve </a> and implement a midpoint & endpoint generator
- <Highlight color="#C590E8">Issue #3:</Highlight> Callback error
- <Highlight color="#25c2a0">Resolved</Highlight> Me writing silly code that checked if the ref existed and not the <code>ref.current</code>


### To-Dos
- [ ] Adding swipe direction (aka setting left/right & spiking left/right)
- [x] Player Avatar movement
- [x] Implement Pause Buttom
- [x] Menu + Scene Switcher
- [ ] SFX
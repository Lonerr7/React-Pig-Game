# React Pig Game

This repository is a complete version of React Pig Game. This project was built to train React and Redux Toolkit. It has also a local storage interaction and filtration search letters.

---

## Rules:

The game requiries 2 players. It has 4 buttons: **NEW GAME**, **ROLL DICE**, **HOLD** and **SETTINGS**.  
Each player has 2 scores:

1. **Current Score**.
2. **Game Score**.
<!-- end of the list -->

The game starts when you press the button **ROLL DICE**. For each roll of the dice you get **current score points**. You can roll the dice multiple times at your turn, but when the dice number becomes 1 - you loose all your score points you gained this turn and the turn goes to your opponent.  
To secure your score you gain this turn you should press **HOLD** button. When you press it the **current score** converts into your **game score** and the turn passes to your opponent.  
The game goes untill one of the players game score is equal or more the maximum score (which by default is 40 and can be changed in settings).  
**NEW GAME** button starts a new game. It resets all players current score as well as their game scores.
**SETTINGS** button opens a settings window where you can change **maximum game score**. The highest value it can take is 100. Also in settings you can change names of the players.

---

## Used technologies:

- ReactJs
- Redux Toolkit
- SASS(SCSS)

## Link to the project

[React Pig Game](https://lonerr7.github.io/React-Pig-Game/ 'React Pig Game')

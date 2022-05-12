/* global Phaser */

// Copyright (c) 2022 Brayden Blank all rights reserved
//
// Created by Brayden Blank
// Created on: April 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: "gameScene" })
  }

  init (data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload () {
    console.log("Game Scene")
  }

  create (data) {
    // pass
  }

  update (time, delta) {
    // pass
  }
}

export default GameScene

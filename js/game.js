/* global Phaser */

// Copyright (c) 2025 domenic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: apr 2025
// This file contains the JS functions for index.html

// scene import statments
import SplashScene from './SplashScene.js'

// create the new scenes
const splashScene = new SplashScene()

/**
 * Start phaser Game.
 */

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
//console.log(game)

// load scenes
// Note: remember any "Key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)

// the start scene
game.scene.start("splashScene")

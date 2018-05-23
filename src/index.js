import Phaser from "phaser";
import GameScene from "./scenes/gamescene_2";

const  config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 768,
    physics: {
        default: 'arcade',
        
    },
    scene: [GameScene]
};

const theGame = new Phaser.Game(config);

console.log("Hello World");
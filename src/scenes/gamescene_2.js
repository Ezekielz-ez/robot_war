import Phaser from "phaser";

import red_l_idle from "../assets/botwar/red_l_idle.png"
import red_r_idle from "../assets/botwar/red_r_idle.png"
import red_r_attac from "../assets/botwar/red_r_attac.png"
import red_l_attac from "../assets/botwar/red_l_attac.png"

import blue_l_idle from "../assets/botwar/blue_l_idle.png"
import blue_r_idle from "../assets/botwar/blue_r_idle.png"
import blue_l_attac from "../assets/botwar/blue_l_attac.png"
import blue_r_attac from "../assets/botwar/blue_r_attac.png"

import blue_l_wea from "../assets/botwar/blue_l_wea.png"
import blue_r_wea from "../assets/botwar/blue_r_wea.png"
import red_l_wea from "../assets/botwar/red_l_wea.png"
import red_r_wea from "../assets/botwar/red_r_wea.png"

import logo from "../assets/botwar/background.png"
import ground from "../assets/botwar/ground.png"
//import right_weapon from "../assets/right_weapon.png"


var platforms;
var cursor;
var notground_1;
var notground_2;
var weapon1;
var weapon2;
var shot_1, shot_2;

export default class GameScene extends Phaser.Scene
{

 constructor() {
   super({key: "GameScene"});
 }

preload()
{
   //this.load.image("weapon1", weapon1)
   this.load.image("logo", logo)
   this.load.image("ground", ground)
   this.load.image("red_l_idle", red_l_idle)
   this.load.image("red_r_idle", red_r_idle)
   this.load.image("red_l_attac", red_l_attac)
   this.load.image("red_r_attac", red_r_attac)
   this.load.image("red_r_wea", red_r_wea)
   this.load.image("red_l_wea", red_l_wea)

   this.load.spritesheet("red_l_idle_sprite", red_l_idle, {frameWidth: 176, frameHeight: 248})
   this.load.spritesheet("red_r_idle_sprite", red_r_idle, {frameWidth: 177, frameHeight: 248})
   this.load.spritesheet("red_l_attac_sprite", red_l_attac, {frameWidth: 327, frameHeight: 298})
   this.load.spritesheet("red_r_attac_sprite", red_r_attac, {frameWidth: 327, frameHeight: 298})
   this.load.spritesheet("red_r_wea_sprite", red_r_wea, {frameWidth: 29, frameHeight: 29})
   this.load.spritesheet("red_l_wea_sprite", red_l_wea, {frameWidth: 29, frameHeight: 29})

   this.load.image("blue_l_idle", blue_l_idle)
   this.load.image("blue_r_idle", blue_r_idle)
   this.load.image("blue_l_attac", blue_l_attac)
   this.load.image("blue_r_attac", blue_r_attac)
   this.load.image("blue_r_wea", blue_r_wea)
   this.load.image("blue_l_wea", blue_l_wea)

   this.load.spritesheet("blue_l_idle_sprite", blue_l_idle, {frameWidth: 177, frameHeight: 248})
   this.load.spritesheet("blue_r_idle_sprite", blue_r_idle, {frameWidth: 177, frameHeight: 248})
   this.load.spritesheet("blue_l_attac_sprite", blue_l_attac, {frameWidth: 327, frameHeight: 298})
   this.load.spritesheet("blue_r_attac_sprite", blue_r_attac, {frameWidth: 327, frameHeight: 298})
   this.load.spritesheet("blue_r_wea_sprite", blue_r_wea, {frameWidth: 29, frameHeight: 29})
   this.load.spritesheet("blue_l_wea_sprite", blue_l_wea, {frameWidth: 29, frameHeight: 29})

}

create()
{
 cursor = this.input.keyboard.createCursorKeys();
//1280, 768
this.player1Sprite = this.physics.add.sprite(200, 440, "red_r_idle");
//this.player1Sprite.setScale(0.8);
this.player1Sprite.setBounce(0);
this.player1Sprite.setCollideWorldBounds(true);
this.player1Sprite.setGravityY(400);
this.player1Sprite.body.velocity.x = 0;
this.player1Sprite.body.velocity.y = 0;

this.player2Sprite = this.physics.add.sprite(1100, 440, "blue_l_idle");
//this.player2Sprite.setScale(0.8);
this.player2Sprite.setBounce(0);
this.player2Sprite.setCollideWorldBounds(true);
this.player2Sprite.setGravityY(400);
this.player2Sprite.body.velocity.x = 0;
this.player2Sprite.body.velocity.y = 0;
 var background = this.add.image(640, 389, "logo");
background.depth = -50;
shot_1 = false
shot_2 = false
platforms = this.physics.add.staticGroup();
this.score_1 = 0;
this.score_2 = 0;
this.scoreText = this.add.text(550, 384, this.score_1 +":"+ this.score_2, { fontSize: '100px', fill: '#000' });
this.scoreText.depth = -10;
platforms.create(640, 668, 'ground').setScale(1).refreshBody();
platforms.depth = 0;

this.physics.add.collider(this.player1Sprite, platforms);
this.physics.add.collider(this.player2Sprite, platforms);
this.physics.add.collider(this.player1Sprite, this.player2Sprite);

//animation for red
this.anims.create
(
    {
        key: "red_idle_left",
        frames: this.anims.generateFrameNumbers("red_l_idle_sprite", { start: 0, end: 0 }),
        framerate: 5,
        repeat: -1
    }
)

this.anims.create
(
    {
        key: "red_idle_right",
        frames: this.anims.generateFrameNumbers("red_r_idle_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)
this.anims.create
(
    {
        key: "red_attac_left",
        frames: this.anims.generateFrameNumbers("red_l_attac_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)

this.anims.create
(
    {
        key: "red_attac_right",
        frames: this.anims.generateFrameNumbers("red_r_attac_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)
//animation for blue
this.anims.create
(
    {
        key: "blue_idle_left",
        frames: this.anims.generateFrameNumbers("blue_l_idle_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)

this.anims.create
(
    {
        key: "blue_idle_right",
        frames: this.anims.generateFrameNumbers("blue_r_idle_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)
this.anims.create
(
    {
        key: "blue_attac_left",
        frames: this.anims.generateFrameNumbers("blue_l_attac_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)

this.anims.create
(
    {
        key: "blue_attac_right",
        frames: this.anims.generateFrameNumbers("blue_r_attac_sprite", { start: 0, end: 0 }),
        framerate: 1,
        repeat: -1
    }
)
}

update(deltaTime)
{

    //check if 2 players are on the ground
 if(this.player1Sprite.body.touching.down)
     {
         notground_1 = false;
         shot_1 = false;
         this.player1Sprite.setVelocityX(0);
         if (this.player1Sprite.x > this.player2Sprite.x)
         {
             this.player1Sprite.play("red_idle_left");
         }
         else
         {
            this.player1Sprite.play("red_idle_right");
         }
     }
     else
     {
         notground_1 = true;
     }

  if(this.player2Sprite.body.touching.down)
     {
         notground_2 = false;
         shot_2 = false
         this.player2Sprite.setVelocityX(0);
         if (this.player1Sprite.x > this.player2Sprite.x)
         {
             this.player2Sprite.play("blue_idle_right");
         }
         else
         {
            this.player2Sprite.play("blue_idle_left");
         }
     }
     else
     {
         notground_2 = true;
     }
     //control for player 1
 if (cursor.up.isDown && notground_1 == false)
     {
         this.player1Sprite.setVelocityY(-600);
     }

 else if(cursor.right.isDown && notground_1 == true && shot_1 == false)
     {
          //this.playerSprite.setGravityY(0)
         if(this.player1Sprite.x < this.player2Sprite.x)
         {
            this.player1Sprite.setVelocityX(900)
         }
         else
         {
            this.player1Sprite.setVelocityX(-900)
         }
         
         this.player1Sprite.setVelocityY(900)
         this.weapon1Attack();
         shot_1 = true;
         if (this.player1Sprite.x > this.player2Sprite.x)
         {
             this.player1Sprite.play("red_attac_left");
         }
         else
         {
            this.player1Sprite.play("red_attac_right");
         }
     }
     else
     {
         //this.player1Sprite.setVelocityX(0)
         //this.player1Sprite.setVelocityY(0)
     }

     //control for player 2
    if (cursor.down.isDown && notground_2 == false)
        {
            this.player2Sprite.setVelocityY(-600);
        }
    if(cursor.left.isDown && notground_2 == true && shot_2==false)
        {
            //this.playerSprite.setGravityY(0)
        if(this.player2Sprite.x < this.player1Sprite.x)
         {
            this.player2Sprite.setVelocityX(900)
         }
         else
         {
            this.player2Sprite.setVelocityX(-900)
         }
            
            this.player2Sprite.setVelocityY(900)
            this.weapon2Attack();
            shot_2 == true;
            if (this.player1Sprite.x > this.player2Sprite.x)
                {
                    this.player2Sprite.play("blue_attac_right");
                }
                else
                {
                    this.player2Sprite.play("blue_attac_left");
                }
        }
        else
        {
            //this.player2Sprite.setVelocityX(0)
            //this.player2Sprite.setVelocityY(0)
        }
} 

 weapon1Attack()
 {
    if(this.player1Sprite.x < this.player2Sprite.x)
    {
        this.weapon1Sprite = this.physics.add.sprite(this.player1Sprite.x + 150, this.player1Sprite.y + 135, "red_r_wea")
    }
    else
    {
        this.weapon1Sprite = this.physics.add.sprite(this.player1Sprite.x - 150, this.player1Sprite.y + 135, "red_l_wea")
    }
   
   //this.weapon1.body.enable = true;
   //weapon is enabled when dive button is down, and positioned according to player position
   this.weapon1Sprite.depth = -60;
   this.weapon1Sprite.setScale(0.8);
   this.weapon1Sprite.setVelocityX(this.player1Sprite.body.velocity.x); //weapon moves at same velocity as the player
   this.weapon1Sprite.setVelocityY(this.player1Sprite.body.velocity.y);
   this.physics.world.collide(this.weapon1Sprite, this.player2Sprite, this.player2_got_hit, null, this);
   
  }
  weapon2Attack()
 { 
    if(this.player2Sprite.x < this.player1Sprite.x)
    {
        this.weapon2Sprite = this.physics.add.sprite(this.player2Sprite.x + 150, this.player2Sprite.y + 135, "blue_r_wea")
    }
    else
    {
        this.weapon2Sprite = this.physics.add.sprite(this.player2Sprite.x - 150, this.player2Sprite.y + 135, "blue_l_wea")
    }
    //this.weapon1.body.enable = true;
    //weapon is enabled when dive button is down, and positioned according to player position
    this.weapon1Sprite.depth = -60;
    this.weapon2Sprite.setScale(0.8);
    this.weapon2Sprite.setVelocityX(this.player2Sprite.body.velocity.x); //weapon moves at same velocity as the player
    this.weapon2Sprite.setVelocityY(this.player2Sprite.body.velocity.y);
    this.physics.world.collide(this.weapon2Sprite, this.player1Sprite, this.player1_got_hit, null, this);    
    
  }

  player2_got_hit(a,b) {
    this.player1Sprite.x = 200;
    this.player1Sprite.y = 440;
    this.player2Sprite.x = 1100;
    this.player2Sprite.y = 440;
    this.score_1 ++;
    this.scoreText.setText(this.score_1 +":"+ this.score_2);
  }

  player1_got_hit(a,b) {
    this.player1Sprite.x = 200;
    this.player1Sprite.y = 440;
    this.player2Sprite.x = 1100;
    this.player2Sprite.y = 440;
    this.score_2 ++;
    this.scoreText.setText(this.score_1 +":"+ this.score_2);
  }

 disbleWeapon1()
 { 
   this.weapon1.body.enable = false;  
 }
  disbleWeapon2()
 {
   this.weapon2.disableBody(true, true);
 }
}






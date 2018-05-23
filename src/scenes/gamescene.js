import Phaser from "phaser";
import logo from "../assets/PhaserLogo.png"

import ball         from "../assets/1x/ball.png"
import background   from "../assets/1x/background.png"
import down         from "../assets/1x/down.png"
import left         from "../assets/1x/left.png"
import right        from "../assets/1x/right.png"
import up           from "../assets/1x/up.png"
import point        from "../assets/1x/point.png"


//this is a feature from parcel

export default class GameScene extends Phaser.Scene
{
    
    constructor()
    {
        super({key: "GameScence"});
    }

    preload()
    {
        //this.load.image("logo", logo);
        this.load.image("background", background);

        this.load.image("down", down);
        this.load.image("up", up);
        this.load.image("left", left);
        this.load.image("right", right);

        this.load.image("point", point);
        this.load.image("ball", ball);
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    create()
    {
        this.background = this.add.sprite(600,600,"background");
        this.speed =200;
        //set the sprite to the objects
        this.left = this.impact.add.sprite(150, 600,"left");
        this.right = this.impact.add.sprite(1050, 600,"right");
        this.up = this.impact.add.sprite(600, 150,"up");
        this.down = this.impact.add.sprite(600, 1050,"down");
        this.ball = this.impact.add.sprite(600, 600, "ball");

        //add impact and bounce
        this.left.setTypeA().setCheckAgainstB().setFixedCollision();
        this.right.setTypeA().setCheckAgainstB().setFixedCollision();
        this.up.setTypeA().setCheckAgainstB().setFixedCollision();
        this.down.setTypeA().setCheckAgainstB().setFixedCollision();
        this.ball.setTypeB().setCheckAgainstA().setActiveCollision().setMaxVelocity(100);
        
        this.ball.setBounce(1).setVelocityX(3000);
        this.point = this.add.sprite(600, 600, "point");

        this.leftKey  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.downKey  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.upKey    = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.leftKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.rightKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.downKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.upKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        //
    }

    update()
    {
        //60fps
        //for first player
        if (this.leftKey.isDown)
        {
            this.up.setVelocityX(-this.speed);
        }
        else if(this.rightKey.isDown)
        {
            this.up.setVelocityX(this.speed);
        }
        else
        {
            this.up.setVelocityX(0);
        }

        //
        if (this.downKey.isDown)
        {
            this.left.setVelocityY(this.speed);
        }
        else if (this.upKey.isDown)
        {
            this.left.setVelocityY(-this.speed);
        }
        else
        {
            this.left.setVelocityY(0);
        }
        ;

        //for second player
        if (this.leftKey2.isDown)
        {
            this.down.setVelocityX(-this.speed);
        }
        else if (this.rightKey2.isDown)
        {
            this.down.setVelocityX(this.speed);
        }
        else
        {
            this.down.setVelocityX(0);
        }
        
        if (this.upKey2.isDown)
        {
            this.right.setVelocityY(this.speed);
        }
        else if (this.downKey2.isDown)
        {
            this.right.setVelocityY(-this.speed);
        }
        else
        {
            this.right.setVelocityY(0);
        }

        
        /*
        this.physics.world.collide(this.ball, this.left);
        this.physics.world.collide(this.ball, this.right);
        this.physics.world.collide(this.ball, this.up);
        this.physics.world.collide(this.ball, this.down);
        */
    }
    
}
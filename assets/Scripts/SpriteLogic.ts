
import { _decorator, Component, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteLogic')
export class SpriteLogic extends Component {

    // Standard CocosCreator Sprite
    @property({
        type: Sprite
    })
    currSprite: Sprite | null = null;

    //Defining different colors
    @property
    mixColor1 = new Color(255,0,0,255);
    @property
    mixColor2 = new Color(0,255,0,255);
    @property
    mixColor3 = new Color(0,0,255,255);
    //Standard color
    @property
    defColor = new Color(0,0,0,0);
    //Color number will let our function change color accordingly to a random given color number and also will give poits to the players once he has 2/3 streak of the same color
    @property
    colorNumber = 0;

    start () {
        if (this.currSprite)
        {
            // OnStart we set up the color of our sprite to "Invisible" so we must press the button to start our game.
            this.currSprite.color = this.defColor;
        }
    }

// This is the function that is actually deciding the color of our sprite, in base of the random given number.
    changeColor()
    {
        if (this.currSprite)
        {
            this.colorNumber = (Math.floor(Math.random() * 3) + 1);
            switch (this.colorNumber) {
                case 1:
                    this.currSprite.color = this.mixColor1;
                    break;
                case 2:
                    this.currSprite.color = this.mixColor2;
                    break;
                case 3:
                    this.currSprite.color = this.mixColor3;
                    break;
            }
        }

    }
}



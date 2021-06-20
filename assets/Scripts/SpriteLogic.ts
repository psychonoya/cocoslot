
import { _decorator, Component, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteLogic')
export class SpriteLogic extends Component {

    @property({
        type: Sprite
    })
    currSprite: Sprite | null = null;

    @property
    mixColor1 = new Color(255,0,0,255);
    @property
    mixColor2 = new Color(0,255,0,255);
    @property
    mixColor3 = new Color(0,0,255,255);
    @property
    defColor = new Color(0,0,0,0);

    @property
    colorNumber = 0;

    start () {
        if (this.currSprite)
        {
            this.currSprite.color = this.defColor;
            this.changeColor();
        }
    }


    changeColor()
    {
        if (this.currSprite)
        {
            this.colorNumber = (Math.floor(Math.random() * 3) + 1);
            switch (this.colorNumber) {
                case 0:
                    this.currSprite.color = this.defColor;
                    break;
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



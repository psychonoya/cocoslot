
import { _decorator, Component, Node, Label } from 'cc';
import {SpriteLogic} from "./SpriteLogic";
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property({
        type:Label
    })
    pointsText: Label |null = null;

    @property({
        type:Label
    })
    bonusText: Label |null = null;

    @property
    ({
        type: SpriteLogic
    })
    row1: SpriteLogic | null = null;

    @property
    ({
        type: SpriteLogic
    })
    row2: SpriteLogic | null = null;

    @property
    ({
        type: SpriteLogic
    })
    row3: SpriteLogic | null = null;

    currentPoints: number = 0;
    @property
    bonusPoints: number = 10;

    checkRows()
    {
        if(this.row1 && this.row2 && this.row3) {
            if (this.row1.colorNumber == 1 && this.row2.colorNumber == 1 && this.row3.colorNumber == 1 ||
                this.row1.colorNumber == 2 && this.row2.colorNumber == 2 && this.row3.colorNumber == 2 ||
                this.row1.colorNumber == 3 && this.row2.colorNumber == 3 && this.row3.colorNumber == 3 )
            {
                this.currentPoints =  +this.currentPoints  +   +this.bonusPoints
                if (this.bonusText) {
                    this.bonusText.string = "!!!BONUS + 10!!!";
                }
            }
            else if (this.row1.colorNumber == 1 && this.row2.colorNumber == 1 ||
                this.row1.colorNumber == 2 && this.row2.colorNumber == 2 ||
                this.row1.colorNumber == 3 && this.row2.colorNumber == 3 )
            {
                this.currentPoints++
                if (this.bonusText) {
                    this.bonusText.string = "+1!";
                }
            }
            else if(this.row2.colorNumber == 1 && this.row3.colorNumber == 1 ||
                this.row2.colorNumber == 2 && this.row3.colorNumber == 2 ||
                this.row2.colorNumber == 3 && this.row3.colorNumber == 3)
            {
                this.currentPoints++
                if (this.bonusText) {
                    this.bonusText.string = "+1!";
                }
            }
            else
            {
                if (this.bonusText) {
                    this.bonusText.string = "Try again, Good luck!";
                    this.bonusPoints = 10;
                }
            }

        }


    }

    update()
    {
        if (this.pointsText) {
            this.pointsText.string = "Score: " + this.currentPoints;
        }
    }
}



import { _decorator, Component, Node, Label } from 'cc';
import {SpriteLogic} from "./SpriteLogic";
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    // This is a the pointText node we have in our scene, set to null since we will pass the reference through  our engine
    @property({
        type:Label
    })
    pointsText: Label |null = null;
    // This is a the bonusText node we have in our scene, set to null since we will pass the reference through  our engine
    @property({
        type:Label
    })
    bonusText: Label |null = null;
    // This is a the bonusText node we have in our scene, set to null since we will pass the reference through  our engine
    @property({
        type:Label
    })
    coinsText: Label |null = null;




    // Those are the reference of our SpriteLogic class so we can access the colorNumber and assign the points trough it
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
    // those are the current points (0 by default) the number will grow once we start to play and score
    currentPoints: number = 0;
    // this is the bonus points given
    @property
    bonusPoints: number = 10;
    // This is the standard streak points given
    @property
    standardStreakPoints: number = 2;

    @property
    coins: number = 100;

    @property
    cost: number = 5;

    // This function will be only used by the button and not in the code, this is the logic behind our points.
    checkRows()
    {
        if(this.row1 && this.row2 && this.row3) {
            if (this.coins > 10)
            {
                // Reducing coins once we spin
                this.coins =  this.coins-this.cost;
                // if all of our sprite are the same color than we get bonus points
                if (this.row1.colorNumber == 1 && this.row2.colorNumber == 1 && this.row3.colorNumber == 1 ||
                    this.row1.colorNumber == 2 && this.row2.colorNumber == 2 && this.row3.colorNumber == 2 ||
                    this.row1.colorNumber == 3 && this.row2.colorNumber == 3 && this.row3.colorNumber == 3 )
                {
                    this.currentPoints =  +this.currentPoints  +   +this.bonusPoints;
                    if (this.bonusText) {
                        //Changing the text every time we spin, if get the bonus than we show how many points we got
                        this.bonusText.string = "!!!BONUS +"+this.bonusPoints+ "!!!";
                        this.coins =  +this.coins  +   +this.bonusPoints;
                    }
                }
                // otherwise every time we check if we have 2 rows having the same color, and if they are near we get +1
                else if (this.row1.colorNumber == 1 && this.row2.colorNumber == 1 ||
                    this.row1.colorNumber == 2 && this.row2.colorNumber == 2 ||
                    this.row1.colorNumber == 3 && this.row2.colorNumber == 3 )
                {
                    this.currentPoints =  +this.currentPoints  +   +this.standardStreakPoints;
                    this.coins =  +this.coins  +   +this.standardStreakPoints;
                    if (this.bonusText) {
                        this.bonusText.string = "+"+this.standardStreakPoints+"!";
                    }
                }
                else if(this.row2.colorNumber == 1 && this.row3.colorNumber == 1 ||
                    this.row2.colorNumber == 2 && this.row3.colorNumber == 2 ||
                    this.row2.colorNumber == 3 && this.row3.colorNumber == 3)
                {
                    this.currentPoints =  +this.currentPoints  +   +this.standardStreakPoints;
                    this.coins =  +this.coins  +   +this.standardStreakPoints;
                    if (this.bonusText) {
                        this.bonusText.string = "+"+this.standardStreakPoints+"!";
                    }
                }
                else
                {
                    if (this.bonusText) {
                        // If we didn't hit the streak or bonus than we just wish good luck to the player for his next spins
                        this.bonusText.string = "Try again, Good luck!";
                    }
                }
            }
            if (this.coinsText) {
                // Every time we spin the current points are update, UI can also be updated per frame but since we don't have the need in this case, we are updating it only when spin
                this.coinsText.string = "Coins: " + this.coins;
            }

        }
        if (this.pointsText) {
            // Every time we spin the current points are update, UI can also be updated per frame but since we don't have the need in this case, we are updating it only when spin
            this.pointsText.string = "Score: " + this.currentPoints;
        }

    }

    start()
    {
        if (this.pointsText) {
            this.pointsText.string = "Score: " + this.currentPoints;
        }

        if (this.coinsText) {
            // Every time we spin the current coins are update
            this.coinsText.string = "Coins: " + this.coins;
        }
    }
}


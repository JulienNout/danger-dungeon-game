import CanvasUtil from "./CanvasUtil.js";
import Enemies from "./Enemies.js";
export default class GoblinEnemy extends Enemies {
    moveNumbers;
    constructor(row, column) {
        super(row, column, 1000);
        this.image = CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f2.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f3.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f4.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/goblin/goblin_run_anim_f5.png'));
        this.setNumberOfSprites(6);
        this.ammountOfMovement = 1;
        this.moveNumbers = 1;
    }
    update(elapsed) {
        this.animation(elapsed);
        this.timeToNextMove -= elapsed;
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
        if (this.timeToNextMove < 500) {
            if (this.moveNumbers === 1) {
                this.column += this.ammountOfMovement;
                this.moveNumbers = 2;
            }
            else if (this.moveNumbers === 2) {
                this.row += this.ammountOfMovement;
                this.moveNumbers = 3;
            }
            else if (this.moveNumbers === 3) {
                this.column -= this.ammountOfMovement;
                this.moveNumbers = 4;
            }
            else if (this.moveNumbers === 4) {
                this.row -= this.ammountOfMovement;
                this.moveNumbers = 1;
            }
            this.timeToNextMove = this.timeCounter;
        }
    }
}
//# sourceMappingURL=GoblinEnemy%20copy.js.map
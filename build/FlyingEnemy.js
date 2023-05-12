import CanvasUtil from "./CanvasUtil.js";
import Enemies from "./Enemies.js";
export default class FlyingEnemy extends Enemies {
    moveAgain;
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/fly/fly_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/assets/fly/fly_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/assets/fly/fly_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/assets/fly/fly_anim_f2.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/assets/fly/fly_anim_f3.png'));
        this.setNumberOfSprites(4);
        this.timeToNextMove = 1500;
        this.moveAgain = false;
    }
    update(elapsed) {
        this.animation(elapsed);
        this.timeToNextMove -= elapsed;
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
        if (this.timeToNextMove < 0) {
            if (this.moveAgain) {
                this.column += 1;
                this.moveAgain = false;
            }
            else {
                this.column -= 1;
                this.moveAgain = true;
            }
            this.timeToNextMove = 1500;
        }
    }
}
//# sourceMappingURL=FlyingEnemy.js.map
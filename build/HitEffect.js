import CanvasUtil from "./CanvasUtil.js";
import Sword from "./Sword.js";
export default class HitEffect extends Sword {
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f2.png'));
        this.setNumberOfSprites(3);
        this.row = row;
        this.column = column;
    }
    getSwordRowAndColumn(sword) {
        this.column = sword.getPosX() + 1;
        this.row = sword.getPosY() + 1;
    }
    update(elapsed) {
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 90;
        }
    }
}
//# sourceMappingURL=HitEffect.js.map
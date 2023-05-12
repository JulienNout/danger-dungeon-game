import CanvasUtil from './CanvasUtil.js';
import TreasureChest from './TreasureChest.js';
export default class ItemBanner extends TreasureChest {
    shouldRender;
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/chest/banner.png');
        this.posX = this.column * 32;
        this.posY = this.row * 32;
        this.row = row;
        this.column = column;
        this.shouldRender = false;
    }
    getRender() {
        return this.shouldRender;
    }
    setRender(renderThis) {
        this.shouldRender = renderThis;
    }
}
//# sourceMappingURL=ItemBanner.js.map
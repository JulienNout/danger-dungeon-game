import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Scene from './Scene.js';
export default class Room1 extends Scene {
    player;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new Player(900, 600);
    }
    processInput(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_UP))
            this.player.move(0);
        if (keyListener.isKeyDown(KeyListener.KEY_DOWN))
            this.player.move(1);
        if (keyListener.isKeyDown(KeyListener.KEY_LEFT))
            this.player.move(2);
        if (keyListener.isKeyDown(KeyListener.KEY_RIGHT))
            this.player.move(3);
    }
    update(elapsed) {
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        const backgroundImage = CanvasUtil.loadNewImage('./assets/room2.png');
        CanvasUtil.drawImage(canvas, backgroundImage, canvas.width / 2 - backgroundImage.width / 2, canvas.height / 2 - backgroundImage.height / 2);
        this.player.render(canvas);
    }
}
//# sourceMappingURL=Room1.js.map
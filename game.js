class gameplay extends Phaser.Scene{
    constructor() {
        super('gameplay');
    }
    preload(){
        this.preload.path = './assets/';
        this.load.image('rolypoly', 'RolyPoly.png');
        this.load.image('slug', 'Slug.png');
        this.load.image('ground,"Ground.png');
    }
    create(){
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, 600, 'ground').setSize(800, 200);
        this.player = this.physics.add.sprite(100, 100, 'rolypoly').setSize(50, 100);
        this.physics.add.collider(this.player, this.platforms);
    }
    update(){
        var pointer = scene.input.activePointer;
        if(pointer.isDown){
            console.log("hi")
            this.player.setVelocityY(900)
        }
    }
    
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x87CEEB,
    scene: [gameplay],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: false
        }
    },
}
let game = new Phaser.Game(config);

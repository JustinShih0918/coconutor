

const {ccclass, property} = cc._decorator;

@ccclass
export default class Select extends cc.Component {

    hard: number = 1;

    @property(cc.AudioClip)
    select_bgm: cc.AudioClip = null;

    start () {
        cc.audioEngine.playMusic(this.select_bgm, true);
    }

    select_hard(){
        cc.director.loadScene("Game");
        this.hard = 2;
        
    }

    select_soft(){
        cc.director.loadScene("Game");
        this.hard = 1;
    }
}

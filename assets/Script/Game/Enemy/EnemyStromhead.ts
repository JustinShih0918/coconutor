import Enemy, { EnemyState } from './Enemy'
const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyStromhead extends Enemy {

    _enemyType: string = 'Stromhead';

    switchAnim() {
        switch (this.enemyState) {
            case EnemyState.IDLE:
                this._anim.play('Enemy_Stromhead_Idle');
                break;
            case EnemyState.MOVE:
                this._anim.play('Enemy_Stromhead_Run');
                break;
            case EnemyState.ATTACK:
                this.attack();
                this.schedule(this.attackAnimationControl, this.coolDown);
                break;
            case EnemyState.DIE:
                this._anim.play('Enemy_Stromhead_Death');
                this._anim.once('finished', () => {
                    this.node.destroy();
                    
                });
                break;
            default:
                this._anim.play('Enemy_Stromhead_Idle');
            break;
        }
    }
    
    attackAnimationControl () { //remove this will broke
        this.attack();
    }

    attack() {
        this._anim.play('Enemy_Stromhead_Attack');
        this._isAttacking = true;
        this.scheduleOnce(() => {// this way is not good, but now I am too lazy to change it
            this.createDamage();
        }, 0.70);
        this._anim.once('finished', () => {
            if (this.enemyState === EnemyState.ATTACK) {
                this._anim.play('Enemy_Stromhead_Idle');
            }
            this._isAttacking = false;
        });
    }
}

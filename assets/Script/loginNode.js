// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        username:{
            default:null,
            type:cc.EditBox,
        },
        passsword:{
            default:null,
            type:cc.EditBox,
        },
        enabled2:true
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad:function () {
        // this.node.on('say-hello', this.sayHello,this)
    },      
    start() {

    },
    onClick(){
        // cc.log('Stop it')
        var arr =[]
        arr.push(this.username.string)
        arr.push(this.passsword.string)
        // this.node.off('mousedown',this.sayHello.bind(this))
        // this.node.emit('say-hello','Hello Bryan Ng','You dump-ass','Stay focus','Push it up','Clear mind','6')
        // this.node.dispatchEvent(new cc.Event.EventCustom('say-hello',true))
        var newEvt= new cc.Event.EventCustom('say-hello',true)
        newEvt.setUserData(arr)
        this.node.dispatchEvent(newEvt)
    },
    // update (dt) {},
});

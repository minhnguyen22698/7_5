// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require('newEvt')
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
        label:cc.Label,
        score:0,
    },
    // LIFE-CYCLE CALLBACKS:
     onLoad () {
         this.label.node.active=false
         this.node.on('say-hello',this.sayHello,this)
         Emitter.instance=new Emitter()
         Emitter.instance.registerEvent('passing',this.onPassing.bind(this))
     },
     onPassing(msg){
         cc.log('Hello')
         cc.log(msg)
     },
     setText(val){
        this.score=val
        cc.log("dmm")
     },
     sayHello(evt){
         var info=evt.getUserData()
         this.label.string+= info[0]+','+info[1]
         this.label.node.active=true

    },
    start () {
        cc.log(this.score)
        // cc.log(this._score)
    },

    // update (dt) {},
});

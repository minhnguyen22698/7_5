const emitter = require('newEvt')
cc.Class({
    extends: cc.Component,

    properties: {
            score:1000,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //  cc.log(emitter.instance)
        // emitter.instance = new emitter()
        // emitter.instance.registerEvent("Hello", function (msg) {
        //     cc.log(msg)
        // }, this)
        // cc.log(emitter.instance)
    },
    onClick() {
        // emitter.instance.emit('passing','MInhNguyen')
        cc.director.loadScene('helloworld', this.onLoadScene)
    },
    onLoadScene() {
        var canvas = cc.director.getScene().getChildByName('mainNode').getComponent('mainNode')
        //  var Test = canvas.getChildByName('HelloWorld')
        // canvas.setText(10000)
        // cc.log(canvas)
        canvas.setText(this.score)
    },
    start() {

    },

    // update (dt) {},
});

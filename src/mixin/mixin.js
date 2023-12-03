const denomination={
 data(){
    return {
        denominations:'均衡教派',
        skill:'[ 隐身 分身 电耗子]',
        msg:'这是mixin数据'
    }
 },
 methods: {
    dj(){
        console.log(this.skill,'获取到了');
    }
 },
 beforeCreate() {
    console.log('这是mixins生命周期');
 },
 created() {
    console.log('这是mixins生命周期');
 },
 beforeMount() {
    console.log('这是mixins生命周期');
 },
 mounted(){
    console.log('这是mixins生命周期');
 }
}

const mysss={
    data(){
       return {
           denominations:'均衡教派',
           skill:'[ 隐身 分身 电耗子]',
           msg:'这是mixin数据'
       }
    },
    methods: {
       dj(){
           console.log(this.skill,'获取到了');
       }
    },
    beforeCreate() {
       console.log('这是mixins生命周期');
    },
    created() {
       console.log('这是mixins生命周期');
    },
    beforeMount() {
       console.log('这是mixins生命周期');
    },
    mounted(){
       console.log('这是mixins生命周期');
    }
   }
    export default denomination
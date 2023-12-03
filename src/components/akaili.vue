<template>
    <div>
        <!-- 总结：
             概念：公用方法和数据的时候，抽出可以进行混入
             1.当mixins中和组件有重复的命名和方法时，最终以组件为准
             2.mixins生命周期先执行，组件后执行
             3.当两个mixins有重复值的时候，mixins的引入顺序决定值的顺序
         -->
         <h2>akaili的组件</h2>
        <p>教派：{{ denominations }}</p>
        <p>技能：{{ skill }}</p>
        {{ msg }}
        <br>
        <button @click="dj">点我一下试试</button>
    </div>
</template>

<script>
import denomination from '../mixin/mixin.js'
export default {
    mixins:[denomination],
 data() {
     return {
        msg:'这是子组件的数据'
     };
 },
 methods: {},
 beforeCreate() {
    console.log('这是组件的生命周期');
 },
 created() {
    console.log('这是组件的生命周期');
 },
 beforeMount() {
    console.log('这是组件的生命周期');
 },
 mounted(){
    console.log('这是组件的生命周期');
 }
};
</script>

<style lang="scss" scoped>

</style>
export default{
    install(Vue,x,y,z){
        console.log(x,y,z);

        // 全局过滤
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时调用
            bind(el,binding){
                el.value=binding.value*10
            },
            // 指令所在元素被插入页面时调用
            inserted(el){
                el.focus()
            },
            // 指令所在的模版被重新解析时
            update(el,binding){
                el.value=binding.value
            },

        })

        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })
    }
}
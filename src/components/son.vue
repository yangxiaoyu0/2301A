<template>
    <div>
       <h2>子组件</h2>
    <p>{{ prentice }}</p> 
    </div>
    
</template>
<script>
export default {
    // props:['prentice','slogan'],
    props:{       
        prentice:{
             // 类型
        type:String,
        // 默认值
        default:'123',
         // 自定义校验函数
        // validator(value){
        //     return ['success','wrning','danger'].includes(value)
        // }
        }
       
    },
    data(){
             return {
                 tribe:'暗裔',
                 age:18   
             }
    },
    methods:{
        handhh(value){
        console.log(value);
        console.log(this.age);
    } 
    }
   
}
</script>
<style lang="scss" scoped></style>
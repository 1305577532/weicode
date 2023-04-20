//求和功能相关的配置 
export default{
    namespaced:true,
    actions:{
        // 准备actions--用于响应组件中的动作
        jiaOdd(context,value){
            // console.log(context);
            if(context.state.sum % 2){
                context.commit("JIA",value)
            }
        },
        WAIT(context,value){
            setTimeout(() => {
                context.commit("JIA",value)
            }, 2000);
        }

    },
    mutations:{
        // 准备mutations--用于操作数据(state)
        JIA(state,value){
            state.sum+=value 
            // console.log("mutations中的jia被调用了",state,value);
        },
        JIAN(state,value){
            state.sum-=value
        },
    },
    state:{
        sum:0, //当前的和
        school:"weiwei大学",
        subject:"前端",
    },
    getters:{
        // 准备 getters-用于将state中的数据进行加工
        bigSum(state){
            return state.sum * 10
        }
    },
}
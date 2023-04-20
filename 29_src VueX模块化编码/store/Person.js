import axios from "axios"
import { nanoid } from "nanoid"

// 人员管理功能相关的配置
export default {
    namespaced:true,
    actions:{
        addpersonWang(context,value){
            if(value.name.indexOf("王")===0){
                context.commit("ADD_PERSON",value)
            }else{
                alert("请入姓王的")
            } 
        },
    addpersonServer(context){
        axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                Response => {
                    context.commit("ADD_PERSON",{id:nanoid(),name:Response.data})
                },
                Error => {
                    alert(Error.message)
                }
        )
    }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        // 准备state--用于存储数据
        personList:[
            {id:"001",name:"张三",age:18},
        ]
    },
    getters:{
        fristPersonname(state){
            return state.personList[0].name
        }
    },
}

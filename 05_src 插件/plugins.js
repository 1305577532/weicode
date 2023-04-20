
export default  {
    install(Vue){

        Vue.filter("myslice",function(value){
            return value.slice(0,4)
        }),

    Vue.mixin({
        data() {
            return {
                x:99,
                y:123
            }
        },
    }),

    Vue.prototype.demo = () =>{alert("dawang")}

    }
}
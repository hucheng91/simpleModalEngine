/**
 * Created by pc on 2016/4/18.
 */
jQuery(document).ready(function(){
    var jsonData = [
        {id:1,name:"王一",email:"123@gmail.com"}
        ,{id:2,name:"王二",email:"456@gmail.com"}
        ,{id:3,name:"王三",email:"789@gmail.com"}
        ,{id:4,name:"王四",email:"abc@gmail.com"}
        ,{id:5,name:"王五",email:"def@gmail.com"}
        ,{id:6,name:"王六",email:"ghi@gmail.com"}
    ]
    var option = {
        container :$("#list_div"),
        voList : jsonData,
        demo :$("#demo_div"),
        delete: {
            e : 'click',
            f : function (vo,d,item) {
                jsonData.splice((parseInt(vo.id)-1),1);
                simpleModalEngine.initModalEngine(option);
            }
        },
        edit:{
            e:"click",
            f:function(vo,d,item){
                alert(vo.id);
            }
        }
    }
    simpleModalEngine.initModalEngine(option);
})
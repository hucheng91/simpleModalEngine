/**
 * Created by pc on 2016/4/18.
 */
jQuery(document).ready(function(){
    var jsonData = [
        {id:1,name:"��һ",email:"123@gmail.com"}
        ,{id:2,name:"����",email:"456@gmail.com"}
        ,{id:3,name:"����",email:"789@gmail.com"}
        ,{id:4,name:"����",email:"abc@gmail.com"}
        ,{id:5,name:"����",email:"def@gmail.com"}
        ,{id:6,name:"����",email:"ghi@gmail.com"}
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
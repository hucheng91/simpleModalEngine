/**
 * Created by pc on 2016/4/18.
 */
;
var simpleModalEngine;
if(!simpleModalEngine)simpleModalEngine = {};

simpleModalEngine.initModalEngine=function(option){

        if ($.type(option) != "object") {
            alert('parameter must be json map!');
            return false;
        }
        var container = option['container']; //存储数据的容器
        var demo = option['demo']           //模板
        var voList = option['voList'];      //  数据
        if (!(container && demo && voList)) {
            return false;
        }

        //
        container.children("._newProductInstance").remove();
        //
        $.each(voList, function(index, item) {
            var productVo = item;
            var _newProductInstance = demo.clone(false);
            _newProductInstance.removeAttr("id");
            $.each(_newProductInstance.find("*"), function(index1, item) {
                var _fieldName = $(item).attr("name");
                var val = productVo[_fieldName];

                /**渲染事件 bigin**/

                /**渲染事件 end**/
                if (val!=""&&val!=undefined) {
                    $(item).html(val);
                }


                var _url = $(item).attr("url_to_src");
                if (productVo[_url]) {
                    $(item).attr('src',productVo[_url]);
                }
                //绑定事件
                debugger;
                var _property = $(item).attr("property");
                var eventDefineOfitem = option[_property];
                if (eventDefineOfitem) {
                    $(item).bind(eventDefineOfitem.e, function(){
                        eventDefineOfitem.f(productVo,_newProductInstance,$(item));
                    });
                }
            });
            _newProductInstance.show();
            //给数据加上同一样式
            _newProductInstance.addClass("_newProductInstance");
            container.append(_newProductInstance);
        });


};
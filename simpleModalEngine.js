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
        var container = option['container']; //�洢���ݵ�����
        var demo = option['demo']           //ģ��
        var voList = option['voList'];      //  ����
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

                /**��Ⱦ�¼� bigin**/

                /**��Ⱦ�¼� end**/
                if (val!=""&&val!=undefined) {
                    $(item).html(val);
                }


                var _url = $(item).attr("url_to_src");
                if (productVo[_url]) {
                    $(item).attr('src',productVo[_url]);
                }
                //���¼�
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
            //�����ݼ���ͬһ��ʽ
            _newProductInstance.addClass("_newProductInstance");
            container.append(_newProductInstance);
        });


};
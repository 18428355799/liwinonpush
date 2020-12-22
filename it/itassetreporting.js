function myFunction(){
    var personid = $("#personid").val();
    $.ajax({
        type: "get",
        url:"/inform/itassetreporting/getUser?personid="+personid,
        success:function (res) {
          $("#name").val(res.name);
          $("#department").val(res.department);
        }
    })
}


// 表单提交事件 添加修改表单提交
layui.form.on('submit(btnSubmit)', function(data) {
    if (data.field.personid == "") {// $("#editFormb
        layer.msg("请输入工号");
        return false;
    }
    if (data.field.name == "") {// $("#editFormb
        layer.msg("请输入姓名");
        return false;
    }
    if (data.field.department == "") {// $("#editFormb
        layer.msg("请选择部门");
        return false;
    }
    if (data.field.stationnature == "") {// $("#editFormb
        layer.msg("请选择岗位性质");
        return false;
    }
    if (data.field.itnumber == "") {// $("#editFormb
        layer.msg("请输入资产编号");
        return false;
    }
    if (data.field.brand == "") {// $("#editFormb
        layer.msg("请输入电脑品牌");
        return false;
    }
    if (data.field.area == "") {// $("#editFormb
        layer.msg("请输入资产位置");
        return false;
    }
    $.post("/inform/itassetreporting/addItAssetReporting", data.field, function(res) {
        if ( res.data ) {
            layer.msg(res.msg, {
                icon : 1,
                time : 500
            // 1秒关闭（如果不配置，默认是3秒）
            });
            setTimeout(function() {
                // 1.5秒后实现的方法写在这个方法里面 延时刷新
                location.reload();
            }, 500);
        } else {
            layer.msg(res.msg, {
                icon : 2,
                time : 800
            // 2秒关闭（如果不配置，默认是3秒）
            });
            return false;
        }
    }, "JSON");
    return false;
});
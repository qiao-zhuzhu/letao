$(function() {

    $.ajax({
        url: '/employee/checkRootLogin',
        type: 'get',
        async: false,
        success: function(res) {

            if (res.success) {
                location.href = "user.html";

            }
        }
    });



    $('#login-button').on('click', function() {

        // alert(111)

        // var username = $.trim($("[name='username']").val());
        // var password = $.trim($("[name='password']").val());

        // console.log(username);
        // console.log(password);
        var data = {
            username: $.trim($('#username').val()),
            password: $.trim($('#password').val())
        }


        if (!username) {
            alert("请输入用户名");
            return;
        }

        if (!password) {
            alert("请输入密码");
            return;
        }


        $.ajax({
            url: '/employee/employeeLogin',
            type: 'post',
            data: data,
            success: function(res) {

                console.log(res);

                if (res.success) {

                    location.href = "user.html";

                } else {
                    alert(res.message);
                }
            }
        });
    });



})
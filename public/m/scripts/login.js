$(function() {

    $('#login-btn').on('click', function() {


        var username = $.trim($('[name="username"]').val());
        var password = $.trim($('[name="password"]').val());

        // console.log(username);

        if (!username) {
            mui.toast("请输入用户名");
            return;
        }
        if (!password) {
            mui.toast("请输入密码");
            return;
        }

        // console.log('1111')


        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },

            beforeSend: function() {
                $('#login-btn').html("正在登录...");
            },

            success: function(res) {

                // console.log(res);

                mui.toast("登陆成功");


                $('#login-btn').html("登录");

                setTimeout(function() {
                    location.href = "user.html";
                }, 2000);
            }
        })
    });

});
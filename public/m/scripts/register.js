$(function() {
    $('#register-btn').on('click', function() {


        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();

        // console.log(username);

        if (!username) {
            mui.toast("请输入用户名");
            return;
        }
        if (mobile.length < 11) {
            mui.toast("请输入合法手机号");
            return;
        }
        if (password != againPass) {
            mui.toast("两次输入的密码不一样");
            return;
        }


        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function(res) {
                alert("注册成功");

                // console.log(res);


                setTimeout(function() {
                    location.href = "login.html";
                }, 2000)
            }
        })
    })



    $('#getCode').on('click', function() {

        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res) {

                console.log(res.vCode);

            }
        })
    });
})
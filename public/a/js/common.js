$(function() {



    $.ajax({
        url: '/employee/checkRootLogin',
        type: 'get',
        async: false,
        success: function(res) {

            if (res.error && res.error == 400) {

                location.href = "login.html";
            }
        }
    });



    // 登出
    $('#loginOut').on('click', function() {

        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            success: function(result) {
                console.log(result)
                if (result.success) {
                    location.href = "login.html";
                } else {
                    alert('登出失败');
                }
            }
        })

    });





    var navLi = $('.navs li')

    navLi.on('click', function() {

        $(this).find('ul').slideToggle();

    });

});
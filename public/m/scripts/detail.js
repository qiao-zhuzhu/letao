$(function() {

    var kucunNum = 0;
    // 产品ID
    var id = getParamsByUrl(location.href, 'id');

    $.ajax({
        url: '/product/queryProductDetail',
        type: 'get',
        data: {
            id: id
        },
        success: function(res) {
            console.log(res)

            var html = template("productTpl", res);

            console.log(html)
            $('#product-box').html(html);

            //获得slider插件对象
            var gallery = mui('.mui-slider');
            gallery.slider();

        }
    });


    $('#product-box').on('tap', '.size span', function() {

        $(this).addClass('active').siblings('span').removeClass('active');

        //用户选择的尺码
        size = $(this).html();


    });

    var oInp = $('#inp');

    $('#increase').on('tap', function() {

        var num = oInp.val()

        num++;

        if (num > kucunNum) {
            num = kucunNum;
        }

        oInp.val(num);
    })

    $('#reduce').on('tap', function() {
        var num = oInp.val()

        num--;

        if (num < 1) {
            num = 1;
        }

        oInp.val(num);

    });

})
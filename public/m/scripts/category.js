$(function() {

    mui('.mui-scroll-wrapper').scroll({

        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢,滚动距离越小，默认值0.0006
    });

    //获取一级分类
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response) {

            // 所谓的模板殷勤
            // 作用就是用来帮我们将数据和html拼接好
            // 将拼接好的结果，返回给我们
            console.log(response);

            var html = template('category-first', { result: response.rows });

            $('#links').html(html);

            console.log(html);


            if (response.rows.length) {

                $('.links').find('a').eq(0).addClass('active')

                var id = response.rows[0].id

                getSecondCategory(id)
            }

        }
    })


    /*
		点击一级分类获取二级分类的数据

			1.一级分类添加点击事件
			2.在事件处理函数中获取到一级分类的ID
			3.调用二级分类的接口获取对应的数据
			4.将数据展示到对应的位置中
			5.如果接口中没有数据 要在页面中显示暂无数据

    */

    //一级分类添加点击事件
    $('#links').on('click', 'a', function() {

        //获取当前点击的一级分类id
        var id = $(this).attr('data-id');

        $(this).addClass('active').siblings().removeClass('active')

        getSecondCategory(id)

    });

    function getSecondCategory(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            type: 'get',
            data: {
                id: id
            },
            success: function(response) {
                console.log(response)

                var html = template('category-second', response)

                $('.brand-list').html(html)

            }
        })
    }
})
$(function() {
    $('#search-btn').on('click', function() {
        var keyword = $('#keyword').val();

        if (keyword) {
            //将输入的关键字存到数组中
            keyArr.push(keyword);
            //将关键字数组存到本地
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            location.href = "search-result.html?keyword=" + keyword;


        } else {
            alert('请输入商品关键字')
        }
    });

    var keyArr = [];
    if (localStorage.getItem('keyArr')) {
        keyArr = JSON.parse(localStorage.getItem('keyArr'));

        console.log(keyArr);
        var html = template("historyTpl", { result: keyArr });

        $('#history-box').html(html);

        console.log(keyArr);
    }
    $('#clearBtn').on('click', function() {
        $('#history-box').html('');
        keyArr = [];
        localStorage.removeItem('keyArr');
    })
})
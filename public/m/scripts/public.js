$(function() {

    // 恢复A元素的跳转
    $('body').on('tap', 'a', function() {

        mui.openWindow({
            url: $(this).attr('href')
        });

    });

});

function getParamsByUrl(url, name) {
    // http://localhost:3000/m/search-result.html?keyword=22&age=18
    var params = url.substr(url.indexOf('?') + 1);
    // console.log(indexNum);      43 查找索引号
    var param = params.split('&');
    // console.log(param)        ["keyword=22","age=18"] 切割
    // console.log(param);

    for (var i = 0; i < param.length; i++) {
        var current = param[i].split('=');
        // console.log(current)          ["keyword", "22"]["age", "18"]
        // console.log(current);

        if (current[0] == name) {
            return current[1];
        }

    }
    return null;

};
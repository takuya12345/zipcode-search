
$(function(){
    $('#search-button').click(function() {
        // リクエストパラメーター
        let param = 
        {
            zipcode: $('#zip-code').val(),
            limit: 1
        }

        $.ajax({
            type: "GET",
            cache: false,
            data: param,
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp",
            success: function (data) {
                if (data.status !== 200) {
                    $("#search-result").html(data.message);
                    return;
                }

                let resultText = '';
                if (data.results == null) {
                    resultText += '<div>該当する住所がありません</div>'
                } else {
                    resultText += '<div>住所：' + data.results[0].address1 + data.results[0].address2 + data.results[0].address3 + '</div>'
                        + '<div>カナ：' + data.results[0].kana1 + data.results[0].kana2 + data.results[0].kana3 + '</div>'
                }
                $("#search-result").html(resultText);
            }
        })
    })

});

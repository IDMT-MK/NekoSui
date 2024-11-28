
$(document).ready(function() {
    // クッキーの読み込み
    if ($.cookie('popupDisplayed') !== 'true') {
        // 初回訪問の場合、ポップアップを表示
        $(".bg_onetime_popup").fadeIn();

        // クッキーにポップアップ表示済みを記録（ブラウザを閉じるまで有効）
        $.cookie('popupDisplayed', 'true', { expires: 0, path: '/' });
    }

    // ポップアップの閉じるボタンがクリックされたとき
    $(".onetime_popup_title_close").click(function(event) {
        event.stopPropagation(); // クリックイベントの伝播を止める
        $(".bg_onetime_popup").fadeOut(500); // 500ミリ秒かけてフェードアウト
    });

    // ポップアップの背景がクリックされたとき
    $(".bg_onetime_popup").click(function() {
        $(".bg_onetime_popup").fadeOut(500); // 500ミリ秒かけてフェードアウト
    });
});

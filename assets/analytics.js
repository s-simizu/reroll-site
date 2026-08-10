// 配信サイトのアクセス解析（T-100）。GoatCounter は Cookie を使わないので
// 同意バナーが要らない（プライバシーポリシー §4 と対応）。
//
// GC_CODE を自分のアカウントのコードに置き換えると有効になる。空の間は
// 何も読み込まない（アプリ側の Analytics.appID と同じ「未設定なら完全な no-op」）。
// **有効化とプライバシーポリシー §4 の記載は必ずセットで。**
//
// App Store への遷移を数えたいリンクには data-count 属性を付けること
// （例: <a href="https://apps.apple.com/..." data-count="appstore">）。
// 付け忘れるとページビューしか残らず、サイト→ストアの転換率が測れない。
(function () {
  var GC_CODE = "";   // 例: "reroll" → https://reroll.goatcounter.com/count
  if (!GC_CODE) return;

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "//gc.zgo.at/count.js";
  tag.setAttribute("data-goatcounter", "https://" + GC_CODE + ".goatcounter.com/count");
  document.head.appendChild(tag);

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[data-count]");
    if (!link || !window.goatcounter || !window.goatcounter.count) return;
    var name = link.getAttribute("data-count");
    window.goatcounter.count({ path: name, title: name, event: true });
  });
})();

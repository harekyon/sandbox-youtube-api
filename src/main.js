
// DOMが構成時に、YTライブラリを読み込む
window.addEventListener('DOMContentLoaded', () => {
    const headElem   = document.getElementsByTagName('head')[0];
    const scriptElem = document.createElement('script');

    scriptElem.src = 'https://www.youtube.com/iframe_api';

    headElem.appendChild(scriptElem);
});

//画像等読み込み完了後にメイン処理実行
window.addEventListener('load', () => {
  onYouTubeIframeAPIReady();
})

//メイン処理
function onYouTubeIframeAPIReady() {
    let player = new YT.Player('youtubeBox', {
        videoId : 'IqKz0SfHaqI',
        width   : 480,
        height  : 270
    });
    document.getElementById('playButton1').addEventListener('click', () => {
      console.log('playButton1 clicked');
      //Youtube IDを切り替える(動画を切り替える)
      player.loadVideoById({ videoId: "Pct1cehK4Tg" });
      //ミュートを解除
      player.unMute();
      //動画を再生
      player.playVideo();
    });
    document.getElementById('playButton2').addEventListener('click', () => {
      console.log('playButton2 clicked');
      player.loadVideoById({ videoId: "5D9JooJafeI" });
      player.unMute();
      player.playVideo();
    });
    document.getElementById('playButton3').addEventListener('click', () => {
      console.log('playButton3 clicked');
      player.loadVideoById({ videoId: "8n2w1XVCQno" });
      player.unMute();
      player.playVideo();
    });
}



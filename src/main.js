
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
    const player = new YT.Player('youtubeBox', {
        videoId : 'IqKz0SfHaqI',
        width   : 480,
        height  : 270
    });
    document.getElementById('playButton').addEventListener('click', () => {
      console.log('playButton clicked');
      player.unMute();
      player.playVideo();
    });
}



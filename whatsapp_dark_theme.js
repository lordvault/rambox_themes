function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}
applycss(`
  /* ==UserStyle==
  @name         Dark-WhatsApp Lite
  @namespace    github.com/vednoc/dark-whatsapp
  @description  Non-customizable version of Dark-WhatsApp.
  @homepageURL  https://github.com/vednoc/dark-whatsapp
  @author       vednoc <vednoc@pm.me> (https://github.com/vednoc)
  @version      2.2.2
  @license      MIT
  ==/UserStyle== */
/*
  @-moz-document domain("web.whatsapp.com")
  {
    :root
    {
      --dark: #1f232a;
      --darken: #252a33;
      --darker: #2c313a;
      --light: #e9e9e9;
      --lighter: #a1a1a1;
      --accent: #7289da;
      --yellow: #e5c512;
      --orange: #df4b16;
      --red: #dc322f;
      --magenta: #f33682;
      --violet: #6c71c4;
      --blue: #268bd2;
      --cyan: #2aa198;
      --green: #859900;
      --white: #fff;
      --radius: 4px;
      --t: transparent;
      --shadow: rgba(0,0,0,0.145);
      --sh-h: rgba(0,0,0,0.208);
      --bshadow: 0 2px 4px rgba(0,0,0,0.145);
      --app-width: 1396px;
      --emoji-o: 0.8;
      --avatar-r: 50%;
      --bg-image: url("https://raw.githubusercontent.com/vednoc/dark-whatsapp/develop/images/bg-blur-high.jpg");
      --bg-opacity: 0.4;
      --bg-blur: 0;
      --bg-hue: 0;
      --bg-invert: 0;
      --chat-image: url("https://web.whatsapp.com/img/bg-chat-tile_9e8a2898faedb7db9bf5638405cf81ae.png");
      --chat-bg-o: 0.1;
      --chat-bg-i: 0.6;
      --c-m-hover: 1s;
      --ui-font: "custom font", "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
      --version: "Dark-WhatsApp USo-Lite v2.2.2";
      --message: "In order to break free from USo, we had to remove custom settings from their website because they force you to use it whenever you wanna make a change, and it's too irritating and time consuming for maintenance. To get new custom settings with many more options, install the UserCSS version from GitHub and check the wiki pages to see how to customize it. Also, report any issues that you happen to have on GitHub, Discord, or email them to me. ";
      --changes: "https://github.com/vednoc/dark-whatsapp";
    }
    @  supports (-moz-user-select: none)
    {
      :root * {
        scrollbar-width: thin;
    }
  }*/

  body
  {
    color: #e9e9e9 !important;
    background-color: #1f232a !important;
    background-image: none;
    scrollbar-color: #7289da rgba(85,85,85,0.125);
  }

  body ::placeholder,
    body ._2kE6F
  {
    color: #a1a1a1 !important;
  }

  body strong,
    body [contenteditable]
  {
    color: #e9e9e9 !important;
  }

  body a
  {
    color: #7289da;
  }

  body select
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
  }

  .Fzl83
  {
    margin-right: 24px;
  }

  .Fzl83::before
  {
    color: #a1a1a1 !important;
  }

  body option
  {
    color: #e9e9e9 !important;
    background-color: #2c313a !important;
  }

  body ::-moz-range-progress
  {
    background-color: #268bd2 !important;
  }

  body ::-moz-range-thumb
  {
    background-color: #7289da !important;
  }

  body ::-moz-range-track
  {
    background-color: #1f232a !important;
  }

  body ._1N8Pv
  {
    background-color: #7289da !important;
  }

  body ::-webkit-progress-bar
  {
    background-color: #2c313a !important;
  }

  body ::-webkit-progress-value
  {
    background-color: #7289da !important;
  }

  body ::-webkit-slider-runnable-track
  {
    background-color: #1f232a !important;
  }

  body ::-webkit-slider-thumb
  {
    background-color: #7289da !important;
  }

  body ::-webkit-scrollbar-track
  {
    background-color: rgba(85,85,85,0.133);
  }

  body ::-webkit-scrollbar-thumb
  {
    background-color: #7289da;
  }

  body,
    body button,
    body input
  {
    font-family: "custom font", "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
  }

  body .landing-wrapper::before
  {
    background-color: #252a33 !important;
  }

  body .landing-header
  {
    position: relative;
  }

  body .landing-header path[fill ^= "#FFF"]
  {
    fill: #7289da;
  }

  body .landing-header path[fill ^= "#00E"]
  {
    fill: #1f232a;
  }

  body .landing-header div
  {
    text-transform: unset;
    color: #e9e9e9 !important;
  }

  body .landing-header::after
  {
    right: 0;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    content: "Dark-WhatsApp USo-Lite v2.2.2";
  }

  body .landing-window:not(#z)
  {
    border-radius: 4px;
    background-color: #1f232a !important;
    box-shadow: inset 0 0 0 1px #2c313a, 0 2px 4px rgba(0,0,0,0.145);
  }

  body .landing-main a[href]
  {
    color: #7289da !important;
  }

  body .landing-main label,
    body .landing-main ._2yUXW
  {
    color: #a1a1a1 !important;
  }

  body .landing-main .landing-title
  {
    color: #e9e9e9 !important;
  }

  body .landing-main rect[fill ^= "#f2f"],
    body .landing-main rect[fill ^= "#F2F"]
  {
    fill: #2c313a;
  }

  body .landing-main path[fill ^= "#818"]
  {
    fill: #7289da;
  }

  body .landing-main div[data-ref]
  {
    border-radius: 0;
    filter: contrast(150%);
    outline: 4px solid #fff;
    box-shadow: 0 0 0 4px #fff;
  }

  body .landing-main div[data-ref] [role="button"]
  {
    color: #fff !important;
    background-color: #7289da !important;
  }

  body .landing-main div[data-ref]._3aqLw
  {
    outline: 4px solid #7289da;
    box-shadow: 0 0 0 4px #7289da;
  }

  body .landing-main + ._3vndg
  {
    background-color: transparent !important;
  }

  body .landing-main + ._3vndg img
  {
    opacity: 0.3;
  }

  body .landing-main + ._3vndg [style *= "opacity: 1"]
  {
    background-color: transparent !important;
  }

  body .landing-main ._2-fMQ
  {
    color: #fff !important;
    background-color: #7289da !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  body .landing-main ._2-fMQ::before
  {
    border-bottom-color: #7289da;
  }

  body [id *= "startup"]
  {
    background-color: #1f232a !important;
  }

  body [id *= "startup"] progress
  {
    color: #7289da !important;
    background-color: #2c313a !important;
  }

  body [id *= "startup"] ::-moz-progress-bar
  {
    background-color: #7289da !important;
  }

  body [id *= "startup"] circle
  {
    stroke: #e9e9e9;
  }

  body ._3pkG4
  {
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
    box-shadow: inset 0 0 0 1px #2c313a, 0 2px 4px rgba(0,0,0,0.145);
  }

  body ._3pkG4 button
  {
    color: #7289da !important;
  }

  body ._2WwbV,
    body .FPZFa
  {
    color: #7289da !important;
    border-color: #7289da !important;
    background-color: #252a33 !important;
  }

  body ._1qNwV
  {
    border-color: #2c313a !important;
    background-color: #1f232a !important;
  }

  body ._1qNwV a
  {
    color: #7289da;
  }

  body ._1qNwV::after
  {
    border-color: #7289da !important;
  }

  body ._1qNwV [style] h1
  {
    color: #e9e9e9 !important;
  }

  body ._1qNwV [style] div
  {
    color: #a1a1a1 !important;
  }

  body ._1qNwV [data-asset-intro-image]
  {
    border-radius: 50%;
    max-width: 200px;
    max-height: 200px;
    filter: opacity(0.75);
    transition: opacity 0.6s ease;
  }

  body ._1qNwV h1 + div[class]
  {
    font-size: 0;
  }

  body ._1qNwV h1 + div[class]::before
  {
    display: block;
    font-size: 16px;
    margin-bottom: -16px;
    content: "In order to break free from USo, we had to remove custom settings from their website because they force you to use it whenever you wanna make a change, and it's too irritating and time consuming for maintenance. To get new custom settings with many more options, install the UserCSS version from GitHub and check the wiki pages to see how to customize it. Also, report any issues that you happen to have on GitHub, Discord, or email them to me. " "https://github.com/vednoc/dark-whatsapp";
  }

  body ._1qNwV h1 + div[class]::after
  {
    display: block;
    font-size: 16px;
    margin-top: 16px;
    padding-top: 16px;
    content: "Dark-WhatsApp USo-Lite v2.2.2";
    border-top: 1px solid #2c313a;
  }

  body ._1qNwV ._3ZVgT
  {
    background-color: #2c313a !important;
  }

  body .IMBOA
  {
    margin-top: 16px !important;
  }

  body ._2a2hS
  {
    background-color: #2c313a !important;
  }

  body span[title *= "typing..."],
    body ._2ZAIy
  {
    color: #7289da !important;
  }

  .matched-text:not(#z)
  {
    color: #7289da !important;
  }

  .matched-mention span,
    [data-mention-jid] span
  {
    color: #7289da !important;
  }

  .matched-mention:hover span,
    [data-mention-jid]:hover span
  {
    text-decoration: underline !important;
  }

  body ._1Zo-R
  {
    border-color: #a1a1a1 !important;
    background-color: #252a33 !important;
  }

  body ._15wNI
  {
    border-color: #7289da !important;
    background-color: #7289da !important;
  }

  body ._3j8Pd path:not([fill = "#009588"])
  {
    fill-opacity: 0.55;
  }

  body ._3j8Pd.GPmgF,
    body ._3j8Pd.GPmgf
  {
    background-color: #2c313a !important;
  }

  body ._3j8Pd.GPmgF [data-icon] path,
    body ._3j8Pd.GPmgf [data-icon] path
  {
    fill-opacity: 1 !important;
  }

  body ._10YBz,
    body ._3UAb1
  {
    color: #e9e9e9 !important;
    background-color: #1f232a !important;
    opacity: 0.75;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  body ._10YBz svg path,
    body ._3UAb1 svg path
  {
    fill: #e9e9e9 !important;
  }

  body svg[width = "18"][height = "18"] circle,
    body svg[width = "20"][height = "20"] circle
  {
    stroke: #859900;
  }

  body svg[width = "34"][height = "34"] circle
  {
    stroke: #a1a1a1;
  }

  body ._1JS2G
  {
    color: #e9e9e9 !important;
    background-color: rgba(25,25,25,0.502) !important;
    border-radius: 0 !important;
  }

  body #group-invite-link-anchor
  {
    color: #7289da !important;
  }

  .OZVc4 ._3N5w5::-webkit-slider-runnable-track
  {
    background-color: transparent !important;
  }

  .OZVc4 ._3N5w5::-moz-range-progress,
    .OZVc4 ._3N5w5::-moz-range-track
  {
    background-color: transparent !important;
  }

  .OZVc4 ._2bTRm ._2ZXtj
  {
    background-color: #7289da !important;
  }

  ._3Nf6W
  {
    background-color: transparent !important;
  }

  ._3Nf6W + ::-moz-range-progress,
    ._3Nf6W + ::-moz-range-thumb
  {
    background-color: #7289da !important;
  }

  ._3Nf6W + ::-moz-range-track
  {
    height: 2px;
    background-color: #808080 !important;
  }

  ._1p-0O
  {
    box-shadow: 0 4px 12px 2px rgba(0,0,0,0.208) !important;
  }

  #app > div::after
  {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: unset;
    width: unset;
    background-image: url("https://raw.githubusercontent.com/vednoc/dark-whatsapp/develop/images/bg-blur-high.jpg");
    background-size: cover;
    background-color: #252a33 !important;
  }

  #app > div .app
  {
    background-color: #1f232a !important;
    background-image: none;
  }

  @media (min-width: 1441px)
  {
    #app > div .app
    {
      border: 1px solid #2c313a;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.145);
    }

    #app > div .app,
      ._11ARv
    {
      width: calc(100% - 38px);
      max-width: 1396px;
    }
  }

  #app > div .app.three > ._37f_5
  {
    width: calc(100% + 1px);
  }

  #app > div .app ._2rI9W
  {
    margin-right: -1px;
  }

  ._3BYwr,
    ._3RWII,
    ._3p0T6,
    ._1i7uJ
  {
    border-radius: 50% !important;
    background-color: #1f232a !important;
  }

  ._3BYwr > img,
    ._3RWII > img,
    ._3p0T6 > img,
    ._1i7uJ > img
  {
    border-radius: 50% !important;
  }

  .emojik
  {
    transition: transform 0.15s ease;
  }

  .emojik:not(:hover):not(:focus):not(.selected)
  {
    filter: opacity(0.8);
  }

  .emojik:hover,
    .emojik:focus,
    .emojik.selected
  {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: none !important;
  }

  .emojik.wa.b0
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/0.webp");
  }

  .emojik.wa.b1
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/1.webp");
  }

  .emojik.wa.b2
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/2.webp");
  }

  .emojik.wa.b3
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/3.webp");
  }

  .emojik.wa.b4
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/4.webp");
  }

  .emojik.wa.b5
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/5.webp");
  }

  .emojik.wa.b6
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/6.webp");
  }

  .emojik.wa.b7
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/7.webp");
  }

  .emojik.wa.b8
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/8.webp");
  }

  .emojik.wa.b9
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/9.webp");
  }

  .emojik.wa.b10
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/10.webp");
  }

  .emojik.wa.b11
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/11.webp");
  }

  .emojik.wa.b12
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/12.webp");
  }

  .emojik.wa.b13
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/13.webp");
  }

  .emojik.wa.b14
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/14.webp");
  }

  .emojik.wa.b15
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/15.webp");
  }

  .emojik.wa.b16
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/16.webp");
  }

  .emojik.wa.b17
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/17.webp");
  }

  .emojik.wa.b18
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/18.webp");
  }

  .emojik.wa.b19
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/19.webp");
  }

  .emojik.wa.b20
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/20.webp");
  }

  .emojik.wa.b21
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/21.webp");
  }

  .emojik.wa.b22
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/22.webp");
  }

  .emojik.wa.b23
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/23.webp");
  }

  .emojik.wa.b24
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/24.webp");
  }

  .emojik.wa.b25
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/25.webp");
  }

  .emojik.wa.b26
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/26.webp");
  }

  .emojik.wa.b27
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/27.webp");
  }

  .emojik.wa.b28
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/28.webp");
  }

  .emojik.wa.b29
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/29.webp");
  }

  .emojik.wa.b30
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/30.webp");
  }

  .emojik.wa.b31
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/31.webp");
  }

  .emojik.wa.b32
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/32.webp");
  }

  .emojik.wa.b33
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/33.webp");
  }

  .emojik.wa.b34
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/34.webp");
  }

  .emojik.wa.b35
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/35.webp");
  }

  .emojik.wa.b36
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/36.webp");
  }

  .emojik.wa.b37
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/37.webp");
  }

  .emojik.wa.b38
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/38.webp");
  }

  .emojik.wa.b39
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/39.webp");
  }

  .emojik.wa.b40
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/40.webp");
  }

  .emojik.wa.b41
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/41.webp");
  }

  .emojik.wa.b42
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/42.webp");
  }

  .emojik.wa.b43
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/43.webp");
  }

  .emojik.wa.b44
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/44.webp");
  }

  .emojik.wa.b45
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/45.webp");
  }

  .emojik.wa.b46
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/46.webp");
  }

  .emojik.wa.b47
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/47.webp");
  }

  .emojik.wa.b48
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/48.webp");
  }

  .emojik.wa.b49
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/49.webp");
  }

  .emojik.wa.b50
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/50.webp");
  }

  .emojik.wa.b51
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/51.webp");
  }

  .emojik.wa.b52
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/52.webp");
  }

  .emojik.wa.b53
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/53.webp");
  }

  .emojik.wa.b54
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/54.webp");
  }

  .emojik.wa.b55
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/55.webp");
  }

  .emojik.wa.b56
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/56.webp");
  }

  .emojik.wa.b57
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/57.webp");
  }

  .emojik.wa.b58
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/58.webp");
  }

  .emojik.wa.b59
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/59.webp");
  }

  .emojik.wa.b60
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/60.webp");
  }

  .emojik.wa.b61
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/61.webp");
  }

  .emojik.wa.b62
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/62.webp");
  }

  .emojik.wa.b63
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/63.webp");
  }

  .emojik.wa.b64
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/64.webp");
  }

  .emojik.wa.b65
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/65.webp");
  }

  .emojik.wa.b66
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/66.webp");
  }

  .emojik.wa.b67
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/67.webp");
  }

  .emojik.wa.b68
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/68.webp");
  }

  .emojik.wa.b69
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/69.webp");
  }

  .emojik.wa.b70
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/70.webp");
  }

  .emojik.wa.b71
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/71.webp");
  }

  .emojik.wa.b72
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/72.webp");
  }

  .emojik.wa.b73
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/73.webp");
  }

  .emojik.wa.b74
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/74.webp");
  }

  .emojik.wa.b75
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/75.webp");
  }

  .emojik.wa.b76
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/76.webp");
  }

  .emojik.wa.b77
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/77.webp");
  }

  .emojik.wa.b78
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/78.webp");
  }

  .emojik.wa.b79
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/79.webp");
  }

  .emojik.wa.b80
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/80.webp");
  }

  .emojik.wa.b81
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/81.webp");
  }

  .emojik.wa.b82
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/82.webp");
  }

  .emojik.wa.b83
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/83.webp");
  }

  .emojik.wa.b84
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/84.webp");
  }

  .emojik.wa.b85
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/85.webp");
  }

  .emojik.wa.b86
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/86.webp");
  }

  .emojik.wa.b87
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/87.webp");
  }

  .emojik.wa.b88
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/88.webp");
  }

  .emojik.wa.b89
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/89.webp");
  }

  .emojik.wa.b90
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/90.webp");
  }

  .emojik.wa.b91
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/91.webp");
  }

  .emojik.wa.b92
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/92.webp");
  }

  .emojik.wa.b93
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/93.webp");
  }

  .emojik.wa.b94
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/94.webp");
  }

  .emojik.wa.b95
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/95.webp");
  }

  .emojik.wa.b96
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/96.webp");
  }

  .emojik.wa.b97
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/97.webp");
  }

  .emojik.wa.b98
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/98.webp");
  }

  .emojik.wa.b99
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/99.webp");
  }

  .emojik.wa.b100
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/100.webp");
  }

  .emojik.wa.b101
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/101.webp");
  }

  .emojik.wa.b102
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/102.webp");
  }

  .emojik.wa.b103
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/103.webp");
  }

  .emojik.wa.b104
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/104.webp");
  }

  .emojik.wa.b105
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/105.webp");
  }

  .emojik.wa.b106
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/106.webp");
  }

  .emojik.wa.b107
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/107.webp");
  }

  .emojik.wa.b108
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/108.webp");
  }

  .emojik.wa.b109
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/109.webp");
  }

  .emojik.wa.b110
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/110.webp");
  }

  .emojik.wa.b111
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/111.webp");
  }

  .emojik.wa.b112
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/a/112.webp");
  }

  .emojik.apple.b0
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/0.webp");
  }

  .emojik.apple.b1
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/1.webp");
  }

  .emojik.apple.b2
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/2.webp");
  }

  .emojik.apple.b3
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/3.webp");
  }

  .emojik.apple.b4
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/4.webp");
  }

  .emojik.apple.b5
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/5.webp");
  }

  .emojik.apple.b6
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/6.webp");
  }

  .emojik.apple.b7
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/7.webp");
  }

  .emojik.apple.b8
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/8.webp");
  }

  .emojik.apple.b9
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/9.webp");
  }

  .emojik.apple.b10
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/10.webp");
  }

  .emojik.apple.b11
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/11.webp");
  }

  .emojik.apple.b12
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/12.webp");
  }

  .emojik.apple.b13
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/13.webp");
  }

  .emojik.apple.b14
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/14.webp");
  }

  .emojik.apple.b15
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/15.webp");
  }

  .emojik.apple.b16
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/16.webp");
  }

  .emojik.apple.b17
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/17.webp");
  }

  .emojik.apple.b18
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/18.webp");
  }

  .emojik.apple.b19
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/19.webp");
  }

  .emojik.apple.b20
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/20.webp");
  }

  .emojik.apple.b21
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/21.webp");
  }

  .emojik.apple.b22
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/22.webp");
  }

  .emojik.apple.b23
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/23.webp");
  }

  .emojik.apple.b24
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/24.webp");
  }

  .emojik.apple.b25
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/25.webp");
  }

  .emojik.apple.b26
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/26.webp");
  }

  .emojik.apple.b27
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/27.webp");
  }

  .emojik.apple.b28
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/28.webp");
  }

  .emojik.apple.b29
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/29.webp");
  }

  .emojik.apple.b30
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/30.webp");
  }

  .emojik.apple.b31
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/31.webp");
  }

  .emojik.apple.b32
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/32.webp");
  }

  .emojik.apple.b33
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/33.webp");
  }

  .emojik.apple.b34
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/34.webp");
  }

  .emojik.apple.b35
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/35.webp");
  }

  .emojik.apple.b36
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/36.webp");
  }

  .emojik.apple.b37
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/37.webp");
  }

  .emojik.apple.b38
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/38.webp");
  }

  .emojik.apple.b39
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/39.webp");
  }

  .emojik.apple.b40
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/40.webp");
  }

  .emojik.apple.b41
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/41.webp");
  }

  .emojik.apple.b42
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/42.webp");
  }

  .emojik.apple.b43
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/43.webp");
  }

  .emojik.apple.b44
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/44.webp");
  }

  .emojik.apple.b45
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/45.webp");
  }

  .emojik.apple.b46
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/46.webp");
  }

  .emojik.apple.b47
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/47.webp");
  }

  .emojik.apple.b48
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/48.webp");
  }

  .emojik.apple.b49
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/49.webp");
  }

  .emojik.apple.b50
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/50.webp");
  }

  .emojik.apple.b51
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/51.webp");
  }

  .emojik.apple.b52
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/52.webp");
  }

  .emojik.apple.b53
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/53.webp");
  }

  .emojik.apple.b54
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/54.webp");
  }

  .emojik.apple.b55
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/55.webp");
  }

  .emojik.apple.b56
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/56.webp");
  }

  .emojik.apple.b57
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/57.webp");
  }

  .emojik.apple.b58
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/58.webp");
  }

  .emojik.apple.b59
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/59.webp");
  }

  .emojik.apple.b60
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/60.webp");
  }

  .emojik.apple.b61
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/61.webp");
  }

  .emojik.apple.b62
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/62.webp");
  }

  .emojik.apple.b63
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/63.webp");
  }

  .emojik.apple.b64
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/64.webp");
  }

  .emojik.apple.b65
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/65.webp");
  }

  .emojik.apple.b66
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/66.webp");
  }

  .emojik.apple.b67
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/67.webp");
  }

  .emojik.apple.b68
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/68.webp");
  }

  .emojik.apple.b69
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/69.webp");
  }

  .emojik.apple.b70
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/70.webp");
  }

  .emojik.apple.b71
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/71.webp");
  }

  .emojik.apple.b72
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/72.webp");
  }

  .emojik.apple.b73
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/73.webp");
  }

  .emojik.apple.b74
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/74.webp");
  }

  .emojik.apple.b75
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/75.webp");
  }

  .emojik.apple.b76
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/76.webp");
  }

  .emojik.apple.b77
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/77.webp");
  }

  .emojik.apple.b78
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/78.webp");
  }

  .emojik.apple.b79
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/79.webp");
  }

  .emojik.apple.b80
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/80.webp");
  }

  .emojik.apple.b81
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/81.webp");
  }

  .emojik.apple.b82
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/82.webp");
  }

  .emojik.apple.b83
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/83.webp");
  }

  .emojik.apple.b84
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/84.webp");
  }

  .emojik.apple.b85
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/85.webp");
  }

  .emojik.apple.b86
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/86.webp");
  }

  .emojik.apple.b87
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/87.webp");
  }

  .emojik.apple.b88
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/88.webp");
  }

  .emojik.apple.b89
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/89.webp");
  }

  .emojik.apple.b90
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/90.webp");
  }

  .emojik.apple.b91
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/91.webp");
  }

  .emojik.apple.b92
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/92.webp");
  }

  .emojik.apple.b93
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/93.webp");
  }

  .emojik.apple.b94
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/94.webp");
  }

  .emojik.apple.b95
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/95.webp");
  }

  .emojik.apple.b96
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/96.webp");
  }

  .emojik.apple.b97
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/97.webp");
  }

  .emojik.apple.b98
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/98.webp");
  }

  .emojik.apple.b99
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/99.webp");
  }

  .emojik.apple.b100
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/100.webp");
  }

  .emojik.apple.b101
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/101.webp");
  }

  .emojik.apple.b102
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/102.webp");
  }

  .emojik.apple.b103
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/103.webp");
  }

  .emojik.apple.b104
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/104.webp");
  }

  .emojik.apple.b105
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/105.webp");
  }

  .emojik.apple.b106
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/106.webp");
  }

  .emojik.apple.b107
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/107.webp");
  }

  .emojik.apple.b108
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/108.webp");
  }

  .emojik.apple.b109
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/109.webp");
  }

  .emojik.apple.b110
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/110.webp");
  }

  .emojik.apple.b111
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/111.webp");
  }

  .emojik.apple.b112
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/112.webp");
  }

  .emojik.apple.b113
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/113.webp");
  }

  .emojik.apple.b114
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/114.webp");
  }

  .emojik.apple.b115
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/115.webp");
  }

  .emojik.apple.b116
  {
    background-image: url("https://raw.githubusercontent.com/vednoc/wae/master/i/116.webp");
  }

  ._342qq._1mTBR
  {
    border-radius: 4px !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  ._342qq._1mTBR ._2avTY
  {
    background-color: #252a33 !important;
    box-shadow: inset 0 -1px #2c313a;
  }

  ._342qq._1mTBR ._2avTY [style]
  {
    background-color: #7289da !important;
  }

  ._342qq._1mTBR .QChXd
  {
    background-color: #1f232a !important;
  }

  ._342qq._1mTBR .QChXd [data-tab]
  {
    background-color: #1f232a !important;
  }

  ._342qq._1mTBR .QChXd [data-tab] label
  {
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
    box-shadow: inset 0 0 0 1px #2c313a;
  }

  ._342qq._1mTBR .QChXd [data-tab] input
  {
    color: #e9e9e9 !important;
  }

  ._342qq._1mTBR .QChXd ._2lKjK
  {
    color: #a1a1a1 !important;
  }

  ._342qq._1mTBR + [data-animate-dropdown-nib]
  {
    border-bottom: 1px solid #2c313a;
    border-right: 1px solid #2c313a;
    background-color: #1f232a !important;
    box-shadow: none;
  }

  .overlay
  {
    background-color: transparent !important;
  }

  .overlay::before
  {
    content: "";
    z-index: -1;
    opacity: 0.81;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #1f232a !important;
  }

  .overlay > .cGLoy,
    .overlay .s4BtI
  {
    background-color: #1f232a !important;
    box-shadow: 0 1px #2c313a;
  }

  .overlay > .cGLoy div,
    .overlay .s4BtI div
  {
    background-color: transparent !important;
  }

  .overlay > .cGLoy .xD91K,
    .overlay .s4BtI .xD91K
  {
    color: #a1a1a1 !important;
  }

  .overlay > .cGLoy ._3H4MS,
    .overlay .s4BtI ._3H4MS
  {
    color: #e9e9e9 !important;
  }

  .overlay > .cGLoy ._2UaNq._3Ff9z:not(#z):not(#x):hover,
    .overlay .s4BtI ._2UaNq._3Ff9z:not(#z):not(#x):hover,
    .overlay > .cGLoy ._2UaNq._1k-OW:not(#z):not(#x):hover,
    .overlay .s4BtI ._2UaNq._1k-OW:not(#z):not(#x):hover
  {
    background-color: transparent !important;
  }

  .overlay .I72vi
  {
    background-color: #252a33 !important;
    overflow: hidden;
    box-shadow: 0 1px #2c313a;
  }

  .overlay .I72vi > div:not(#z)
  {
    background-color: transparent !important;
    border: none !important;
  }

  .overlay .I72vi > div:not(#z) > div
  {
    background-color: #2c313a !important;
  }

  .overlay ._21bWq
  {
    background-color: #252a33 !important;
  }

  .overlay ._3yth3:not(#z)
  {
    background-color: #1f232a !important;
    box-shadow: inset 0 0 0 1px #2c313a, 0 2px 4px rgba(0,0,0,0.145);
  }

  .overlay ._3yth3:not(#z):hover
  {
    background-color: #252a33 !important;
  }

  .overlay .X5OiD
  {
    background-color: #2c313a !important;
  }

  .overlay ._3qb2N,
    .overlay .JmH7x
  {
    color: #a1a1a1 !important;
  }

  .overlay ._2yVvV
  {
    color: #e9e9e9 !important;
  }

  .overlay [role = "button"]._23_1v
  {
    color: #a1a1a1 !important;
  }

  .overlay [role = "button"]._23_1v:hover
  {
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
    box-shadow: none;
  }

  .overlay [role = "button"]._3PQ7V
  {
    color: #fff !important;
    background-color: #7289da !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
    transition: 0.15s ease;
  }

  .overlay [role = "button"]._3PQ7V:hover
  {
    opacity: 0.8;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv)
  {
    border: 1px solid #2c313a;
    border-radius: 4px;
    background-color: #1f232a !important;
    box-shadow: 0 4px 8px 2px rgba(0,0,0,0.145);
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._13HPh
  {
    color: #e9e9e9 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._2VDPW
  {
    background-color: #252a33 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa
  {
    background-color: transparent !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > header
  {
    border-bottom: 1px solid #2c313a;
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa .r7sRK
  {
    color: #7289da !important;
    background-color: transparent !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa ._2UaNq
  {
    color: #e9e9e9 !important;
    background-color: transparent !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > span > div[style]
  {
    border-top: 1px solid #2c313a;
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) ._1KDYa > span > div[style] [role = "button"]
  {
    background-color: #7289da !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) span[role = "button"]
  {
    color: #7289da !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) hr
  {
    border-color: #2c313a !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv) hr + div
  {
    color: #e9e9e9 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE
  {
    padding: 0 !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE > .aymnx
  {
    padding: 22px 24px 20px !important;
  }

  .overlay [data-animate-modal-popup]:not(._2ILbv)._3RiLE .AZ3xD
  {
    margin: 0;
  }

  .overlay [data-animate-modal-body] ._1BdTk
  {
    border-left: none;
  }

  .overlay [data-animate-modal-body] ._3979j
  {
    background-color: transparent !important;
  }

  .overlay [data-animate-modal-body] ._1DKwn
  {
    background-color: #252a33 !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  .overlay [data-animate-modal-body] ._2HyTU,
    .overlay [data-animate-modal-body] ._22aOT
  {
    min-height: 91px;
    background-color: #252a33 !important;
    box-shadow: inset 0 1px #2c313a;
  }

  .overlay ._1VwzF
  {
    background-color: transparent !important;
  }

  .overlay ._1VwzF ._1VI-m
  {
    color: #e9e9e9 !important;
  }

  .overlay ._1VwzF [role = "button"]
  {
    background-color: #7289da !important;
  }

  .overlay ._8icek
  {
    fill-opacity: 0.55;
  }

  .overlay ._2Vo52 .XOIaT
  {
    background-color: #252a33 !important;
  }

  .overlay ._2Vo52 ._1WSDe
  {
    color: #e9e9e9 !important;
  }

  .overlay ._2Vo52 ._3WFBR,
    .overlay ._2Vo52 .vJCph,
    .overlay ._2Vo52 ._2oG62
  {
    color: #a1a1a1 !important;
  }

  .overlay .WOXAS,
    .overlay ._1v8mQ
  {
    background-color: transparent !important;
    box-shadow: 0 1px #2c313a !important;
  }

  .fwByR
  {
    color: #7289da !important;
  }

  .overlay ._1wt6r,
    ._3Yulp,
    .bHCVK
  {
    color: #a1a1a1 !important;
  }

  .overlay ._3hnO5
  {
    border-color: #7289da !important;
  }

  .overlay ._1T8rb
  {
    color: #7289da !important;
    background-color: transparent !important;
  }

  .overlay .NWyjc.AZ3xD
  {
    margin: 16px;
  }

  ._2vOyW._26EsD .lz4Mo
  {
    color: #e9e9e9 !important;
  }

  [data-animate-status-v3-modal-background = "true"]
  {
    background-color: transparent !important;
  }

  [data-animate-status-v3-modal-background = "true"]::before
  {
    content: "";
    z-index: -1;
    opacity: 0.91;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #1f232a !important;
  }

  [data-animate-status-v3-modal-background = "true"] > div
  {
    background-color: #1f232a !important;
  }

  @media (min-width: 1441px)
  {
    [data-animate-status-v3-modal-background = "true"] > div
    {
      border-radius: 4px;
      border: 1px solid #2c313a;
    }
  }

  [data-animate-status-v3-modal-background = "true"] > div hr
  {
    opacity: 1;
    border: none;
    border-top: 1px solid #2c313a;
  }

  [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(1)
  {
    background-color: #252a33 !important;
    box-shadow: 1px 0 #2c313a;
  }

  @media (min-width: 1441px)
  {
    [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(1)
    {
      border-radius: 4px 0 0 4px;
    }
  }

  [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(1) .OEFaY
  {
    color: #a1a1a1 !important;
  }

  [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(1) ._26-u-
  {
    color: #e9e9e9 !important;
  }

  [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(2) .ojaNO
  {
    color: #a1a1a1 !important;
  }

  [data-animate-status-v3-modal-background = "true"] > div > div[class]:nth-child(2) svg[width][height] path
  {
    fill: transparent !important;
    stroke: #e9e9e9 !important;
  }

  [data-animate-status-v3-modal-background = "true"] > div ._2UaNq
  {
    border-top: none;
  }

  .QRsOy
  {
    background-color: #1f232a !important;
  }

  circle
  {
    stroke: #a1a1a1 !important;
  }

  circle._3yudO
  {
    stroke: #7289da !important;
  }

  ._2n0jo
  {
    border-color: #2c313a !important;
    background-color: #252a33 !important;
  }

  ._2n0jo ._1LdNS.cJP5q
  {
    border: none !important;
    outline: 4px solid #7289da;
  }

  ._2n0jo ._1LdNS:hover:not(.cJP5q):not(#spec)
  {
    outline: 4px solid #7289da !important;
  }

  span[class][data-icon] > svg > path
  {
    fill: #e9e9e9;
    transition: 0.15s ease;
  }

  span[class][data-icon]:hover > svg > path
  {
    opacity: 1;
    fill-opacity: 1 !important;
  }

  span[class][data-icon][data-icon*="logo-"] > svg > path
  {
    fill-opacity: 0.6 !important;
  }

  span[class][data-icon][data-icon*="logo-"] > svg > path:first-child
  {
    fill: #1f232a;
  }

  span[class][data-icon][data-icon*="logo-"] > svg > path:last-child
  {
    fill: #e9e9e9;
  }

  span[class][data-icon][data-icon="muted"] > svg > path,
    span[class][data-icon][data-icon="pinned"] > svg > path,
    span[class][data-icon][data-icon="status-image"] > svg > path,
    span[class][data-icon][data-icon="status-video"] > svg > path,
    span[class][data-icon][data-icon="status-gif"] > svg > path,
    span[class][data-icon][data-icon="status-vcard"] > svg > path,
    span[class][data-icon][data-icon="status-sticker"] > svg > path,
    span[class][data-icon][data-icon="status-document"] > svg > path,
    span[class][data-icon][data-icon="recalled-in"] > svg > path,
    span[class][data-icon][data-icon="recalled-out"] > svg > path
  {
    fill-opacity: 0.25 !important;
  }

  span[class][data-icon = "status-v3-unread"] path:last-child
  {
    fill: #7289da !important;
  }

  span[class][data-icon = "chat"] path
  {
    opacity: 1;
  }

  span[class][data-icon = "menu"] path
  {
    fill-opacity: 0.55;
  }

  span[class][data-icon = "back-blue"] path
  {
    fill: #268bd2 !important;
  }

  span[class][data-icon ^= "default-"] path:first-child
  {
    fill: #1f232a;
  }

  span[class][data-icon ^= "default-"] path:last-child
  {
    fill: #a1a1a1;
  }

  span[class][data-icon $= "-square"] path:first-child
  {
    fill: transparent;
  }

  span[class][data-icon ^= "business-"] path
  {
    fill: #a1a1a1;
  }

  span[class][data-icon = "audio-file"] path:first-child
  {
    fill: #df4b16;
  }

  span[class][data-icon = "audio-file"] path:last-child
  {
    fill: #252a33;
  }

  span[class][data-icon ^= "ptt-"] path:first-child
  {
    fill: #2c313a;
  }

  span[class][data-icon ^= "ptt-"] path:last-child
  {
    fill: #7289da;
  }

  span[class][data-icon = "status-ptt-blue"] path
  {
    fill: #7289da !important;
  }

  span[class][data-icon *= "-check"] path
  {
    fill: #a1a1a1 !important;
  }

  span[class][data-icon *= "-dblcheck"] path
  {
    fill: #a1a1a1 !important;
  }

  span[class][data-icon *= "-dblcheck-ack"] path,
    span[class].Ryz_m[data-icon *= "-dblcheck"] path,
    span[class]._3rqs1[data-icon *= "-dblcheck"] path,
    span[class]._33bww[data-icon *= "-dblcheck"] path,
    ._1t84_ span[class][data-icon *= "-dblcheck"] path
  {
    fill: #7289da !important;
  }

  span[class][data-icon *= "check"] path
  {
    fill-opacity: 1 !important;
  }

  span[class][data-icon = "exit"] path,
    span[class][data-icon = "thumbs-down"] path,
    span[class][data-icon = "delete-danger"] path,
    span[class][data-icon ^= "miss"] path
  {
    fill: #dc322f !important;
  }

  svg[width = "50"][height = "50"] > circle[fill]
  {
    stroke: #a1a1a1;
  }

  span[class][data-icon = "sticker-placeholder"] > svg > path
  {
    fill: #2c313a;
    fill-opacity: 0.6;
  }

  span[class][data-icon = "search"] path[fill-opacity = ".3"]
  {
    fill-opacity: 0.55;
  }

  span[class][data-icon = "checkbox-round-checked"] [fill = "#00BFA5"]
  {
    fill: #7289da !important;
  }

  span[class][data-icon = "checkbox-round-checked"] [fill = "#FFF"]
  {
    fill: #fff !important;
  }

  span[class][data-icon *= "status-ptt-green"] > svg > path
  {
    fill: #7289da;
  }

  span[class][data-icon = "star"] > svg > path,
    span[class][data-icon = "star-in"] > svg > path,
    span[class][data-icon = "star-light"] > svg > path
  {
    opacity: 1;
    fill: #7289da;
  }

  span[class][data-icon = "down"]
  {
    fill-opacity: 0.55;
  }

  div:not(#z)[style ^= "transform-origin:"]
  {
    border: 1px solid #2c313a;
    border-radius: 4px;
    background-color: #252a33 !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.208);
  }

  div:not(#z)[style ^= "transform-origin:"] ul > div
  {
    color: #e9e9e9 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] li._3VXiW
  {
    background-color: #2c313a !important;
  }

  div:not(#z)[style ^= "transform-origin:"] li > button span
  {
    color: #a1a1a1 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] li > button:hover span
  {
    color: #e9e9e9 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] li > div
  {
    color: #a1a1a1 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] li > div:hover
  {
    color: #e9e9e9 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] svg path[fill = "#5696ff"]
  {
    fill: #268bd2 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] svg path[fill = "#54c166"]
  {
    fill: #859900 !important;
  }

  div:not(#z)[style ^= "transform-origin:"] svg path[fill = "#ff7a6b"]
  {
    fill: #df4b16 !important;
  }

  div:not(#z)[style ^= "transform-origin:"]._1fRWV
  {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  div:not(#z)[style ^= "transform-origin:"]._1fRWV li
  {
    background-color: transparent !important;
  }

  div:not(#z)[style ^= "transform-origin:"]._1fRWV .Ijb1Q::after
  {
    box-shadow: 0 2px 4px rgba(0,0,0,0.145) !important;
  }

  div:not(#z)[style ^= "transform-origin:"]._1fRWV ._3Fjw5
  {
    color: #e9e9e9 !important;
    background-color: #2c313a !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  div:not(#z)[style ^= "transform-origin:"] > ul._3z3lc li._1sHYl
  {
    background-color: transparent !important;
  }

  div:not(#z)[style ^= "transform-origin:"] > ul._3z3lc > li:first-child
  {
    border-color: #2c313a !important;
  }

  div:not(#z)[style ^= "transform-origin:"] > ul._3z3lc + [data-animate-dropdown-nib]
  {
    border-bottom: 1px solid #2c313a;
    border-right: 1px solid #2c313a;
    bottom: -8px;
    background-color: #252a33 !important;
  }

  #side
  {
    background-color: #1f232a !important;
  }

  #side > header
  {
    border-bottom: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  #side > header [style *= "height: 40px"]
  {
    background-color: transparent !important;
  }

  #side > header + span[class] ._1puWZ,
    #side > header + span[class] ._2xikZ,
    #side > header + span[class] ._1sFYw,
    #side > header + span[class] ._2t3oV
  {
    border-bottom: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  #side > header + span[class] ._1puWZ *,
    #side > header + span[class] ._2xikZ *
  {
    color: #e5c512 !important;
  }

  #side > header + span[class] ._1puWZ [data-icon ^= "chevron-"] path,
    #side > header + span[class] ._2xikZ [data-icon ^= "chevron-"] path
  {
    fill: #e5c512;
  }

  #side > header + span[class] ._1puWZ [data-icon ^= "alert-"] path[fill ^= "#FFF"],
    #side > header + span[class] ._2xikZ [data-icon ^= "alert-"] path[fill ^= "#FFF"]
  {
    fill: #e5c512;
  }

  #side > header + span[class] ._1puWZ [data-icon ^= "alert-"] path[fill ^= "#FFB"],
    #side > header + span[class] ._2xikZ [data-icon ^= "alert-"] path[fill ^= "#FFB"]
  {
    fill: #252a33;
  }

  #side > header + span[class] ._1sFYw *
  {
    color: #268bd2 !important;
  }

  #side > header + span[class] ._1sFYw [data-icon ^= "chevron-"] path
  {
    fill: #268bd2 !important;
  }

  #side > header + span[class] ._1sFYw [data-icon ^= "alert-"] path[fill ^= "#FFF"]
  {
    fill: #268bd2;
  }

  #side > header + span[class] ._2t3oV *
  {
    color: #dc322f !important;
  }

  #side > header + span[class] ._2t3oV [data-icon ^= "chevron-"] path
  {
    fill: #dc322f !important;
  }

  #side > header + span[class] ._2t3oV [data-icon ^= "alert-"] path[fill ^= "#FFF"]
  {
    fill: #dc322f;
  }

  #side > header + span[class] ._1cvvW path
  {
    fill-opacity: 0.55;
  }

  div[class *= "ZP8RM"]
  {
    transition: 0.2s ease;
    border-bottom: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  div[class *= "ZP8RM"]._19OGD
  {
    background-color: #1f232a !important;
  }

  div[class *= "ZP8RM"]::after
  {
    content: none;
  }

  div[class *= "ZP8RM"] > div + label
  {
    border-radius: 4px !important;
    background-color: #1f232a !important;
  }

  div[class *= "ZP8RM"] > div + label:not(:focus-within)
  {
    box-shadow: inset 0 0 0 1px #2c313a;
  }

  div[class *= "ZP8RM"] > div + label input
  {
    color: #e9e9e9 !important;
    background-color: transparent !important;
  }

  div[class *= "ZP8RM"] > div + label:focus-within
  {
    background-color: transparent !important;
  }

  ._2HS9r
  {
    background-color: transparent !important;
  }

  div[class *= "ZP8RM"] ._183ES,
    div[class *= "ZP8RM"] ._201Bk
  {
    color: #a1a1a1 !important;
  }

  #side #pane-side
  {
    background-color: #252a33 !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class]
  {
    background-color: transparent !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class]:hover
  {
    background-color: rgba(85,85,85,0.082) !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class]._3mMX1
  {
    background-color: #2c313a !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class]::after,
    #side #pane-side [style *= "z-index"] > div > div[class] > div:last-child
  {
    border: none;
  }

  #side #pane-side [style *= "z-index"] > div > div[class] > div:last-child > div:first-child > div:first-child
  {
    color: #e9e9e9 !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class] > div:last-child > div:first-child > div:last-child
  {
    color: #a1a1a1 !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class] > div:last-child > div:last-child
  {
    color: #a1a1a1 !important;
  }

  #side #pane-side [style *= "z-index"] > div > div[class] > div:last-child strong
  {
    color: #a1a1a1 !important;
  }

  .P6z4j
  {
    color: #fff !important;
    background-color: #7289da !important;
  }

  #side #pane-side ._2xINO
  {
    height: 0;
  }

  #side .r7sRK
  {
    color: #7289da !important;
    background-color: transparent !important;
    box-shadow: 0 1px #2c313a;
  }

  ._2t4Ic .copyable-area:not(.overlay)
  {
    background-color: #252a33 !important;
  }

  ._2t4Ic .copyable-area header
  {
    height: unset;
    min-height: unset !important;
    border-bottom: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  ._1pYs5:not(#z)
  {
    margin: 0;
    padding-top: 4px;
    font-size: 18px;
    font-weight: 500;
  }

  ._2t4Ic .copyable-area header .kyJvR
  {
    height: 58px;
    color: #e9e9e9 !important;
  }

  ._2t4Ic .copyable-area header .kyJvR ._6xQdq
  {
    color: #e9e9e9 !important;
  }

  ._2t4Ic .copyable-area ._2LSbZ
  {
    background-color: transparent !important;
    box-shadow: none;
  }

  ._2t4Ic .copyable-area ._2LSbZ ._3he1q
  {
    color: #7289da !important;
  }

  ._2t4Ic .copyable-area ._2LSbZ ._3K9Sw
  {
    border-color: transparent !important;
  }

  ._5UNoc ._3hnO5
  {
    border-color: #7289da !important;
  }

  ._2UaNq
  {
    border-top: 1px solid #2c313a;
    background-color: transparent !important;
  }

  ._2UaNq::after
  {
    content: none !important;
  }

  ._2UaNq:hover:not(#z):not(._27Ppf)
  {
    background-color: rgba(85,85,85,0.063) !important;
  }

  ._2UaNq [style *= "height: 82px"]
  {
    background-color: transparent !important;
  }

  ._2UaNq ._2WP9Q
  {
    border-top: none !important;
  }

  ._2UaNq ._3H4MS
  {
    color: #e9e9e9 !important;
  }

  ._2UaNq .xD91K
  {
    color: #a1a1a1 !important;
  }

  ._2UaNq._30Q1W :not(#z)
  {
    color: #a1a1a1 !important;
  }

  ._2UaNq._3fAgu
  {
    border-top: none !important;
  }

  ._2UaNq._27Ppf
  {
    background-color: #2c313a !important;
  }

  ._2UaNq._27Ppf [style *= "height: 26px"]
  {
    background-color: #2c313a !important;
  }

  ._2t4Ic .copyable-area ._26JG5
  {
    border-bottom: 1px solid #2c313a;
    background-color: transparent !important;
    box-shadow: 0 -1px #2c313a;
  }

  ._2t4Ic .copyable-area ._26JG5:hover
  {
    background-color: rgba(85,85,85,0.063) !important;
  }

  ._2t4Ic .copyable-area ._26JG5::before
  {
    content: none;
  }

  ._2t4Ic .copyable-area ._26JG5 > div:last-child
  {
    border-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._26JG5 ._6xQdq
  {
    color: #e9e9e9 !important;
  }

  .wjdTm,
    ._2t4Ic .copyable-area ._1qWhd
  {
    color: #a1a1a1 !important;
  }

  ._2t4Ic .copyable-area ._1w-mX
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._1w-mX input
  {
    color: #e9e9e9 !important;
  }

  ._2t4Ic .copyable-area ._1w-mX ._39cGk
  {
    border-color: #2c313a !important;
  }

  ._2t4Ic .copyable-area ._1w-mX + ._1c8mz
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._1w-mX + ._1c8mz .r7sRK
  {
    color: #7289da !important;
    background-color: transparent !important;
  }

  .r7sRK:not(#z)
  {
    box-shadow: inset 0 1px #2c313a !important;
  }

  ._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._8-yzK
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._2DxRd,
    ._2t4Ic .copyable-area ._1w-mX + ._1c8mz ._2WP9Q
  {
    border-color: transparent !important;
  }

  ._1wt6r
  {
    color: #a1a1a1 !important;
  }

  ._2t4Ic .copyable-area ._1c8mz ._11p3Q,
    ._2t4Ic .copyable-area ._1c8mz ._8-yzK
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._1c8mz .r7sRK
  {
    color: #7289da !important;
    background-color: transparent !important;
  }

  ._3p0T6
  {
    background-color: #7289da !important;
  }

  ._3p0T6.w4k6i
  {
    background-color: transparent !important;
  }

  ._3p0T6.w4k6i path
  {
    fill-opacity: 0.55;
  }

  ._2t4Ic .copyable-area ._1c8mz ._2DxRd,
    ._2t4Ic .copyable-area ._1c8mz ._2WP9Q
  {
    border: none;
  }

  ._2t4Ic .copyable-area ._1WMT2::before
  {
    margin-top: -1px;
    left: 0;
    background-color: #2c313a !important;
  }

  ._2t4Ic .copyable-area ._1WMT2::after
  {
    content: none;
  }

  ._2t4Ic .copyable-area ._1WMT2._1lakC,
    ._2t4Ic .copyable-area ._1WMT2._2nA3s,
    ._2t4Ic .copyable-area ._1WMT2._2V_Wj
  {
    background-color: rgba(85,85,85,0.063) !important;
  }

  ._2t4Ic .copyable-area ._1WMT2 ._2V2qB,
    ._2t4Ic .copyable-area ._1WMT2 .jLybP::before
  {
    color: #a1a1a1 !important;
  }

  ._2t4Ic .copyable-area ._1WMT2 .tail,
    ._2t4Ic .copyable-area ._1WMT2 .tail > div[class]
  {
    border-radius: 7.5px !important;
  }

  ._2t4Ic .copyable-area ._1WMT2 .tail-container
  {
    display: none !important;
  }

  ._2t4Ic .copyable-area ._1WMT2 [style *= "height: 26px; width: 26px"]
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area #pane-side
  {
    background-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._2TLLH
  {
    border-color: transparent !important;
  }

  ._2t4Ic .copyable-area ._13U-5,
    ._3dwyT
  {
    color: #a1a1a1 !important;
  }

  ._2t4Ic .copyable-area ._1i7uJ
  {
    background-color: #2c313a !important;
  }

  ._2t4Ic .copyable-area ._2MoEz
  {
    color: #e9e9e9 !important;
  }

  ._7YAGC .copyable-area [style *= "height: 200px"] ._2EaHs
  {
    background-color: #252a33 !important;
  }

  ._7YAGC .copyable-area ._1drsQ
  {
    color: #e9e9e9 !important;
  }

  ._7YAGC .copyable-area ._2IwIk,
    ._7YAGC .copyable-area ._1goQ0
  {
    color: #a1a1a1 !important;
  }

  ._7YAGC .copyable-area ._3_-Si
  {
    padding: 0 15px;
  }

  ._7YAGC .copyable-area ._3_-Si > ._2x2XP
  {
    padding-right: 0;
  }

  ._7YAGC .copyable-area ._3_-Si > div
  {
    border-color: #2c313a !important;
  }

  ._7YAGC .copyable-area ._3_-Si span
  {
    color: #e9e9e9 !important;
  }

  ._7YAGC .copyable-area ._1ur1f
  {
    padding: 28px 15px 19px;
  }

  ._7YAGC .copyable-area ._2ZVEo
  {
    padding: 14px 15px 10px;
  }

  ._7YAGC .copyable-area ._2k1Z5
  {
    padding: 14px 15px 4px;
  }

  ._7YAGC .copyable-area ._3EN0l
  {
    padding: 14px 15px;
  }

  ._7YAGC .copyable-area .ujWpH
  {
    padding: 14px 15px;
  }

  ._7YAGC .copyable-area ._2nQ7u,
    ._7YAGC .copyable-area ._1goQ0
  {
    padding: 0;
  }

  ._7YAGC .copyable-area ._2nQ7u + div[class] > div
  {
    padding-top: 1px;
  }

  ._7YAGC .copyable-area ._2LSbZ._2j5ir
  {
    margin-bottom: unset;
  }

  ._7YAGC .copyable-area ._1tyVr
  {
    padding: 0 15px;
    width: auto;
  }

  ._7YAGC .copyable-area ._2h7Od path,
    ._7YAGC .copyable-area ._88RDg path
  {
    opacity: 0.55 !important;
  }

  ._7YAGC .copyable-area ._2h7Od:hover > span > svg > path,
    ._7YAGC .copyable-area ._88RDg:hover > span > svg > path
  {
    opacity: 1 !important;
    fill-opacity: 0.9 !important;
  }

  ._7YAGC .copyable-area ._2rGVQ
  {
    border-bottom: 1px solid #2c313a;
    background-color: transparent !important;
  }

  ._7YAGC .copyable-area ._2AJf5
  {
    background-color: transparent !important;
  }

  ._7YAGC .copyable-area ._2AJf5 span
  {
    color: #7289da !important;
  }

  ._7YAGC .copyable-area ._19xqi
  {
    background-color: transparent !important;
    box-shadow: 0 1px #2c313a;
  }

  ._7YAGC .copyable-area ._3XHR-
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
    background-color: transparent !important;
  }

  ._7YAGC .copyable-area ._3XHR- span
  {
    color: inherit;
  }

  ._7YAGC .copyable-area .rK2ei:not(._1c8mz):not(#z):not(#x) ._2UaNq:hover
  {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  ._7YAGC .copyable-area .rK2ei:not(._1c8mz):not(#z):not(#x) ._2UaNq._27Ppf:hover
  {
    background-color: #2c313a !important;
  }

  ._7YAGC .copyable-area ._2WP9Q
  {
    border: none;
  }

  ._7YAGC .copyable-area ._3dwyT
  {
    color: #a1a1a1 !important;
  }

  ._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq._3sA1g:hover,
    ._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq._3mMX1,
    ._7YAGC .copyable-area [style]:not(#z):not(#x) > div > ._2UaNq.hover
  {
    background-color: rgba(85,85,85,0.063) !important;
  }

  ._7YAGC .copyable-area span[title] > span[dir]
  {
    color: #e9e9e9 !important;
  }

  ._0LqQ
  {
    color: #a1a1a1 !important;
  }

  ._7YAGC .copyable-area .BfrqJ > header._3jHKU
  {
    height: 59px;
    background-color: #252a33 !important;
    box-shadow: inset 0 -1px #2c313a;
  }

  ._7YAGC .copyable-area .BfrqJ > header._3jHKU div
  {
    color: #e9e9e9 !important;
  }

  ._3jHKU
  {
    z-index: 999 !important;
  }

  ._7YAGC .copyable-area ._2XHj8
  {
    background-color: #252a33 !important;
    box-shadow: inset 0 -1px #2c313a;
  }

  ._7YAGC .copyable-area ._2XHj8 span
  {
    color: #e9e9e9 !important;
  }

  ._7YAGC .copyable-area [data-active-tab]
  {
    border-bottom: 1px solid #2c313a;
    background-color: #1f232a !important;
  }

  ._7YAGC .copyable-area [data-active-tab] button
  {
    color: #a1a1a1 !important;
  }

  ._7YAGC .copyable-area [data-active-tab] button:hover
  {
    background-color: #252a33 !important;
  }

  ._7YAGC .copyable-area [data-active-tab] button._3caqI
  {
    color: #e9e9e9 !important;
  }

  ._7YAGC .copyable-area [data-active-tab]::before
  {
    margin-bottom: -1px;
    height: 1px;
    background-color: #268bd2 !important;
  }

  ._2Ji5m
  {
    border-color: #252a33 !important;
  }

  ._1mseJ ._3wYPn
  {
    border-left: 1px solid #2c313a;
  }

  #main
  {
    background-color: #1f232a !important;
  }

  [data-asset-chat-background]
  {
    opacity: 1 !important;
    filter: invert(0.6) opacity(0.1);
    background: url("https://web.whatsapp.com/img/bg-chat-tile_9e8a2898faedb7db9bf5638405cf81ae.png");;
  }

  #main > header
  {
    border-right: none;
    border-bottom: 1px solid #2c313a;
    border-color: #2c313a !important;
    background-color: #252a33 !important;
  }

  #main > header::after
  {
    content: none;
  }

  #main > header [style *= "height: 40px"]
  {
    background-color: transparent !important;
  }

  #main > header [title]
  {
    color: #e9e9e9 !important;
  }

  #main > header > div:nth-child(2) > div:nth-child(2) span[title]
  {
    color: #a1a1a1 !important;
  }

  #main ._3SYkD > div
  {
    border-bottom: 1px solid #2c313a;
    border-left: 1px solid #2c313a;
    background-color: #252a33;
  }

  #main ._3SYkD ._6xQdq,
    #main ._3SYkD ._3GIEC
  {
    color: #e9e9e9 !important;
  }

  #main ._3SYkD ._3D8gv
  {
    color: #a1a1a1 !important;
  }

  #main ._2sOZc
  {
    background-color: #252a33 !important;
    box-shadow: inset 0 0 0 1px #2c313a, 0 2px 4px rgba(0,0,0,0.145);
  }

  #main ._2sOZc svg circle
  {
    stroke: #859900;
  }

  #main .a7otO
  {
    opacity: 0.95;
    letter-spacing: 0;
    font-weight: 600;
    text-shadow: none;
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145), inset 0 0 0 1px #2c313a, inset 0 -3px #2c313a;
  }

  #main .a7otO.S-bQb
  {
    color: #df4b16 !important;
  }

  #main .a7otO:not(.tail)
  {
    color: #e9e9e9 !important;
  }

  #main ._3KRbU
  {
    background-color: #252a33 !important;
    transition: 0.15s ease;
    box-shadow: inset 0 0 0 1px #2c313a, 0 4px 8px rgba(0,0,0,0.145);
  }

  #main ._3KRbU:hover
  {
    background-color: #2c313a !important;
  }

  #main ._3KRbU .P6z4j
  {
    color: #fff !important;
    background-color: #7289da !important;
  }

  #main .copyable-area > div[tabindex]
  {
    border-color: #2c313a !important;
  }

  #main .copyable-area > div[tabindex] ._1ays2
  {
    display: flex !important;
    flex-direction: column !important;
  }

  #main .copyable-area > div[tabindex]._2AqZl
  {
    background-color: transparent !important;
  }

  #main .copyable-area > div[tabindex]._2AqZl [class *= "message-"]
  {
    position: relative;
  }

  .qTFAl
  {
    z-index: 999 !important;
  }

  .qTFAl::before
  {
    content: "";
    opacity: 0.08;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .qTFAl:hover,
    .qTFAl._3Z2tD
  {
    background-color: transparent !important;
  }

  .qTFAl:hover::before,
    .qTFAl._3Z2tD::before
  {
    background-color: #7289da !important;
  }

  .qTFAl._21W00::before
  {
    background-color: transparent !important;
  }

  #main .copyable-area > div[tabindex]._2AqZl ._15wNI
  {
    border-color: #7289da !important;
    background-color: #7289da !important;
  }

  #main .copyable-area > div[tabindex]._2AqZl ._15wNI div
  {
    border-color: #fff !important;
  }

  ._3f5U8 path,
    ._3MU5v path,
    ._2-qoA path
  {
    opacity: 0.55 !important;
  }

  ._3f5U8:disabled path,
    ._3MU5v:disabled path,
    ._2-qoA:disabled path
  {
    fill: #a1a1a1 !important;
    opacity: 0.25 !important;
  }

  ._3f5U8:hover > span > svg > path,
    ._3MU5v:hover > span > svg > path,
    ._2-qoA:hover > span > svg > path
  {
    opacity: 1 !important;
    fill-opacity: 0.9 !important;
  }

  ._8fE-g
  {
    color: #a1a1a1 !important;
  }

  #main .copyable-area > div[tabindex] ._3Xx0y
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
    background-color: #252a33 !important;
  }

  #main .copyable-area > div[tabindex] ._3Xx0y > span
  {
    background-color: #2c313a !important;
  }

  #main .copyable-area > div[tabindex] a[title] > ._1mrMQ
  {
    color: #e9e9e9 !important;
    background-color: #1f232a !important;
  }

  #main .copyable-area > div[tabindex] a[title] + div,
    #main .copyable-area > div[tabindex] a[title] + div > span::before
  {
    color: #a1a1a1 !important;
  }

  #main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(1) span
  {
    color: #e9e9e9 !important;
  }

  #main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(2) span
  {
    color: #a1a1a1 !important;
  }

  #main .copyable-area > div[tabindex] ._1SsXF div > div:nth-child(3) span
  {
    color: #e9e9e9 !important;
  }

  #main .copyable-area > div[tabindex] ._2v02G,
    #main .copyable-area > div[tabindex] ._3uHCS
  {
    color: #a1a1a1 !important;
  }

  #main .copyable-area > div[tabindex] ._2v02G [data-icon] path,
    #main .copyable-area > div[tabindex] ._3uHCS [data-icon] path
  {
    fill: #a1a1a1;
  }

  ._1Jc9f,
    ._3THW4
  {
    color: #7289da !important;
  }

  ._1PENu
  {
    border-color: rgba(136,136,136,0.188) !important;
  }

  ._1PENu [role = "button"]
  {
    color: #e9e9e9 !important;
  }

  ._1mrMQ
  {
    background-color: #1f232a !important;
  }

  ._1o0MN
  {
    color: #a1a1a1 !important;
  }

  .HNuTV,
    ._3qblR,
    ._1SsXF
  {
    background-color: #1f232a !important;
  }

  ._3_nIn
  {
    background-color: rgba(85,85,85,0.063) !important;
  }

  a[href][target = "_blank"] > *,
    ._2Lp2x > *
  {
    color: #a1a1a1 !important;
  }

  a[href][target = "_blank"] > :first-child,
    ._2Lp2x > :first-child,
    a[href][target = "_blank"] > :last-child,
    ._2Lp2x > :last-child
  {
    color: #e9e9e9 !important;
  }

  ._1ikYm div[style *= "base64"]
  {
    filter: none !important;
  }

  ._1ikYm ._2LRBk
  {
    color: #e9e9e9 !important;
  }

  ._1ikYm ._3fnHB
  {
    color: #a1a1a1 !important;
  }

  .L4M2f,
    ._1d0W1
  {
    border-color: #1f232a !important;
    background-color: transparent !important;
  }

  ._3ZVco
  {
    color: #e9e9e9 !important;
  }

  .message-in > div:not(.a81-s),
    .message-out > div:not(.a81-s)
  {
    box-shadow: 0 1px 0.5px rgba(0,0,0,0.145) !important;
  }

  .message-in > div:not(.a81-s) > div,
    .message-out > div:not(.a81-s) > div
  {
    box-shadow: none !important;
  }

  .message-in .tail > .tail-container,
    .message-out .tail > .tail-container
  {
    width: unset;
    height: unset;
    border: 6px solid transparent;
    background: none !important;
  }

  .message-in [data-pre-plain-text] + div *,
    .message-out [data-pre-plain-text] + div *
  {
    color: #a1a1a1 !important;
  }

  .message-in._26GKj ._2Nkc4:not(#z),
    .message-out._26GKj ._2Nkc4:not(#z)
  {
    background: none !important;
  }

  .message-in .a81-s ._3Mf7Z,
    .message-out .a81-s ._3Mf7Z
  {
    background-color: #383d46 !important;
    box-shadow: 0 1px rgba(0,0,0,0.145) !important;
  }

  .message-in .a81-s ._3qAvH,
    .message-out .a81-s ._3qAvH
  {
    color: #a1a1a1 !important;
    box-shadow: 0 1px rgba(0,0,0,0.145) !important;
  }

  .message-in .a81-s ._3qAvH div,
    .message-out .a81-s ._3qAvH div
  {
    color: inherit;
  }

  .message-in .a81-s :not(.tail) > div > ._2Hp95._1X6iJ ._3Mf7Z,
    .message-out .a81-s :not(.tail) > div > ._2Hp95._1X6iJ ._3Mf7Z
  {
    border-radius: 7.5px;
  }

  .message-in ._1lxsr,
    .message-out ._1lxsr,
    .message-in ._3MYI2,
    .message-out ._3MYI2
  {
    color: #a1a1a1 !important;
  }

  .message-in [style *= "height: 55px"],
    .message-out [style *= "height: 55px"]
  {
    background-color: #1f232a !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  .message-in [style *= "height: 55px"] svg path[fill = "#DFE5E7"],
    .message-out [style *= "height: 55px"] svg path[fill = "#DFE5E7"]
  {
    fill: transparent !important;
  }

  .message-in.velocity-animating,
    .message-out.velocity-animating
  {
    opacity: 0.4;
  }

  .message-in div[style *= "width"][style *= "height"] + .iVt71,
    .message-out div[style *= "width"][style *= "height"] + .iVt71,
    .message-in div[style *= "width"][style *= "height"] + ._3hsuL,
    .message-out div[style *= "width"][style *= "height"] + ._3hsuL
  {
    padding: 2px 5px;
    border-radius: 7.5px;
    background-color: #252a33 !important;
  }

  .message-in .video-thumb ._3_IKd,
    .message-out .video-thumb ._3_IKd
  {
    padding: 2px 5px;
    border-radius: 7.5px;
    color: #e9e9e9 !important;
    background-color: #1f232a !important;
  }

  .message-in .video-thumb + div > ._3MYI2,
    .message-out .video-thumb + div > ._3MYI2
  {
    padding: 2px 5px;
    border-radius: 7.5px;
    color: #e9e9e9 !important;
    background-color: #1f232a !important;
  }

  ._2HHbr
  {
    color: #a1a1a1 !important;
  }

  .message-in ._2rg5w._3EQsG,
    .message-out ._2rg5w._3EQsG
  {
    height: 50px;
  }

  .message-in > div:not(.a81-s) > div
  {
    color: #e9e9e9 !important;
    background-color: #383d46 !important;
  }

  .message-in > div.a81-s ._3qAvH
  {
    background-color: #383d46 !important;
  }

  ._3tMyP
  {
    background-color: #383d46 !important;
    box-shadow: 0 1px 0.5px rgba(0,0,0,0.145) !important;
  }

  .message-in .tail
  {
    border-top-left-radius: 0 !important;
  }

  .message-in .tail > .tail-container
  {
    border-radius: 4px 0 0 0;
    border-top-color: #383d46;
    border-right-color: #383d46;
  }

  .message-in [role] > span[role = "button"] + span
  {
    color: #e9e9e9 !important;
  }

  .message-in > div > span:last-child > div[style]:not(._2PpWQ)
  {
    background: linear-gradient(90deg, transparent, #383d46 80%) !important;
  }

  ._2PpWQ._2Nkc4 div[style *= "opacity"]
  {
    background-color: #383d46 !important;
  }

  .message-in > div > span:last-child > div[style]._20WGU
  {
    background: linear-gradient(30deg, transparent 65%, rgba(68,68,68,0.333) 120%) !important;
  }

  .message-in > div > span:last-child > div[style]._38wik._2Nkc4
  {
    background: linear-gradient(270deg, transparent, #383d46 80%) !important;
  }

  .message-in > div > span:nth-last-child(2) > div[style]._15CAo._2Nkc4
  {
    background: linear-gradient(90deg, transparent, #383d46 80%) !important;
  }

  .message-in > div > span:nth-last-child(2) > div[style]._15CAo._3EQsG
  {
    height: 23px;
    background: linear-gradient(90deg, transparent, #383d46 80%) !important;
  }

  .message-in > div > span:nth-last-child(2) > div[style]._15CAo._3WZEQ
  {
    background: linear-gradient(90deg, transparent, #1f232a 60%) !important;
  }

  .message-in ._2HTIU
  {
    background-color: #1f232a !important;
  }

  .message-in ._2HTIU:hover
  {
    opacity: 0.8;
  }

  .message-out > div:not(.a81-s) > div
  {
    color: #e9e9e9 !important;
    background-color: #2f343d !important;
  }

  .message-out > div.a81-s ._3qAvH
  {
    background-color: #2f343d !important;
  }

  .message-out .tail
  {
    border-top-right-radius: 0 !important;
  }

  .message-out .tail > .tail-container
  {
    border-radius: 0 4px 0 0;
    border-top-color: #2f343d;
    border-left-color: #2f343d;
  }

  .message-out > div > span:last-child > div[style]:not(._2PpWQ)
  {
    background: linear-gradient(90deg, transparent, #2f343d 80%) !important;
  }

  ._3EQsG._2PpWQ div[style *= "opacity"]
  {
    background-color: #2f343d !important;
  }

  .message-out > div > span:last-child > div[style]._20WGU
  {
    background: linear-gradient(30deg, transparent 65%, rgba(68,68,68,0.333) 120%) !important;
  }

  .message-out > div > span:last-child > div[style]._38wik._3EQsG
  {
    background: linear-gradient(270deg, transparent, #2f343d 80%) !important;
  }

  .message-out > div > span:nth-last-child(2) > div[style]._15CAo._2Nkc4
  {
    background: linear-gradient(90deg, transparent, #2f343d 80%) !important;
  }

  .message-out > div > span:nth-last-child(2) > div[style]._15CAo._3EQsG
  {
    height: 23px;
    background: linear-gradient(90deg, transparent, #2f343d 80%) !important;
  }

  .message-out > div > span:nth-last-child(2) > div[style]._15CAo._3WZEQ
  {
    background: linear-gradient(90deg, transparent, #1f232a 60%) !important;
  }

  .message-out ._2HTIU
  {
    background-color: #1f232a !important;
  }

  .message-out ._2HTIU:hover
  {
    opacity: 0.8;
  }

  ._1BdTk,
    ._1cJw0,
    .kqC9O
  {
    border-left: 1px solid #2c313a;
    background-color: #1f232a !important;
  }

  ._1BdTk header,
    ._1cJw0 header,
    .kqC9O header
  {
    border-bottom: 1px solid #2c313a;
    color: #e9e9e9 !important;
    background-color: #252a33 !important;
  }

  ._1BdTk .Am8s6,
    ._1cJw0 .Am8s6,
    .kqC9O .Am8s6
  {
    color: #a1a1a1 !important;
  }

  ._1BdTk ._3ogpF,
    ._1cJw0 ._3ogpF,
    .kqC9O ._3ogpF
  {
    border-color: #7289da !important;
  }

  ._1BdTk ._1u0aP,
    ._1cJw0 ._1u0aP,
    .kqC9O ._1u0aP
  {
    color: #e9e9e9 !important;
    background-color: #2c313a !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145) !important;
  }

  ._1BdTk > div[tabindex] > div:nth-child(2),
    ._1cJw0 > div[tabindex] > div:nth-child(2),
    .kqC9O > div[tabindex] > div:nth-child(2)
  {
    border-top: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  [role = "button"] + ._2sn3C
  {
    background-color: #252a33 !important;
  }

  [role = "button"]._1Dfrr:hover
  {
    background-color: #7289da !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
  }

  [role = "button"]._3fktq
  {
    color: #7289da !important;
    background-color: #1f232a !important;
    box-shadow: inset 0 0 0 1px #2c313a;
  }

  [role = "button"]._3fktq::after
  {
    background-color: #7289da !important;
  }

  [role = "button"]._1gcLL::after
  {
    background-color: #7289da !important;
  }

  [role = "button"]._1g8sv
  {
    background-color: #7289da !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145);
    transition: 0.15s ease;
  }

  [role = "button"]._1g8sv:hover
  {
    opacity: 0.75;
  }

  .lC2xi
  {
    background-color: #1f232a !important;
  }

  .lC2xi ._8C3uJ
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
  }

  .lC2xi ~ .NeQRT
  {
    background-color: #1f232a !important;
  }

  #main > footer
  {
    background-color: transparent !important;
  }

  #main > footer .-XQxp path
  {
    fill-opacity: 0.55;
  }

  #main > footer .-XQxp._1oNFt path
  {
    fill-opacity: 1;
    fill: #7289da;
  }

  ._2mlOb
  {
    border-color: #2c313a !important;
    background-color: #252a33 !important;
    box-shadow: inset 0 1px #2c313a !important;
  }

  ._2mlOb::before
  {
    content: none;
  }

  ._2mlOb.aWTXv
  {
    margin-bottom: 8px;
    border: 1px solid #2c313a !important;
    border-radius: 4px !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145) !important;
  }

  #main > footer > div:first-child
  {
    border-top: 1px solid #2c313a;
    border-color: #2c313a !important;
    background-color: #252a33 !important;
  }

  #main > footer > div:first-child div[style] + div[tabindex]
  {
    border-radius: 4px;
    border-color: #2c313a !important;
    background-color: #1f232a !important;
  }

  #main > footer > div:first-child div[style] + div[tabindex] [style *= "visibility"]
  {
    color: #a1a1a1 !important;
  }

  #main > footer > div:first-child div[style] + div[tabindex] .focused > div[style]
  {
    color: transparent !important;
  }

  #main > footer [data-icon = "ptt"] path
  {
    fill-opacity: 0.55;
  }

  #main > footer [fill = "#09D261"]
  {
    fill: #859900 !important;
  }

  #main > footer [fill = "#E53935"]
  {
    fill: #dc322f !important;
  }

  #main > footer ._30sf0
  {
    border-color: #2c313a !important;
  }

  #main > footer ._30sf0 ._2avTY
  {
    background-color: #252a33 !important;
    box-shadow: inset 0 1px #2c313a, inset 0 -1px #2c313a;
  }

  #main > footer ._30sf0 ._2avTY div[style *= "background"]
  {
    background-color: #7289da !important;
  }

  #main > footer ._30sf0 ._2avTY > :not(._2wn58)
  {
    color: #a1a1a1 !important;
  }

  #main > footer ._30sf0 ._2avTY > :not(._2wn58):not(:hover) path
  {
    fill: #a1a1a1;
  }

  #main > footer ._30sf0 ._2avTY > :not(._2wn58):hover,
    #main > footer ._30sf0 ._2avTY ._2wn58
  {
    color: #e9e9e9 !important;
  }

  #main > footer ._30sf0 ._2avTY .Orl3a
  {
    height: 1px;
    background-color: #7289da !important;
  }

  #main > footer ._30sf0 .QChXd,
    #main > footer ._30sf0 ._20KNO,
    #main > footer ._30sf0 .RxbUw
  {
    background-color: #1f232a !important;
  }

  #main > footer ._30sf0 .QChXd [data-tab],
    #main > footer ._30sf0 ._20KNO [data-tab],
    #main > footer ._30sf0 .RxbUw [data-tab]
  {
    border-color: #2c313a !important;
    background-color: #1f232a !important;
  }

  #main > footer ._30sf0 .QChXd [data-tab] label,
    #main > footer ._30sf0 ._20KNO [data-tab] label,
    #main > footer ._30sf0 .RxbUw [data-tab] label
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
    background-color: #252a33 !important;
    box-shadow: inset 0 0 0 1px #2c313a;
  }

  #main > footer ._30sf0 .QChXd [data-tab] label input,
    #main > footer ._30sf0 ._20KNO [data-tab] label input,
    #main > footer ._30sf0 .RxbUw [data-tab] label input
  {
    color: #e9e9e9 !important;
  }

  #main > footer ._30sf0 .QChXd ._2lKjK,
    #main > footer ._30sf0 ._20KNO ._2lKjK,
    #main > footer ._30sf0 .RxbUw ._2lKjK
  {
    color: #a1a1a1 !important;
  }

  #main > footer ._30sf0 .QChXd ._2x9yi,
    #main > footer ._30sf0 ._20KNO ._2x9yi,
    #main > footer ._30sf0 .RxbUw ._2x9yi
  {
    border-radius: 4px;
    background-color: #252a33 !important;
  }

  #main > footer ._30sf0 .QChXd [data-id = "retry"],
    #main > footer ._30sf0 ._20KNO [data-id = "retry"],
    #main > footer ._30sf0 .RxbUw [data-id = "retry"]
  {
    color: #7289da !important;
  }

  ._3LFRS
  {
    background-color: transparent !important;
  }

  #main > footer + span:not([class]) > div
  {
    border-left: 1px solid #2c313a;
    border-top: 1px solid #2c313a;
    background-color: #252a33 !important;
  }

  #main > footer ._2Pown
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
    background-color: #252a33 !important;
  }

  #main > footer ._2Pown [role = "button"]
  {
    color: #a1a1a1 !important;
    background-color: #2c313a !important;
  }

  #main > footer ._2Pown [role = "button"]:hover
  {
    color: #e9e9e9 !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.145);
  }

  #main > footer ._26pkE
  {
    color: #a1a1a1 !important;
    border-left: 1px solid #2c313a;
  }

  #main > footer ._1ebw2
  {
    background-color: #1f232a !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.145), inset 0 1px #2c313a !important;
  }

  ._1F9Ap:not(#z)
  {
    color: #a1a1a1 !important;
  }

  #main > footer ._1ebw2 > div:first-child:not(#z)
  {
    margin: 4px 0 8px 66px;
    background-color: #252a33 !important;
  }

  #main > footer ._1ebw2 > div:first-child:not(#z) div[role]
  {
    background-color: #252a33 !important;
  }

  .quoted-mention
  {
    color: #a1a1a1 !important;
  }

  ._1SsXF,
    #main > footer ._1ebw2 > div:first-child:not(#z) ._2HTIU
  {
    border-radius: 6px !important;
    box-shadow: inset 0 0 0 1px #2c313a;
  }

  #main > footer ._1ebw2 div:last-child
  {
    position: relative;
    background-color: transparent !important;
  }

  #main > footer ._1ebw2 div:last-child [role = "button"] > span > svg
  {
    padding: 16px;
    border-radius: 6px;
  }

  #main > footer ._2j-wI
  {
    border-color: #2c313a !important;
    background-color: #1f232a !important;
    box-shadow: 0 -1px #2c313a !important;
  }

  #main > footer ._2j-wI::before
  {
    content: none;
  }

  #main > footer ._2j-wI .XSeqj
  {
    color: #e9e9e9 !important;
    border-color: #2c313a !important;
    background-color: #1f232a !important;
  }

  #main > footer ._2j-wI .XSeqj._1Yz8K,
    #main > footer ._2j-wI .XSeqj:hover
  {
    background-color: #252a33 !important;
  }

  #main > footer ._2j-wI ._3SW-z
  {
    color: #a1a1a1 !important;
  }

  ._2NdXo
  {
    color: #a1a1a1 !important;
  }

  @media screen and (max-height: 500px)
  {
    #app > div > .app
    {
      min-height: auto;
    }
  }

  @media screen and (max-width: 648px)
  {
    #app > div > .app
    {
      min-width: auto;
    }
  }

  @media screen and (max-width: 720px)
  {
    .two > div:nth-child(3),
      .three > div:nth-child(3)
    {
      flex: 0 0 80px !important;
      transition: 0.2s ease;
    }

    .two > div:nth-child(3):hover,
      .three > div:nth-child(3):hover,
      .two > div:nth-child(3):focus-within,
      .three > div:nth-child(3):focus-within
    {
      flex: 0 0 30% !important;
    }

    .two > div:nth-child(2) > div:nth-child(2)
    {
      flex: 0 0 calc(100% - 80px) !important;
      margin-left: calc(-25% + 80px);
    }

    .two > div:nth-child(3)
    {
      min-width: 1px !important;
      transition: 0.3s ease !important;
      transition-delay: 1.2s !important;
    }

    .two > div:nth-child(3):hover
    {
      min-width: 400px !important;
      transition-delay: 1s !important;
      flex: 0 0 30% !important;
    }

    .two > :nth-child(2) > :nth-child(1)
    {
      z-index: 201 !important;
      flex: 0 0 30% !important;
    }

    .two > :nth-child(2) > :nth-child(1) [style][tabindex]
    {
      border-right: 1px solid #2c313a !important;
    }

    .three > div:nth-child(2) > div:nth-child(2)
    {
      flex: 0 0 calc(100% - 30% - 80px) !important;
      margin-left: calc(-25% + 80px);
    }

    .three > div:nth-child(4)
    {
      flex: 0 0 calc(100% - 30% - 80px) !important;
    }

    .three > div:nth-child(3):hover
    {
      flex: 0 0 80px !important;
    }

    .three ._7YAGC
    {
      flex: 0 0 30% !important;
      border-color: transparent !important;
    }

    .ZP8RM:not(._19OGD) label
    {
      padding: 0px;
    }

    #side > header
    {
      min-width: 240px;
    }

    #side > header + span
    {
      display: none;
    }

    #side ._2UaNq .KgevS
    {
      padding-left: 5px !important;
    }

    #side ._2UaNq ._1ZMSM > span:not(.P6z4j)
    {
      display: none !important;
    }

    #side ._2UaNq ._1Wn_k > ._3VIru + span[dir],
      #side ._2UaNq ._1Wn_k > ._3VIru + div[class],
      #side ._2UaNq ._1Wn_k > :first-child:not(._3VIru)
    {
      margin-left: 15px;
    }

    #side ._2UaNq ._1ZMSM .P6z4j
    {
      z-index: 999 !important;
      margin: 7px 0px 0px -60px !important;
      box-shadow: 0 0 0 3px #252a33 !important;
    }

    #side ._2UaNq .xD91K
    {
      z-index: 199 !important;
      display: flex !important;
      flex-direction: row-reverse !important;
    }

    ._2ZAIy
    {
      overflow: unset !important;
      margin-top: -8px !important;
      margin-left: 16px !important;
      position: absolute;
    }

    ._2ZAIy::before
    {
      content: "";
      z-index: -3;
      position: absolute;
      top: -30px;
      right: 72px;
      bottom: 0;
      left: -72px;
      border: 2px solid #859900;
      border-radius: 50%;
      animation: 2s _20RFk infinite;
    }

    #side ._2UaNq ._1ZMSM
    {
      margin-right: 0;
    }

    #side ._2UaNq ._3VIru
    {
      padding: 1.5px;
      z-index: 101;
      position: absolute;
      margin: 4px 0 0 -60px;
      border-radius: 50%;
      background-color: #1f232a !important;
      box-shadow: 0 0 0 3px #252a33;
    }

    #side ._2UaNq ._3VIru > span > svg
    {
      padding: 2px;
      height: 14px !important;
      width: 14px !important;
    }

    #side ._2UaNq._3mMX1 .xD91K .P6z4j,
      #side ._2UaNq._3mMX1 .xD91K ._3VIru
    {
      box-shadow: 0 0 0 3px #2c313a !important;
    }

    #side ._2UaNq:hover:not(._3mMX1) .xD91K .P6z4j,
      #side ._2UaNq:hover:not(._3mMX1) .xD91K ._3VIru
    {
      box-shadow: 0 0 0 3px rgba(255,255,255,0.02), 0 0 0 3px #252a33 !important;
    }

    #side ._0LqQ
    {
      margin-left: -10px !important;
      overflow: unset !important;
    }

    #side ._0LqQ > span:last-child:not(._17TaE)
    {
      display: none !important;
    }
  }

  ._1QjgA
  {
    color: #7289da !important;
  }

  .color-0
  {
    color: #268bd2 !important;
  }

  .color-1
  {
    color: #2aa198 !important;
  }

  .color-2
  {
    color: #859900 !important;
  }

  .color-3
  {
    color: #6c71c4 !important;
  }

  .color-4
  {
    color: #f33682 !important;
  }

  .color-5
  {
    color: #dc322f !important;
  }

  .color-6
  {
    color: #df4b16 !important;
  }

  .color-7
  {
    color: #e5c512 !important;
  }

  .color-8
  {
    color: #268bd2 !important;
    filter: hue-rotate(20deg);
  }

  .color-9
  {
    color: #2aa198 !important;
    filter: hue-rotate(20deg);
  }

  .color-10
  {
    color: #859900 !important;
    filter: hue-rotate(20deg);
  }

  .color-11
  {
    color: #6c71c4 !important;
    filter: hue-rotate(20deg);
  }

  .color-12
  {
    color: #f33682 !important;
    filter: hue-rotate(20deg);
  }

  .color-13
  {
    color: #dc322f !important;
    filter: hue-rotate(20deg);
  }

  .color-14
  {
    color: #df4b16 !important;
    filter: hue-rotate(20deg);
  }

  .color-15
  {
    color: #e5c512 !important;
    filter: hue-rotate(20deg);
  }

  .color-15
  {
    color: #268bd2 !important;
    filter: hue-rotate(40deg);
  }

  .color-16
  {
    color: #2aa198 !important;
    filter: hue-rotate(40deg);
  }

  .color-17
  {
    color: #859900 !important;
    filter: hue-rotate(40deg);
  }

  .color-18
  {
    color: #6c71c4 !important;
    filter: hue-rotate(40deg);
  }

  .color-19
  {
    color: #f33682 !important;
    filter: hue-rotate(40deg);
  }

  .color-20
  {
    color: #dc322f !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-0
  {
    background-color: #268bd2 !important;
  }

  .bg-color-1
  {
    background-color: #2aa198 !important;
  }

  .bg-color-2
  {
    background-color: #859900 !important;
  }

  .bg-color-3
  {
    background-color: #6c71c4 !important;
  }

  .bg-color-4
  {
    background-color: #f33682 !important;
  }

  .bg-color-5
  {
    background-color: #dc322f !important;
  }

  .bg-color-6
  {
    background-color: #df4b16 !important;
  }

  .bg-color-7
  {
    background-color: #e5c512 !important;
  }

  .bg-color-8
  {
    background-color: #268bd2 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-9
  {
    background-color: #2aa198 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-10
  {
    background-color: #859900 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-11
  {
    background-color: #6c71c4 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-12
  {
    background-color: #f33682 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-13
  {
    background-color: #dc322f !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-14
  {
    background-color: #df4b16 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-15
  {
    background-color: #e5c512 !important;
    filter: hue-rotate(20deg);
  }

  .bg-color-15
  {
    background-color: #268bd2 !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-16
  {
    background-color: #2aa198 !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-17
  {
    background-color: #859900 !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-18
  {
    background-color: #6c71c4 !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-19
  {
    background-color: #f33682 !important;
    filter: hue-rotate(40deg);
  }

  .bg-color-20
  {
    background-color: #dc322f !important;
    filter: hue-rotate(40deg);
  }
  }
  
`);

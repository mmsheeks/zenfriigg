(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/avatar-Bnbq9tNh.png`;document.querySelector(`#app`).innerHTML=`
<section id="center">
  <div class="hero">
    <img src="${e}" class="base" width="170" height="179">
  </div>
  <div>
    <h1>Hello there!</h1>
    <p>I hope you're having a good day today.</p>
    <div id="channels">
      <h2>My Channels</h2>
      <ul>
        <li><a href="https://youtube.com/zenfrii" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#youtube"></use></svg>Youtube</a></li>
        <li><a href="https://twitch.tv/zenfrii" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#twitch"></use></svg>Twitch</a></li>
      </ul>
    </div>
  </div>
</section>

<section id="next-steps">
  <div id="docs">
    <h2>Other Projects</h2>
    <ul>
      <li>
        <a href="https://clovercraft.gg/" target="_blank">
          Clovercraft
        </a>
      </li>
      <li>
        <a href="https://martinsheeks.com" target="_blank">
          Personal Site
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <h2>Find Me Online</h2>
    <ul>
      <li><a href="https://discord.gg/y5phg7BSuY" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://bsky.app/profile/zenfrii.gg" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
      <li><a href="https://github.com/mmsheeks" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
import './style.css'
import avatar from '../public/avatar.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${avatar}" class="base" width="170" height="179">
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
`

<template>
  <div class="layout">
    <header class="header">
      <RouterLink :to="$localePath">
        <img v-if="data.logo" class="logo" :src="$withBase(data.logo)" :alt="data.title" />
      </RouterLink>
      <p v-if="data.tagline" class="lead" v-html="data.tagline" />
      <p v-if="data.home && data.intro" v-html="data.intro" />
      <p v-if="data.home"><a class="shield" v-for="shield in shields" :key="shield.href" :href="shield.href" target="_blank" rel="nofollow noopener noreferrer"><img :src="shield.src" :alt="shield.alt"></a></p>
    </header>
    <nav class="navigation">
      <RouterLink :to="$localePath">Get Started</RouterLink>
      <RouterLink :to="$localePath + 'example.html'">Example</RouterLink>
      <RouterLink :to="$localePath + 'customization.html'">Customization</RouterLink>
      <RouterLink :to="$localePath + 'migration.html'">Migration</RouterLink>
    </nav>
    <main class="remarkability">
      <slot/>
    </main>
    <nav class="navigation">
      <RouterLink :to="$localePath">Get Started</RouterLink>
      <RouterLink :to="$localePath + 'example.html'">Example</RouterLink>
      <RouterLink :to="$localePath + 'customization.html'">Customization</RouterLink>
      <RouterLink :to="$localePath + 'migration.html'">Migration</RouterLink>
      <a href="#app"><svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" class="icon up"><path fill-rule="evenodd" d="M8.53 1.22a.75.75 0 00-1.06 0L3.72 4.97a.75.75 0 001.06 1.06l2.47-2.47v6.69a.75.75 0 001.5 0V3.56l2.47 2.47a.75.75 0 101.06-1.06L8.53 1.22zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg> Top</a>
    </nav>
    <footer class="footer">
      <p>&copy; 2019 &ndash; {{ new Date().getFullYear() }} <a href="https://mflash.dev/profile/naiyer" target="_blank" rel="nofollow noopener noreferrer">Naiyer Asif</a></p>
      <p><strong>Remarkability</strong> is built with the generous contributions from the open-source community. It would not have been possible without <a href="https://github.com/jgthms/wysiwyg.css" target="_blank" rel="noopener noreferrer">wysiwyg.css</a> by <a href="https://github.com/jgthms" target="_blank" rel="noopener noreferrer">Jeremy Thomas</a>, <a href="https://github.com/sindresorhus/github-markdown-css" target="_blank" rel="noopener noreferrer">github-markdown-css</a> by <a href="https://github.com/sindresorhus" target="_blank" rel="noopener noreferrer">Sindre Sorhus</a> and the invaluable references on <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">MDN</a>. The typeface used in the logo is <a href="https://www.behance.net/gallery/96690897/Maragsa-a-display-typeface-FREE" target="_blank" rel="noopener noreferrer">Maragsâ Display</a> by <a href="https://www.behance.net/johndavidmaza" target="_blank" rel="noopener noreferrer">John David Maza</a>. The icons are from <a href="https://github.com/primer/octicons" target="_blank" rel="noopener noreferrer">Octicons</a>, a part of GitHub's <a href="https://github.com/primer" target="_blank" rel="noopener noreferrer">Primer</a> design system.</p>
      <p>This documentation covers <strong>Remarkability</strong> v{{ data.version }}. It is built using <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">Vuepress</a> and hosted on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
      <p><svg class="icon law" viewBox="0 0 16 16" version="1.1" width="15" height="15" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg> <a href="https://github.com/Microflash/remarkability/blob/master/LICENSE.md" target="_blank" rel="nofollow noopener noreferrer">MIT license</a>&ensp;&middot;&ensp;<svg class="icon issue-opened" viewBox="0 0 16 16" version="1.1" width="15" height="15" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg> <a href="https://github.com/Microflash/remarkability/issues/new/choose" target="_blank" rel="nofollow noopener noreferrer">Report an issue</a>&ensp;&middot;&ensp;<svg class="icon repo-forked" viewBox="0 0 16 16" version="1.1" width="15" height="15" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg> <a href="https://github.com/Microflash/remarkability" target="_blank" rel="nofollow noopener noreferrer">Fork on GitHub</a></p>
    </footer>
  </div>
</template>

<script>
import * as pkg from '../../../../../library/package.json'

export default {
  name: 'Home',
  computed: {
    data() {
      const fm = this.$page.frontmatter
      return {
        ...fm,
        title: fm.title || this.$site.title,
        logo: fm.logo || this.$site.themeConfig.logo,
        tagline: fm.tagline || `&mdash; ${this.$site.description}`,
        version: pkg.version
      }
    },
    shields() {
      return this.$site.themeConfig.shields
    }
  }
}
</script>

<style lang="scss">
@use "../styles/index";
</style>

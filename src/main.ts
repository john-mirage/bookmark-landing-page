import Page from '@components/page.svelte'
import '@assets/styles/modern-normalize.css'
import '@assets/styles/global.css'

const app = new Page({
    target: document.getElementById('app')
})

export default app

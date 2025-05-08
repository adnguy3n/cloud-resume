import { mount } from 'svelte'
import Resume from './Resume.svelte'

const app = mount(Resume, {
  target: document.getElementById('app')!,
})

export default app

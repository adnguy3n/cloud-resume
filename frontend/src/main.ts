import { mount } from 'svelte'
import Resume from './Resume.svelte'

const resume = mount(Resume, {
  target: document.getElementById('app')!,
})

export default resume

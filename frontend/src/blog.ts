import { mount } from 'svelte'
import Blog from './Blog.svelte'

const blog = mount(Blog, {
  target: document.getElementById('app')!,
})

export default blog
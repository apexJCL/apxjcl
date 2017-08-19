import Blog from '@/components/blog/Blog'
import Index from '@/components/blog/Index'

export default {
  path: '/blog',
  component: Blog,
  children: [
    {path: '', component: Index}
  ]
}

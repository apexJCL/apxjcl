import Blog from '@/components/blog/Blog'
import Read from '@/components/blog/Read'
import Index from '@/components/blog/Index'

export default {
  path: '/blog',
  component: Blog,
  children: [
    {path: '', component: Index},
    {path: ':entryId', name: 'readEntry', component: Read}
  ]
}

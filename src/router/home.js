import Home from '@/components/home/Home'
import Index from '@/components/home/Index'

export default {
  path: '/',
  component: Home,
  children: [
    {path: '', component: Index}
  ]
}

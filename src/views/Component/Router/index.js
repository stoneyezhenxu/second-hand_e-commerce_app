import Home from '../../Home'
import Me from '../../Me'
import Message from '../../Message'
import Todo from '../../Todo'
import Error from '../../Error'


const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home

  },
  {
    path: "/me",
    component: Me
  },
  {
    path: "/message",
    component: Message
  },
  {
    path: "/todo",
    component: Todo
  },
  {
    path: "*",
    component: Error
  }
]

export default routes

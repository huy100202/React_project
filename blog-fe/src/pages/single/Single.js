import './single.css'
import Sidebar from '../../components/sidebar.js/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

export default function cl () {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

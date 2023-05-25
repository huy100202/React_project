import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img src="https://creativelayers.net/themes/superio/images/resource/blog-single.jpg" className='headerImg' alt=""/>
    </div>
  )
}

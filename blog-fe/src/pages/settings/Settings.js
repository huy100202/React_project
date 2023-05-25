import Sidebar from '../../components/sidebar.js/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label htmlFor="">Profile Picture</label>
          <div className='settingsPP'>
            <img src="https://creativelayers.net/themes/superio/images/resource/candidate-4.png" alt=""/>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" value="" style={{display: 'none'}}/>
          </div>
          <label for="">Username</label>
          <input type="text" name="" value=""/>
          <label for="">Username</label>
          <input type="email" name="" value=""/>
          <label for="">Username</label>
          <input type="password" name="" value=""/>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

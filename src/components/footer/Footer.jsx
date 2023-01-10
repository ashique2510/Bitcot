import React from 'react'
import './Footer.css'
import facebook from '../../assets/social/facebook-white.svg'
import instagram from '../../assets/social/instagram-white.svg'
import twitter from '../../assets/social/twitter-white.svg'
import appStore from '../../assets/store/app-store.svg'
import playStore from '../../assets/store/play-store.svg'
import windowsStore from '../../assets/store/windows-store.svg'


const Footer = () => {

  return (
    <div>

        <footer>
            <div className="container">
                <div className="content">

                <nav>
                    <a href="#">Home |</a>
                    <a href="#">&nbsp;Terms and Condition |</a>
                    <a href="#">&nbsp;Privacy Policy |</a>
                    <a href="#">&nbsp;Collection Statement |</a>
                    <a href="#">&nbsp;Help |</a>
                    <a href="#">&nbsp;Manage Account</a>
                </nav>
                <div className="copy-right">
                    <p>Copyright © 2016 VIDEO Streaming. All Rights Reserved.</p>
                </div>

                <div className="social-media">

                    <div className="social-media-app">

                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />

                    </div>

                    <div className="media-store">
                        
                        <img src={appStore} alt="appStore" />
                        <img src={playStore} alt="playStore" />
                        <img  src={windowsStore} id='windowsStore' />

                    </div>

                </div>


                </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer

import "./contact.css"
import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +92-3441477887</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" value="ASHAR" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" value="Asharshahid766@gmail.com" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" value="+92-3441477887" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" value="Send Message In Email" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

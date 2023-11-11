import React, {Fragment} from "react"
import {Route, Link} from "react-router-dom"


const Msg = () => {
    return (
      <div className="row justify-content-around mt-5 user-info">
        <div className="chat-container">
        <div className="message-list">
          <div >Supp</div>
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
          />
          <a href="#" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Send
                </a>
        </div>
      </div>
      </div>
    )
}

export default Msg
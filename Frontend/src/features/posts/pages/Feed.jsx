import React from 'react'
import "../style/feed.scss"


const Feed = () => {
  return (
    <main className='feed-page'>
      <div className="feed">
        <div className="posts">
          <div className="post">

            <div className="user">
              <div className="img-wrapper">

                <img src="https://images.unsplash.com/photo-1784568210957-9242ed46bda9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="" />

              </div>
              <p>Username</p>
            </div>

            <img src="https://images.unsplash.com/photo-1782790379247-b586bcf2cee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="" />

            <div className="bottom">
              <div className="caption">Caption</div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Feed
import React from 'react'
import "../style/createpost.scss"


const CreatePost = () => {
    return (
        <main className="create-post-page">
            <div className="form-container">
                <h1>Create Post</h1>
                <form>
                    <label className='create-post-label' htmlFor="postImage">Select Image</label>
                    <input hidden type="file" name='postImage' id='postImage' />
                    <input type="text" name="caption" id="caption" />
                    <button className='button primary-button'>Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost
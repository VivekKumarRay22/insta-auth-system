import React, { useRef, useState } from 'react'
import "../style/createpost.scss"


const CreatePost = () => {
    const [caption, setCaption] = useState("")
    const postImageInputFieldRef = useRef(null)

    function submitHandler(e) {
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]

    }

    return (
        <main className="create-post-page">
            <div className="form-container">
                <h1>Create Post</h1>
                <form onSubmit={submitHandler}>
                    <label className='create-post-label' htmlFor="postImage">Select Image</label>
                    <input ref={postImageInputFieldRef} hidden type="file" name='postImage' id='postImage' />
                    <input value={caption}
                        onChange={(e) => { setCaption(e.target.value) }}
                        type="text" name="caption" id="caption" />
                    <button className='button primary-button'>Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost
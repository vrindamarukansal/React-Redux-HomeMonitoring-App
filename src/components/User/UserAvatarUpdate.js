import React, {useState} from 'react';
import {Button} from 'shards-react';
//import PropTypes from "prop-types"

const UserAvatarUpdate = (props)=> {

   const handleImageChange = (event) => {
        const image = event.currentTarget.files[0];
        const formData = new FormData();
        let reader = new FileReader();
        formData.append('image', image, image.name);
        reader.readAsDataURL(image)
        reader.onloadend=()=>(setImageUrl(reader.result))
        console.log(reader.result)
      };
   const handleEditPicture = () => {
        const fileInput = document.getElementById('feImageInput');
        fileInput.click();
      };
      const [imageUrl, setImageUrl]= useState(props.src)
        return (
            <div className="d-md-flex">
                      <img
                      className="rounded-circle mr-4"
                      src={imageUrl}
                      alt="profile"
                      width="110"
                      height="110"
                      />
                      <div className="d-inline-block my-auto mr-5">
                      <h6 className="mb-0">Change Avatar</h6>
                      <span className="text-muted">Some text explaining type of image to upload</span>
                      </div>
                      <div className="my-auto d-inline-block">
                        <input
                            type="file"
                            id="feImageInput"
                            hidden="hidden"
                            accept="image/jpeg, image/jpg, image/png"
                            onChange={handleImageChange}
                        />
                        <Button
                            onClick={handleEditPicture}
                            theme="accent"
                        >Upload New Image</Button>
                      </div>
                </div>
        )
}

export default UserAvatarUpdate;

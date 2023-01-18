import React, { useState } from 'react';
import axios from 'axios';

function ReviewModal() {
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const [imageURL, setImageURL] = useState([]);

  const handleAddReview = (reviewTitle, reviewBody, reviewRating, reviewImages, campgroundId) => {
    axios.post('/review', {
      campsiteName: 'Placeholder',
      userName: 'Placeholder',
      description: body,
      rating: 5,
      photos: imageURL,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error from add review.', error);
      });
  };

  // change selected image file to binary
  const getBase64 = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  // upload photo to cloud and set state with url in response object
  const uploadPhoto = async (file) => {
    const base64File = await getBase64(file);
    const data = new FormData();
    data.append('file', base64File);
    data.append('upload_preset', 'TheCampSite');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dfxzjeut8/image/upload',
      {
        method: 'Post',
        body: data,
      },
    );
    const response = await res.json();
    setImageURL([...imageURL, response.secure_url]);
  };

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <form onSubmit={() => handleAddReview(body, rating, imageURL)}>
        <label htmlFor="reviewBody">
          <p>Summary</p>
          <textarea
            maxLength="500"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="reviewImage1">
          <input
            id="reviewImage1"
            type="file"
            name="files[]"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              uploadPhoto(URL.createObjectURL(event.target.files[0]));
            }}
          />
        </label>
        {imageURL[0] ? (
          <label htmlFor="reviewImage2">
            <input
              id="reviewImage2"
              type="file"
              name="files[]"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                uploadPhoto(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </label>
        ) : null}
        <button type="submit">
          Submit
        </button>
        <button type="button">
          Close
        </button>
      </form>
    </div>
  );
}

export default ReviewModal;

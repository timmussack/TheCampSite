/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { Rating, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function ReviewModal({ campsite }) {
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const [imageURL, setImageURL] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  // get data from redux store
  const name = useSelector((state) => state.currentUser.userData.name);

  const toggleModal = (userName) => {
    if (userName === '') {
      alert('You must be signed in to leave a review.');
      return;
    }
    setIsOpen(!isOpen);
  };

  const labels = {
    1: 'Terrible 🥲',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent! 🤩',
  };

  function getLabelText(starValue) {
    return `${starValue} Star${starValue !== 1 ? 's' : ''}, ${labels[starValue]}`;
  }

  const handleAddReview = (reviewBody, reviewRating, reviewImages) => {
    axios.post('http://localhost:3007/addReview', {
      campsiteName: campsite.name,
      campsiteID: campsite.id,
      userName: name,
      description: body,
      rating: value,
      photos: imageURL,
    })
      .then((response) => {
        console.log(response);
        toggleModal();
      })
      .catch((error) => {
        console.error('Error from add review request.', error);
        toggleModal();
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
    <>
      <div className="font-primary fixed flex items-center justify-center">
        <button
          type="button"
          onClick={() => toggleModal(name)}
          className="rounded-2xl border border-primary px-4 py-2 text-md font-medium text-primary drop-shadow-md hover:bg-pop transform transition duration-500 hover:scale-105 hover:drop-shadow-xl"
        >
          Leave a review
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="font-primary relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary text-center font-bold"
                  >
                    Tell us about {campsite.name}
                  </Dialog.Title>
                  <div className="mt-1">
                    <form
                      className="flex flex-col"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddReview(body, rating, imageURL);
                      }}
                    >
                      <label htmlFor="reviewBody">
                        <textarea
                          className="w-full h-40 p-2 border border-primary rounded-2xl"
                          minLength="25"
                          maxLength="250"
                          type="text"
                          value={body}
                          onChange={(e) => {
                            setBody(e.target.value);
                          }}
                          required
                        />
                      </label>
                      <p>Choose Image</p>
                      <div className="flex flex-row">
                        <label
                          className="border border-primary rounded-2xl cursor-pointer shadow-md w-28 p-2 text-center mt-2 mr-2 drop-shadow-md hover:bg-pop transform transition duration-500 hover:scale-105 hover:drop-shadow-xl"
                          htmlFor="reviewImage1"
                        >
                          {imageURL[0] ? 'Ready' : 'Select'}
                          <input
                            className="opacity-0 w-0 h-0"
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
                          <label
                            className="border border-primary rounded-2xl cursor-pointer shadow-md w-28 p-2 text-center mt-2 drop-shadow-md hover:bg-pop transform transition duration-500 hover:scale-105 hover:drop-shadow-xl"
                            htmlFor="reviewImage2"
                          >
                            {imageURL[1] ? 'Ready' : 'Select'}
                            <input
                              className="opacity-0 w-0 h-0"
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
                      </div>
                      <p className="pt-3">Choose a rating</p>
                      <div className="flex flex-row">
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={1}
                          getLabelText={() => getLabelText(value)}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-28 mt-4 inline-flex justify-center rounded-2xl border border-primary px-4 py-2 text-md font-medium text-primary drop-shadow-md hover:bg-pop transform transition duration-500 hover:scale-105 hover:drop-shadow-xl"
                      >
                        Submit!
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ReviewModal;

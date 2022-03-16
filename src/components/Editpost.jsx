import React, { useState } from 'react';
import { editPost } from '../apiFunction';

const Editpost = ({ setEditPost, POST_ID }) => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [deliver, setDeliver] = useState(false);

  return (
    <div className="editPostContainer">
      <h1>Edit POST</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const editedPost = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: deliver,
          };
          editPost(editedPost, window.localStorage.getItem('token'), POST_ID); // CHANGE TO EDIT POST
          setTitle('');
          setDescription('');
          setPrice('');
          setLocation('');
          setDeliver(false);
          setChecked(false);
          setEditPost(false);
        }}
      >
        <input
          required
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          required
          value={description}
          type="text"
          name="description"
          placeholder="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          required
          value={price}
          type="text"
          name="price"
          placeholder="Price"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          required
          value={location}
          type="text"
          name="location"
          placeholder="Location"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <label htmlFor="deliver">
          <input
            value={deliver}
            defaultChecked={checked}
            type="checkbox"
            name="deliver"
            id="deliver"
            onChange={(event) => {
              setChecked(!checked);
              console.log(checked);
              setDeliver(
                event.target.value === 'false'
                  ? (event.target.value = 'true')
                  : (event.target.value = 'false')
              );
              console.log(event.target.value);
            }}
          />
          Willing to Deliver?
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Editpost;

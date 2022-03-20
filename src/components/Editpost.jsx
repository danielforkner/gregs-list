import React, { useState } from 'react';
import { editPost } from '../apiFunction';

const Editpost = ({ setEditPost, posts }) => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [deliver, setDeliver] = useState(false);
  const [selectedPost, setSelectedPost] = useState('please select a post');
  console.log(posts);

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setLocation('');
  };

  return (
    <div className="editPostContainer">
      <h1>EDIT POST</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('selectedPost', selectedPost);

          if (selectedPost === 'please select a post') {
            resetFields();
            alert('select a valid title');
            return;
          }
          const editedPost = {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: deliver,
          };
          let POST_ID;
          posts.forEach((post, i) => {
            if (post.title === selectedPost) {
              POST_ID = post._id;
            } else {
              null;
            }
          });
          editPost(editedPost, window.localStorage.getItem('token'), POST_ID);
          resetFields();
          setDeliver(false);
          setChecked(false);
          setEditPost(false);
        }}
      >
        <select
          value={selectedPost}
          onChange={(e) => setSelectedPost(e.target.value)}
        >
          <option value="please select a post">Please Select a Post</option>
          {posts.map((post, i) => {
            if (post.active) {
              return <option value={post.title}>{post.title}</option>;
            }
          })}
        </select>
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
        <button type="submit">EDIT</button>
      </form>
    </div>
  );
};

export default Editpost;

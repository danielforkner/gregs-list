const BASEURL = 'https://strangers-things.herokuapp.com';
const COHORT = '/api/2202-FTB-ET-WEB-FT';

export const getAllPosts = async (setAllPosts, token) => {
  let response;
  try {
    if (token) {
      response = await fetch(`${BASEURL}${COHORT}/posts`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      response = await fetch(`${BASEURL}${COHORT}/posts`);
    }
    const data = await response.json();
    setAllPosts(data.data.posts);
    if (response.error) throw response.error;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (
  userName,
  password,
  history,
  setIsLoggedIn
) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password,
        },
      }),
    });
    const data = await response.json();
    const token = data.data.token;
    window.localStorage.setItem('token', token);
    setIsLoggedIn(true);
    history.push('/posts');
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (userName, password, history, setIsLoggedIn) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password,
        },
      }),
    });
    const data = await response.json();
    const token = data.data.token;
    window.localStorage.setItem('token', token);
    setIsLoggedIn(true);
    history.push('/posts');
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (newPost, token) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: newPost,
      }),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const editPost = async (editPost, token, POST_ID) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/posts/${POST_ID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: editPost,
      }),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const submitMessage = async (message, token, postid) => {
  try {
    const response = await fetch(
      `${BASEURL}${COHORT}/posts/${postid}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: message,
          },
        }),
      }
    );
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProfile = async (token) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removePost = async (id, token, profile) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    // refresh the profile page with the removed posts gone
    profile.posts.filter((post) => {
      post._id !== id;
    });
  }
};

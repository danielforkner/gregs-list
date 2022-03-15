const BASEURL = 'https://strangers-things.herokuapp.com';
const COHORT = '/api/2202-FTB-ET-WEB-FT';

export const getAllPosts = async (setAllPosts) => {
  try {
    const response = await fetch(`${BASEURL}${COHORT}/posts`);
    const data = await response.json();
    setAllPosts(data.data.posts);
    console.log(data.data.posts);
    if (response.error) throw response.error;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (userName, password) => {
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
    console.log(data);
    window.localStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (userName, password) => {
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
    console.log(data);
    window.localStorage.setItem('token', token);
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
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

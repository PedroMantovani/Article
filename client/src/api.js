import axios from "axios";
const url = "/api/post";

export default class API {
  // Get all posts
  static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
  }

  // Get one post by id
  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  // insert post into database
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  // update post into database
  static async addPost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }

  // delete a post
  static async addPost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}

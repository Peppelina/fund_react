import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:5000/api/posts', {
                params: {
                    limit: limit,
                    page: page
                }
            }
        )
        return [response.data, response.headers['x-total-count']]
    }

    static async getById(id) {
        const response = await axios.get('http://localhost:5000/api/posts/' + id )
        return response
    }

    /*static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }*/

    static async createNewPost(post) {
        const response = await axios.post('http://localhost:5000/api/posts', post)
        return response.data
    }

    static async deletePost(id) {
        const response = await axios.delete(`http://localhost:5000/api/posts/${id}`)
        return response
    }

    static async updatePost(post) {
        const response = await axios.put('http://localhost:5000/api/posts', post)
        return response.data
    }
}
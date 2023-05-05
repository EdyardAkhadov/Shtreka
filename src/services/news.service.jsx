import axios from "axios"

export const NewsService ={
    async getAll(){
      const data = await axios.get("http://localhost:3000/news")
      return data.data
    },

    async getById(id){
      const data = await axios.get(`http://localhost:3000/news?id=${id}`)
      return data.data[0]
    },
}
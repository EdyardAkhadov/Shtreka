import axios from "axios"

export const PopularService ={
    async getAll(){
      const data = await axios.get("http://localhost:3000/popular")
      return data.data
    },
}
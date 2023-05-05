import axios from "axios"

export const RailwaystationService ={
    async getByName(name){
      const data = await axios.get(`http://localhost:3000/railwaystation?name=${name}`)
      return data.data[0]
    },
}
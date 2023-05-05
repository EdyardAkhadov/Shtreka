import axios from "axios"

export const RoutesService ={
    async getByFromToDate(from,to,date){
      const data = await axios.get(`http://localhost:3000/routes?from=${from}&to=${to}&date=everyday`)
      return data.data
    },
}
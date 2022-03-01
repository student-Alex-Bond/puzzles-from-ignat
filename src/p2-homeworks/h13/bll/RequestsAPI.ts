import axios from 'axios'

export const RequestsAPI = {
   postRequest(value: boolean) {

        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
            .then((response)=> {
                return response.data
            })
            .catch( (error)=> error.response ? error.response.data.errorText : error.message)
}
}
import axios from 'axios';
const URL = 'http://localhost:8080/product/shoes'
class ShoeService{
    getShoes(){
        return axios.get(URL);
    }

    createShoe(shoe){

        return axios.post(URL, shoe);

    }

    getShoeById(id){
        return axios.get(URL+'/'+ id);

    }

    updateShoe(shoe,id){
        return axios.put(URL+'/'+ id,shoe);
    }

    deleteShoe(id){
        return axios.delete(URL + '/' + id);
    }


}
export default new ShoeService();
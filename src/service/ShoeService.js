import axios from 'axios';
const URL = 'http://localhost:8080/shoes'
class ShoeService{
    getShoes(){
        return axios.get('http://localhost:8080/viewShoes');
    }

    createShoe(shoe){

        return axios.post('http://localhost:8080/createShoe', shoe);

    }

    getShoeById(id){
        return axios.get(URL+'/'+ id);

    }

    updateShoe(shoe,id){
        return axios.put(URL+'/'+ id,shoe);
    }

    deleteShoe(id){
        return axios.delete('http://localhost:8080/deleteShoe'+'/' + id);
    }


}
export default new ShoeService();
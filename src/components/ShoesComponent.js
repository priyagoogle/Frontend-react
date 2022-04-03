import React from 'react'
import ShoeService from '../service/ShoeService'
import {Navbar} from 'react-bootstrap'
class ShoesComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            shoes:[]
        }
        this.createShoe=this.createShoe.bind(this);
        this.editShoe=this.editShoe.bind(this);
        this.deleteShoe=this.deleteShoe.bind(this);


    }
    componentDidMount(){
        ShoeService.getShoes().then((Response)=>{
            this.setState({shoes:Response.data})
        });
    }

    createShoe(){
        this.props.history.push('/create');
    }

    editShoe(id){
        this.props.history.push('/update-shoe/${id}');
    }

    deleteShoe(id){
        ShoeService.deleteShoe(id).then( res => {
            this.setState({shoes: this.state.shoes.filter(shoe => shoe.id !== id)});
        });
    }

    render(){
        return(
        <div className='container'>
            <h1 className="text-center mt-5 ">List of Shoes</h1>
            <div className="row">
                <button className="btn btn-primary" onClick={this.createShoe}>Create Shoes</button>
            </div>
            <div className="container">
            <table className="table ">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th> Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Units</th>
                    <th>Actions</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.shoes.map(
                            shoes =>
                                <tr key = {shoes.id}>
                                        <td>{shoes.id}</td>
                                        <td>{shoes.brand}</td>
                                        <td>{shoes.type}</td>
                                        <td>{shoes.name}</td>
                                         <td>{shoes.size}</td>
                                        <td>{shoes.price}</td>
                                         <td>{shoes.units}</td>
                                         <td>
                                             <button onClick={ () => this.editShoe(shoes.id)} className="btn btn-info">Update</button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteShoe(shoes.id)} className="btn btn-danger">Delete </button>
                                               
                                         </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}
export default ShoesComponent

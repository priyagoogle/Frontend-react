import React, { Component } from "react";
import ShoeService from "../service/ShoeService";

class UpdateShoesComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            brand: '',
            type: '',
            name: '',
            size: '',
            price: '',
            units: ''

        }
    

    this.changeBrandHandler= this.changeBrandHandler.bind(this);
    this.changeTypeHandler=this.changeTypeHandler.bind(this);
    this.changeNameHandler=this.changeNameHandler.bind(this);
    this.changeSizeHandler=this.changeSizeHandler.bind(this);
    this.changePriceHandler=this.changePriceHandler.bind(this);
    this.changeUnitsHandler=this.changeUnitsHandler.bind(this);
    this.updateShoe=this.updateShoe.bind(this);

    }

    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value})
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value})
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value})
    }

    changeSizeHandler= (event) => {
        this.setState({size: event.target.value})
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value})
    }

    changeUnitsHandler= (event) => {
        this.setState({units: event.target.value})
    }

    updateShoe = (e) => {
        e.preventDefault();
        let shoe= {brand: this.state.brand, 
                   type: this.state.type,
                   name: this.state.name,
                   size: this.state.size,
                   price: this.state.price,
                   units: this.state.units}

        console.log('shoe =>' +JSON.stringify(shoe));
        console.log('id => ' + JSON.stringify(this.state.id));
        ShoeService.updateShoe(shoe, this.state.id).then( res => {
            this.props.history.push('/view');
        });
        
        
    }

    cancel(){
        this.props.history.push('/view');
    }

    componentDidMount(){
        ShoeService.getShoeById(this.state.id).then( (res) =>{

            let shoe= res.data;
            this.setState(
                {brand: shoe.brand, 
                    type: shoe.type,
                    name: shoe.name,
                    size: shoe.size,
                    price: shoe.price,
                    units: shoe.units
                });
     
        });
    }


    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="card col-md-8 offset-md-0 offset-md-0">

                        <h3 className="text-center">Update Shoe</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Brand</label>
                                    <input  name="brand" className="form-control"
                                    value={this.state.brand}onChange={this.changeBrandHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Type</label>
                                    <input name="type" className="form-control"
                                    value={this.state.type}onChange={this.changeTypeHandler}/>
                                </div>


                                <div className="form-group">
                                    <label>Name</label>
                                    <input  name="name" className="form-control"
                                    value={this.state.name}onChange={this.changeNameHandler}/>
                                </div>


                                <div className="form-group">
                                    <label>Size</label>
                                    <input  name="size" className="form-control"
                                    value={this.state.size}onChange={this.changeSizeHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <input  name="price" className="form-control"
                                    value={this.state.price}onChange={this.changePriceHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Units</label>
                                    <input  name="units" className="form-control"
                                    value={this.state.units}onChange={this.changeUnitsHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updateShoe}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateShoesComponent
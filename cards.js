import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const cards = (props) => {
     
    return (
        <>  
            <div>
            
            <div className="card" >
                <img src={props.img} style={{width: 240}}className="card-img-top " alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">$ 200</p>
                        <a href="#" className="btn btn-primary ">Add items</a>
                        <a href="#" className="btn btn-success m-2">Make an offer</a>
                    </div>
            </div>
           
            
            
            </div>
        </>
    )
}

export default cards
import React from "react";


const Card = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary">Find Out More!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;
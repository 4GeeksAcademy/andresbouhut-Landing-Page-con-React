import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-secondary-subtle py-5">
            <div className="container ms-3">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quo consequatur dolores obcaecati
                    libero, eaque voluptatem dolore provident accusamus reprehenderit? Laboriosam consectetur
                    consequuntur, similique illo iusto suscipit recusandae fugiat quis?
                </p>
                <a className="btn btn-primary btn-lg mt-4" href="#" role="button">
                    Call to action!
                </a>
            </div>
        </div>
    );
};

export default Jumbotron;

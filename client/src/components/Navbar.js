import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div className="container-fluid bg-success d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <Link className="navbar-brand" to="/" style={{color: "white"}}>Top Rated Games</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;
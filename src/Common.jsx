import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
        return (
            <>
                <section id="header">
                    <div className="container-fluid">
                        <div className="row child">
                            <div className="mx-auto col-lg-10 col-12">
                                <div className="row child d-flex justify-content-center">
                                    <div className="col-lg-6 col-12 px-4 order-2 order-lg-1 order-lg-2 d-flex justify-content-center flex-column">
                                        <h1>
                                            {props.name} <br/> <strong>Hera Pvt. Ltd.</strong>
                                        </h1>
                                        <p className="text-capitalize">The One Man Army of Telented web developers. </p>
                                        <div className="pb-3">
                                            <NavLink className="get_strted_button" to={props.visite}>{props.btname}</NavLink>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 header-image py-5 order-1 order-lg-2 d-flex justify-content-center">
                                        <img src={props.imgsrc} alt="img" className=""  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};
export default Common;
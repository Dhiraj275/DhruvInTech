import React from 'react';

const Contact = () => {
    return (
        <>
            <form className="container my-5 mx-auto col-12 col-lg-4">
                <h5>Contact US Now!</h5>
                <div className="mb-3">
                    <label className="form-label" >Full Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone No.</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control"  ></textarea>
                </div>
                <button type="submit" className="card-btn">Submit</button>
            </form>
        </>
    );
};
export default Contact;

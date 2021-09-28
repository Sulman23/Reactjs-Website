import React, { useState } from 'react';

function Contact() {

  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    msg: '',
  });


  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`
     My Name is ${data.fullname}.
     My Email is ${data.email}.
     My Phone Number  is ${data.phone}.
     I want to say ${data.msg}.`);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Conatc Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-lg mx-auto mb-5">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input required
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@email.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input required
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="123456789" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit" >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

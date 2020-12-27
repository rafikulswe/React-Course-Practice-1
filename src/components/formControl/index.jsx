import React, { Component } from 'react';

class FormControl extends Component {
    state = { 
        email  : '',
        phone  : '',
        date   : '',
        country: '',
        gender: '',
        agree: false,
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() { 
        const {email, phone, country, date, gender, agree} = this.state;
        return ( 
            <div className="container">
                <div className="form-group row">
                    <label htmlFor="email" className="col-md-3">Email</label>
                    <input type="text" className="form-control col-md-9" id="email" name="email" onChange={this.handleChange} value={email} placeholder="Enter Your Email"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-md-3">Phone</label>
                    <input type="text" className="form-control col-md-9" id="phone" name="phone" onChange={this.handleChange} value={phone} placeholder="Enter Your Phone"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-md-3">Date</label>
                    <input type="date" className="form-control col-md-9" id="date" name="date" onChange={this.handleChange} value={date} placeholder="Enter Your Date"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="country" className="col-md-3">Country</label>
                    <select className="form-control col-md-9" id="country" name="country" onChange={this.handleChange} value={country}>
                        <option>Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Singapur">Singapur</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-md-2 pt-0">Gender</label>
                    <div className="col-md-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" onChange={this.handleChange} value="male"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" onChange={this.handleChange} value="female"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" onChange={this.handleChange} value="other"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                        </div>
                    </div>
                </div>
                <div className="from-group  col-md-9">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="agree" id="gridCheck" onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>console.log(this.state)}>Submit</button>
            </div>
        );
    }
}
 
export default FormControl;
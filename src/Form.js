import React, { Component } from 'react'
import "./index.css"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '' ,
            lastname: '' ,
            email: '' ,
            address: '' ,
            nin: '' ,
            number: '' ,
            dob: '' ,
            occupation: '' ,
            gender: '' ,
            origin: '' ,
            lga: '' ,
            votingstate: '' ,
            kinname: '' ,
            kinnumber: '' ,
            agree: '' 
        }
        
    }

    changeFirstname = (e) => {
        this.setState({
            firstname: e.target.value,
        })
    }

    changeLastname = (e) => {
        this.setState({
            lastname: e.target.value,
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    changeAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    changeNin = (e) => {
        this.setState({
            nin: e.target.value,
        })
    }

    changeNumber = (e) => {
        this.setState({
            number: e.target.value,
        })
    }

    changeDob = (e) => {
        this.setState({
            dob: e.target.value,
        })
    }

    changeOccupation = (e) => {
        this.setState({
            occupation: e.target.value,
        })
    }

    changeGender = (e) => {
        this.setState({
            gender: e.target.id,
        })
        console.log(this.state.gender)
    }

    changeOrigin = (e) => {
        this.setState({
            origin: e.target.value,
        })
    }

    changeLga = (e) => {
        this.setState({
            lga: e.target.value,
        })
    }

    changeVotingState = (e) => {
        this.setState({
            votingstate: e.target.value,
        })
    }

    changeKinname= (e) => {
        this.setState({
            kinname: e.target.value,
        })
    }

    changeKinNumber= (e) => {
        this.setState({
            kinnumber: e.target.value,
        })
    }

    changeKinRelationship= (e) => {
        this.setState({
            kinrelationship: e.target.value,
        })
    }

    changeAgree= (e) => {
        this.setState({
            agree: e.target.value,
        })
    }

    render() {
        return(
            <div className="learnstate">
                  <div className="container container-fluid">
                  {/* <div className="row"> */}

                    <form>

                        {/* <h3 style={{textAlign: "center"}}>Voter's Registration Form</h3> */}
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="firstname">First Name</label>
                                <input type="text" 
                                className="form-control" 
                                id="firstname" 
                                placeholder="First Name"
                                onChange={this.changeFirstname}
                                value={this.state.firstname} />     
                                {/* <small className="form-text text-muted">
                                    {this.state.firstname}
                                </small>                      */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="lastname">Last Name</label>
                                <input type="text" 
                                className="form-control" 
                                id="lastname" 
                                placeholder="Last Name" 
                                onChange={this.changeLastname}
                                value={this.state.lastname} />
                                {/* <small className="form-text text-muted">
                                    {this.state.lastname}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Email"
                                onChange={this.changeEmail}
                                value={this.state.email} />  
                                {/* <small className="form-text text-muted">
                                    {this.state.email}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Residential Address"
                                onChange={this.changeAddress}
                                value={this.state.address} />
                                {/* <small className="form-text text-muted">
                                    {this.state.address}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="nin">NIN Number</label>
                                <input type="number" 
                                className="form-control" 
                                id="nin" 
                                placeholder="NIN Number"
                                onChange={this.changeNin}
                                value={this.state.nin} />
                                {/* <small className="form-text text-muted">
                                    {this.state.nin}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="number">Phone Number</label>
                                <input type="number" 
                                className="form-control" 
                                id="number" 
                                placeholder="Phone Number"
                                onChange={this.changeNumber}
                                value={this.state.number} />
                                {/* <small className="form-text text-muted">
                                    {this.state.number}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="dob">Date of Birth</label>
                                <input type="date" 
                                className="form-control" 
                                id="dob" 
                                placeholder="Date of Birth"
                                onChange={this.changeDob}
                                value={this.state.dob} />
                                {/* <small className="form-text text-muted">
                                    {this.state.dob}
                                </small> */}
                            </div>

                            <div className="form-group col-md-6">
                                <label for="occupation">Occupation</label>
                                <input type="text" 
                                className="form-control" 
                                id="occupation" placeholder="Phone Number"
                                onChange={this.changeOccupation}
                                value={this.state.occupation} />
                                {/* <small className="form-text text-muted">
                                    {this.state.occupation}
                                </small> */}
                            </div>

                            <div className="form-group col-lg-12">
                                <h4>Kindly select your Gender</h4>
                                <div className="custom-control custom-radio">
                                    <input type="radio" 
                                    id="male" 
                                    name="customRadio" 
                                    className="custom-control-input"
                                    onClick={this.changeGender}
                                    value={this.state.gender} />
                                    <label className="custom-control-label" for="male">Male</label>                                    
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" 
                                    id="female" 
                                    name="customRadio" 
                                    className="custom-control-input"
                                    onClick={this.changeGender}
                                    value={this.state.gender}  />
                                    <label className="custom-control-label" for="female">Female</label>                                    
                                </div> 
                                {/* <small className="form-text text-muted">
                                    {this.state.gender}
                                </small> */}
                            </div>

                            <div className="form-group col-md-4">                                
                                <label for="origin">State of Origin</label>
                                <input type="text" 
                                className="form-control" 
                                id="origin" 
                                placeholder="State of Origin"
                                onChange={this.changeOrigin}
                                value={this.state.origin}  /> 
                                {/* <small className="form-text text-muted">
                                    {this.state.origin}
                                </small> */}
                            </div>

                            <div className="form-group col-md-4">                                
                                <label for="origin">LGA</label>
                                <input type="text" 
                                className="form-control" 
                                id="lga" placeholder="LGA"
                                onChange={this.changeLga}
                                value={this.state.lga}  />   
                                {/* <small className="form-text text-muted">
                                    {this.state.lga}
                                </small>                          */}
                            </div>

                            <div className="form-group col-md-4">                                
                                <label for="votingstate">Voting State</label>
                                <input type="text" 
                                className="form-control" 
                                id="votingstate" placeholder="Voting State"
                                onChange={this.changeVotingState}
                                value={this.state.votingstate}  />    
                                {/* <small className="form-text text-muted">
                                    {this.state.votingstate}
                                </small>                         */}
                            </div>

                            <hr />

                            <div className="form-group col-md-5">                                
                                <label for="kinname">Next of Kin Full Name</label>
                                <input type="text" className="form-control" id="kinname" placeholder="Next of Kin Full Name"
                                onChange={this.changeKinname}
                                value={this.state.kinname}  /> 
                                {/* <small className="form-text text-muted">
                                    {this.state.kinname}
                                </small>                            */}
                            </div>

                            <div className="form-group col-md-4">                                
                                <label for="kinnumber">Next of Kin Phone Number</label>
                                <input type="number" className="form-control" id="kinnumber" placeholder="Next of Kin Phone Number"
                                onChange={this.changeKinNumber}
                                value={this.state.kinnumber}  />
                                {/* <small className="form-text text-muted">
                                    {this.state.kinnumber}
                                </small>   */}
                            </div>

                            <div className="form-group col-md-3">
                                <label for="kinrelationship">Relationship With Next of Kin</label>
                                <input type="text" className="form-control" id="kinrelationship" placeholder="Relationship"
                                onChange={this.changeKinRelationship}
                                value={this.state.kinrelationship}  />  
                                {/* <small className="form-text text-muted">
                                    {this.state.kinrelationship}
                                </small>                           */}
                            </div>       
                        </div>

                        <hr />

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="agree" value="accept"
                            onChange={this.changeAgree}
                            value={this.state.agree}  />
                            <label className="form-check-label" for="agree">I hereby agree that I am a citizen of Nigeria and I am liable to legal prosecution for false Information.</label>
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary">Register</button>

                        

                                              

                        

                        
                    </form>
                    {/* </div>*/}

                </div>  
                
                





                
            </div>
        )
    }
}

// 

export default Form;
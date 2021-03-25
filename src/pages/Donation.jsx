import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React, { Component } from 'react'
import { donateItem } from '../Redux/Actions/itemAction'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DonationGoogleMap from '../components/DonationGoogleMap'

class Donation extends Component {
  state = {
    file: '',
    lat: '',
    long: ''
  }

  onChangeHandleFile = (e) => {
    console.log(e.target.files[0])
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      this.setState(state => ({
        ...state,
        form: {
          file: [reader.result]
        }
      }));
      const url = reader.result;
      //console.log("#####", url);
      //Call Parent Component Method
      this.props.picUpload(url)
    },
      false
    );
  };

  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.someCallback(value);
  }

  handleSubmit() {
    this.props.donateItem(this.state.file, this.props.history) // componentDidMount
  }
  getLatLong = (lat, lng) => {
    this.setState({ lat: lat, long: lng })
  }


  render() {

    return (
      <div>
        <Navbar />
        <MDBContainer>
          <br />
          <MDBRow>
            <MDBCol>
              <div>
                <h3>Donation</h3>
                <hr />
                <MDBCol col-md-1>
                  <MDBInput label="Item name" type="text" validate error="wrong" />
                  <MDBInput label="Item category" type="text" validate error="wrong" />
                  <MDBInput type="textarea" label="Enter the item description here" rows="5" />

                  <h6>Select Category (Press Ctrl to select multiple options)</h6>
                  <select placeholder class="browser-default custom-select" multiple={true} value={this.props.arrayOfOptionValues} onChange={this.multipleOptions}>
                    <option value={1}>Home and Living</option>
                    <option value={2}>Sports</option>
                    <option value={3}>Electronics</option>
                  </select>

                  <p></p>

                  <h6>Upload Image</h6>
                  <input onChange={this.onChangeHandleFile}
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                  />
                </MDBCol>
                <img src={this.state.file} width='500' height='500' />

              </div>
            </MDBCol>
            <MDBCol>
              <h3>Map Location</h3>
              <hr />
              <DonationGoogleMap latlong={this.getLatLong} />
              Lat: {this.state.lat} Long: {this.state.long}
            </MDBCol>
          </MDBRow>
          <MDBBtn color="mdb-color" onClick={this.handleSubmit}>Upload </MDBBtn>
        </MDBContainer>
        <Footer />
      </div>
    )
  }
}
export default Donation
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn} from 'mdbreact'
import React, { Component } from 'react'
import { donateItem } from '../Redux/Actions/itemAction'
//import GoogleMap from '../components/GoogleMap'

 class Donation extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.previewImage = this.previewImage.bind(this)
    }
    previewImage(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

      handleChange=(e) => {
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


    render() {
        
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <div>
                            <h3>Donation</h3>
                        <MDBCol col-md-1>
                        <MDBInput label="Item name" type ="text" validate error="wrong" />
                        <MDBInput label="Item category" type ="text" validate error="wrong" />
                        <MDBInput type="textarea" label="Enter the item description here" rows="5" />

                        <h6>Select Category (Press Ctrl to select multiple options)</h6>
                        <select placeholder class="browser-default custom-select"  multiple={true} value={this.props.arrayOfOptionValues} onChange={this.multipleOptions}>
                        <option value={1}>Home and Living</option>
                        <option value={2}>Sports</option>
                        <option value={3}>Electronics</option>
                        </select>
                        
                        <p></p>

                        <h6>Upload Image</h6>
                        <MDBInput type="file"  id="inputGroupFile01" onChange={this.previewImage} /> 
                        </MDBCol>
                            <img src={this.state.file} width='500' height='500'/>     
                            
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <h3>Map Location</h3>
                        {/* <GoogleMap /> */}
                    </MDBCol>
                </MDBRow>
                <MDBBtn color="mdb-color" outline onPress={this.handleSubmit}>Upload </MDBBtn>
            </MDBContainer>

        )
    }
}
export default Donation
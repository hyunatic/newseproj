import React, { Component } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdbreact';


export default class Uploadfile extends Component {

    state = {
        form: {
            file: []
        }
    }

    onChangeHandleFile = (e) => {
        var file = e.target.files[0];
        let file_size = e.target.files[0].size;
        if (file_size < 1000000) {
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
        }
        //1000000 is 1MB
        else if(file_size > 1000000){
            alert("File too big")
        }
    };


    render() {
        return (
            <MDBInputGroup id='file'
                inputs={
                    <div className="custom-file">
                        <input onChange={this.onChangeHandleFile}
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                }
                containerClassName="mb-3"
            />
        )
    }
}

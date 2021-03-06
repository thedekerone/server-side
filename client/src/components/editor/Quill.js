import ReactQuill from 'react-quill'; // ES6
import React, {Component} from 'react'
import 'react-quill/dist/quill.snow.css';
export default class Quill extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  handleChange(value) {
    this.setState({ text: value })

    this.props.returnf(value)
  }

 
  render() {
    return (
      <ReactQuill theme="snow" formats={this.formats} modules={this.modules} value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}
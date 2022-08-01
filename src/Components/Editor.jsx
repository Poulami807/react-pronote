
import {React, useState} from 'react'
import '../editor.css'

function Editor() {

  let [val ,setVal]=useState('')
  let handleChange = (e) =>{
    setVal(e.target.value)
  }
  return (
    <>
    <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(e)=>handleChange(e)} defaultValue={val}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{val}</div>
                </div>                
            </div>
    </>
  )
}

export default Editor


/* Class Component

import React, { Component } from 'react'
import '../editor.css'


class Editor extends Component {
 constructor(){
    super()
    this.state = {
        val:''
    }
 }
 handleChange = (e) =>{
    this.setState({val:e.target.value})
  }
  render() {
    return (
        <>
    <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(e)=>this.handleChange(e)} defaultValue={this.state.val}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.val}</div>
                </div>                
            </div>
    </>
    )
  }
}

export default Editor
*/

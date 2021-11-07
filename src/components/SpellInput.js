import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'

export class SpellInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShown:true,
      shownText:"",
      checking:false,
      spellingErrors:['akdl']
    }
  }

  checkSpell(){
    this.setState({checking:true})
    console.log(this.state.shownText)
    const option = {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({text:this.state.shownText})
    }

    console.log(option)
    fetch("https://text-bebas-2.herokuapp.com/spell_check",option)
      .then(response => response.json())
      .then(data => {
        this.setState({spellingErrors:data.result.possible_spell_error})
        console.log(data.result)
        this.setState({checking:false})
      })
  }

  updateText(e){
    this.setState({shownText:e.target.value})
  }

  render() {

    return (
      <div className="mt-2">
        <div className="w-full">
          <label className="block mb-2 text-lg font-medium text-gray-600 text-left">Input Text</label>
          <textarea onChange={this.updateText.bind(this)} className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none focus:ring"></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button 
            onClick={this.checkSpell.bind(this)}
            disabled={this.state.checking} 
            className="px-4 py-2 text-white disabled:bg-gray-200 transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:focus:bg-gray-700"
            >
            {this.state.checking? 'Checking...' : 'Check Spelling'}
          </button>
        </div>
        {this.state.isShown && 
        
          <div className="mt-6 text-left">
            <label className="block mb-2 text-lg font-medium text-gray-600 text-left py-3">Result</label>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={this.state.spellingErrors}
              autoEscape={true}
              textToHighlight={this.state.shownText}
            />
          </div>
        }
      </div>
    )
  }
}

export default SpellInput

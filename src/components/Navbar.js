import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white shaadow-md">
        <div className="container flex items-center justify-center mx-auto p-6">
          <div>
            <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700" href="/">Spell Checker Test</a>
          </div>
        </div>
      </nav>
    )
  }
}

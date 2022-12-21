//apps.js file hi render hoti hai
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {
  pageSize = 20;

  state = {
    progress: 10
  }
  setProgress = ( progress ) => {
    this.setState( { progress: progress } )
  }

  // render() ek lifecycle method h.Jab react ek commponent ko  load krti hai to ek series of methods run hote hai.Iska kaam hai screeen pe html ko render karna (pahle jsx ko html mei compile krna uske baad html ko render krega )
  render () {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}

          />

          {/* we are providing unique key props in route jisse force remount ho ske */}
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />

            <Route path="/business " element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />} />

            <Route path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science " country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key=" sports" country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>

      </div>
    )
  }
}

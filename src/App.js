import React from "react"
import Header2 from "./components/Header2"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import BookingScreen from "./screens/BookingScreen"
import InfoScreen from "./screens/InfoScreen"
import PoliciesScreen from "./screens/PoliciesScreen"
import PortfolioScreen from "./screens/PortfolioScreen"
import ContactScreen from "./screens/ContactScreen"

function App() {
  return (
    <Router>
      <Header2 />
      <Route path="/booking" component={BookingScreen} />
      <Route path="/portfolio" component={PortfolioScreen} />
      <Route path="/policies" component={PoliciesScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/info" component={InfoScreen} />
      <Route path="/home"  component={HomeScreen} />
      <Route path="/" exact component={HomeScreen} />
    </Router>
  )
}

export default App

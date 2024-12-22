// import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';
// import './Styles.css';
// // import MainContent from './MainContent'; // Component where the content is displayed

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />  {/* Header component */}
//         <Switch>
//           <Route path="/" exact component={MainContent} />
//           {/* Add other routes here */}
//         </Switch>
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes and Route here
import Header from './Header'; // Your header component
import MainContent from './MainContent'; // Your main content component
import Footer from './Footer';
import './Styles.css';
import About from './about';
import Contact from './Contact'
import Courses from "./Courses";

function App() {
  return (
    <Router>
      <Header />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<MainContent />} />  {/* Use element prop for the component */}
        <Route path="/about" element={<About />} />  {/* Use element prop for the component */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        {/* Add more routes if needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


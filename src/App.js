import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import PrisonForm from './components/PrisonForm';
import CustomNavbar from './components/CustomNavbar';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <CustomNavbar/>
          <Routes>
            <Route path="/" element={<PrisonForm />} />
            <Route path= "/list" element={<List/>}/>
            <Route path="/PrisonForm/*" element={<PrisonForm/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

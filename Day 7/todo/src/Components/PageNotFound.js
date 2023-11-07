import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => (
  <>
    <div className='container text-center'>
      <br></br>
      <img src="/img/404.jpg" style = {{width : '50%'}} alt="Page not found"></img>
      <br></br>
      <br></br>
      <h2 className="not-found">Page not found!</h2>
      <br></br>
      <br></br>
      <h2 className="not-found"><Link to={`/`} >Back to Home!</Link></h2>
      <br></br>
      <br></br>
    </div>
  </>
);

export default PageNotFound;
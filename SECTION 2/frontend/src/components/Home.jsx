import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      
      <p style={{fontSize : '50px', backgroundColor: 'blueviolet'}}> Inline CSS in JSX</p>
      
      <p className='myclass'>We use className here is JSX</p>
      
      <input type="text" />
      <br />
      <br />
    </div>
  )
}

export default Home;
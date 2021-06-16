import React from "react";
const App=()=> {
  return (
    <main>
      <section className='header'>
        <h2 className='name'>Color Generator</h2>
        <form className='form'>
          <input type='text' className='picker' />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colorContainer'>
        
      </section>
    </main>
  );
}

export default App;

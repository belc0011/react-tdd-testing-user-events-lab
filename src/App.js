import React, {useState} from "react"

function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    setFormIsSubmitted(true);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Newsletter Signup</h2>
          <label htmlFor="name">Name: </label>
          <input
          type="text"
          id="name"
          placeholder="enter name"
          onChange={handleName}
          />
          <label htmlFor="email">Email address: </label>
          <input
          type="text"
          id="email"
          placeholder="enter email"
          onChange={handleEmail}
          />
          <div>
            <h3>Newsletter Topics:</h3>
            <div>
              <label htmlFor="javascript-methods">Javascript methods </label>
              <input
              type="checkbox"
              id="javascript-methods"
              name="javascript-methods"
              />
            </div>
            <div>
              <label htmlFor="coding-memes">Coding memes </label>
              <input
              type="checkbox"
              id="coding-memes"
              name="coding-memes"
              />
            </div>
            <div>
              <label htmlFor="github-for-dummies">GitHub for dummies</label>
              <input
              type="checkbox"
              id="github-for-dummies"
              name="github-for-dummies"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {formIsSubmitted ? <h2>Thank you, {name}, for your submission!</h2> : null}
      </div>
    </main>
  );
}

export default App;

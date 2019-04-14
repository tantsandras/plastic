import React from "react"
import { Link } from "gatsby"

class RegisterForm extends React.Component {
  state = {
    name: "",
    email: "",
    description: "",
    imageUrl: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

  }
  render() {
    return (
      <section id="register" title="register">
        <form onSubmit={this.handleSubmit} >
          <h2>REGISTER A SOLUTION</h2>
          <ul className="form" id="register">
          <div>

              <input pattern="^[^<>]+$" name='name' type='text' id="name"
              className="field-long" placeholder="Type your name here" required onChange={this.handleInputChange} value={this.state.name} />
        </div>
        <div>

              <input type="email" pattern="^[^<>]+$" name='email' id="email" className="field-long"
              placeholder="Enter your email here" required onChange={this.handleInputChange} value={this.state.email} />
      </div>
      <div>

              <textarea pattern="^[^<>]+$" name='description' type='text'
              id="description" className="field-long" placeholder="Provide a short description of your solution"
              required onChange={this.handleInputChange} value={this.state.description} style={{height: 200}}/>
      </div>
      <div>

              <input pattern="^[^<>]+$" name='imageUrl' type='url' id="image-url"
              className="field-long" placeholder="Paste your image url here" onChange={this.handleInputChange} style={{height: 200}} value={this.state.imageUrl} />
      </div>
            <button type="submit" className="button-submit"><Link to="/solution/" state={{ formData: this.state }}>Register</Link></button>
          </ul>
        </form>
      </section>
    )

  }
}
export default RegisterForm
import React from "react"
import formStyle from "./form.css"

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
        console.log(this.state)
      }
    render() {
        return (
<section id="register" title="register">
    <form onSubmit={this.handleSubmit} style={formStyle}>
        <h2>Register</h2>
        <ul className="form" id="register">
            <label htmlFor="name">Name</label><input pattern="^[^<>]+$" name='name' type='text' id="name"
                className="field-long" placeholder="Type your name here" required onChange={this.handleInputChange} value={this.state.name} />
            <label htmlFor="email">Email</label><input type="email" pattern="^[^<>]+$" name='email' id="email" className="field-long"
                placeholder="Enter your email here" required onChange={this.handleInputChange} value={this.state.email} />
            <label htmlFor="description">Description</label><input pattern="^[^<>]+$" name='description' type='text'
                    id="description" className="field-long" placeholder="Provide a short description of your solution"
                    required onChange={this.handleInputChange} value={this.state.description}/>
              <label htmlFor="image-url">Image</label><input pattern="^[^<>]+$" name='imageUrl' type='url' id="image-url"
                    className="field-long" placeholder="Paste your image url here" onChange={this.handleInputChange} value={this.state.imageUrl}/>
            <button type="submit" className="button-submit">Register</button>
        </ul>
    </form>
</section>
)

    }
}
export default RegisterForm
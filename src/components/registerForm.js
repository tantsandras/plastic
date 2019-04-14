import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

class RegisterForm extends React.Component {
  state = {
    name: "",
    email: "",
    description: "",
    imageUrl: "",
    videoUrl: "",
    longDescription: "",
    bestUse: "",
    typeOfPlastic: "",
    timeRequired: "",
    patented: '',
    institute: "",
    solutionType: 'replace'
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
    const prevSolutions = window.localStorage.getItem(this.state.solutionType)
    const parsedPrevSolutions = prevSolutions ? JSON.parse(prevSolutions) : []

    const hasBeenAdded = parsedPrevSolutions.reduce((acc, curr) => {
      if (curr.name === this.state.name) return true;
      return acc
    }, false)

    if (hasBeenAdded) {
      alert('Name has already been used - please use another')
      return
    }

    const result = prevSolutions ? [...parsedPrevSolutions, this.state] : [this.state]
    window.localStorage.setItem(this.state.solutionType, JSON.stringify(result))
    navigate(`/${this.state.solutionType}/`)
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

              <input type="institute" name='institute' id="institute" className="field-long"
                placeholder="Enter your institute here" onChange={this.handleInputChange} value={this.state.institute} />
            </div>
            <div>

              <input type="bestUse" name='bestUse' id="bestUse" className="field-long"
                placeholder="Best Use" onChange={this.handleInputChange} value={this.state.bestUse} />
            </div>
            <div>
              <input type="typeOfPlastic" name='typeOfPlastic' id="typeOfPlastic" className="field-long"
                placeholder="Type of Plastic" onChange={this.handleInputChange} value={this.state.typeOfPlastic} />
            </div>
            <div>
              <input type="timeRequired" name='timeRequired' id="timeRequired" className="field-long"
                placeholder="Time Required" onChange={this.handleInputChange} value={this.state.timeRequired} />
            </div>
            <div>

              <textarea pattern="^[^<>]+$" name='description' type='text'
                id="description" placeholder="Provide a short description of your solution"
                required onChange={this.handleInputChange} className="field-long" value={this.state.description} style={{ height: 100 }} />
            </div>

            <div>

              <textarea pattern="^[^<>]+$" name='longDescription' type='text'
                id="longDescription" className="field-long" placeholder="Provide a longer description of your solution"
                required onChange={this.handleInputChange} value={this.state.longDescription} style={{ height: 200 }} />
            </div>

            <div>

              <input pattern="^[^<>]+$" name='imageUrl' type='url' id="image-url"
                placeholder="Paste your image url here" onChange={this.handleInputChange} value={this.state.imageUrl} />
            </div>

            <label htmlFor="solutionType" style={{ margin: `10px`}}>Select a Stage:</label>

            <div style={{margin: `5px`}}>
            <div>

              <input pattern="^[^<>]+$" name='videoUrl' type='url' id="video-url"
                placeholder="Paste any video urls here" onChange={this.handleInputChange} value={this.state.videoUrl} />
            </div>


            <div>
              <label htmlFor="patented">Is the solution patented:</label>
              <select name="patented" onChange={this.handleInputChange} >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div>
              <label htmlFor="solutionType">Select a Stage:</label>
              <select name="solutionType" onChange={this.handleInputChange} >
                <option value="replace">Stage 1: Start of Life</option>
                <option value="recycle">Stage 2: Mid-Life/Recycling</option>
                <option value="dispose">Stage 3: End of Life</option>
              </select>
            </div>
            <button type="submit" className="button-submit" style={{ marginTop: `1rem`, border: `none`, padding:`10px 20px`, borderRadius: `5px` }}>Add</button>
          </url>
        </form>
      </section >
    )

  }
}
export default RegisterForm

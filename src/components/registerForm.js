import React from "react"
import formStyle from "./form.css"

const RegisterForm = () => (
<section id="register" title="register">
    <form style={formStyle}>
        <h2>Register</h2>
        <ul class="form" id="register">
            <label for="name">Name</label><input pattern="^[^<>]+$" name='name' type='text' id="name"
                class="field-long" placeholder="Type your name here" required />
            <label for="email">Email</label><input type="email" pattern="^[^<>]+$" name='email' id="email" class="field-long"
                placeholder="Enter your email here" required />
            <label for="description">Description</label><input pattern="^[^<>]+$" name='description' type='text'
                    id="description" class="field-long" placeholder="Provide a short description of your solution"
                    required />
              <label for="image-url">Image</label><input pattern="^[^<>]+$" name='image' type='url' id="image-url"
                    class="field-long" placeholder="Paste your image url here" />
            <button type="submit" class="button-submit">Register</button>
        </ul>
    </form>
</section>
)

export default RegisterForm
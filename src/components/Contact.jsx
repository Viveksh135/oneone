import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>
                Contact Us
            </h1>
            <form >
            <div>
                <label >Name</label>
                <input type="text" required placeholder="enter your name" />
            </div>
            <div>
                <label >Email</label>
                <input type="email" required placeholder="enter your email" />
            </div>
            <div>
                <label >Message</label>
                <input type="text" required placeholder="tell us about your query" />
            </div>
               <button type="submit">send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
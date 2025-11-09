
const Contact = () => {
    return (
        <main className="container">
            <section className="main-section">
                <h2 className="title">Get In Touch</h2>
                <p className="subtitle">Please contact me directly at srisha.reddy@gmail.com or through this form. </p>
                <form className="contact-form">
                    <div className="input-section">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-section">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-section">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div className="submit-div">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Contact;
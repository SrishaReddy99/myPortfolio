
const Body = () => {
    return (
        <main className="container">
            <section className="title">
                <div className="title-text">
                    <h3>Hi, I am </h3>
                    <h1 style={{ marginBottom: '0px' }}>Srisha Reddy</h1>
                    <p className="subtitle">
                        <span className="role">Frontend Developer</span>
                    </p>
                    <p className="intro">I develop accessible, high-performance, responsive user 
                        interfaces using <span className="intro-highlight">React JS</span> and 
                        <span className="intro-highlight">modern JavaScript</span>. 
                        Currently consolidating example projects — feel free to explore my GitHub 
                        or contact me to discuss collaborations or opportunities.</p>

                    <div className="social">
                        <a href="https://github.com/yourusername" className="social-btn" aria-label="GitHub" title="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.53 5.47 7.57.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82A7.48 7.48 0 0112 6.8c.68.003 1.36.092 2 .27 1.52-1.04 2.19-.82 2.19-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0020 10c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/srisha-reddy-a38468189/" className="social-btn" aria-label="LinkedIn" title="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src='/profile.jpeg' alt="Srisha Reddy" className="avatar"/>
                    <p className='available'><span className='online-dot'></span> Available for work!</p>
                </div>
            </section>
        </main>
    )
}

export default Body;
import './About.css';

function About() {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Node.js', level: 75 },
        { name: 'UI/UX Design', level: 70 }
    ];

    const technologies = [
        'React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 
        'Node.js', 'Git', 'REST APIs', 'Figma', 'MongoDB', 'Firebase'
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                
                <div className="about-content">
                    <div className="about-text">
                        <div className="intro">
                            <h3>Building Digital Experiences That Matter</h3>
                            <p>
                                I'm a passionate <strong>Frontend Developer</strong> with a keen eye for 
                                detail and a commitment to creating exceptional user experiences. 
                                With expertise in modern JavaScript frameworks and a strong 
                                foundation in web fundamentals, I bridge the gap between design 
                                and technology.
                            </p>
                        </div>

                        <div className="experience-highlights">
                            <div className="highlight-card">
                                <div className="highlight-number">2+</div>
                                <div className="highlight-text">Years of Experience</div>
                            </div>
                            <div className="highlight-card">
                                <div className="highlight-number">50+</div>
                                <div className="highlight-text">Projects Completed</div>
                            </div>
                            <div className="highlight-card">
                                <div className="highlight-number">100%</div>
                                <div className="highlight-text">Client Satisfaction</div>
                            </div>
                        </div>

                        <div className="what-i-do">
                            <h4>What I Do</h4>
                            <div className="services-grid">
                                <div className="service-item">
                                    <div className="service-icon">⚡</div>
                                    <h5>Fast Performance</h5>
                                    <p>Optimized applications with lightning-fast load times</p>
                                </div>
                                <div className="service-item">
                                    <div className="service-icon">📱</div>
                                    <h5>Responsive Design</h5>
                                    <p>Beautiful layouts that work on any device</p>
                                </div>
                                <div className="service-item">
                                    <div className="service-icon">🔍</div>
                                    <h5>SEO Friendly</h5>
                                    <p>Websites that rank well and reach audiences</p>
                                </div>
                                <div className="service-item">
                                    <div className="service-icon">🚀</div>
                                    <h5>Modern Tech</h5>
                                    <p>Using latest technologies and best practices</p>
                                </div>
                            </div>
                        </div>

                        <div className="skills-section">
                            <h4>Technical Skills</h4>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tech-stack">
                            <h4>Technologies I Work With</h4>
                            <div className="tech-tags">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="cta-buttons">
                            <button className="btn btn-primary">Download Resume</button>
                            <button className="btn btn-secondary">Let's Talk</button>
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    );
}

export default About;
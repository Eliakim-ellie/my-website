import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
  e.preventDefault();
   console.log("Form submitted");
  setIsSubmitting(true);

  const { name, email, subject, message } = formData;

  emailjs
    .send(
      'service_xpcfyey',     
      'template_dffpmvd',   
      {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message,
      },
      'Qm_ppIv8ZqfbdatYY'              
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error('Email failed to send:', error);
      setSubmitStatus('error');
    });
};


    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            ),
            title: 'Email',
            value: 'eliakimellie123@gmail.com',
            link: 'mailto:eliakimellie123@gmail.com'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
            ),
           title: 'Phone',
           value: '+254 741 960 035',
           link: 'tel:+254741960035'

        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            ),
            title: 'Location',
            value: 'Nairobi,Kenya',
            link: "https://www.google.com/maps/@-1.381681,36.7711766,15z?entry=ttu"
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            url: 'https://github.com/Eliakim-ellie'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            url: 'https://linkedin.com/in/Walela Eliakim'
        },
        {
            name: 'watsapp',
            icon: (
         <svg width="24" height="24"viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.004 2.004c-5.514 0-9.996 4.482-9.996 9.996 0 1.762.463 3.485 1.34 5.006l-1.43 5.234 5.367-1.407a9.93 9.93 0 0 0 4.719 1.197h.001c5.514 0 9.996-4.482 9.996-9.996s-4.482-9.996-9.996-9.996zm0 18.16c-1.512 0-2.995-.393-4.297-1.138l-.307-.175-3.181.834.85-3.106-.199-.318a8.15 8.15 0 0 1-1.27-4.428c0-4.505 3.665-8.17 8.17-8.17s8.17 3.665 8.17 8.17-3.665 8.17-8.17 8.17zm4.686-6.108c-.256-.128-1.512-.744-1.746-.828-.234-.085-.405-.128-.576.128-.171.256-.66.828-.81.998-.149.171-.298.192-.554.064-.256-.128-1.08-.398-2.057-1.27-.76-.678-1.272-1.515-1.422-1.771-.149-.256-.016-.395.112-.523.115-.114.256-.298.384-.446.128-.149.171-.256.256-.427.085-.171.043-.32-.021-.448-.064-.128-.576-1.389-.789-1.905-.208-.5-.421-.43-.576-.438l-.492-.008c-.149 0-.384.056-.586.278-.202.223-.77.752-.77 1.832s.789 2.125.898 2.272c.107.149 1.551 2.368 3.757 3.322.525.227.934.362 1.252.464.526.168 1.004.144 1.383.087.422-.063 1.291-.527 1.474-1.036 .183-.51.183-.949.128-1.036-.064-.085-.234-.128-.49-.256z"/>
       </svg>
            ),
            url: 'https://wa.me/254741960035'
        }


    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Ready to bring your ideas to life? Let's discuss your next project.
                </p>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p className="info-description">
                            I'm always open to discussing new opportunities, 
                            creative projects, or potential collaborations. 
                            Feel free to reach out through any of the platforms below.
                        </p>

                        <div className="contact-methods">
                            {contactInfo.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.link}
                                    className="contact-method"
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    <div className="method-icon">
                                        {item.icon}
                                    </div>
                                    <div className="method-details">
                                        <span className="method-title">{item.title}</span>
                                        <span className="method-value">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="availability">
                            <div className="availability-badge">
                                <div className="status-dot"></div>
                                Available for new projects
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    ✅ Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
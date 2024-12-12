




// ContactPage.js


import React, { useState } from "react";

function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Full name must be at least 3 characters.";
        }

        if (formData.subject.trim().length < 3) {
            newErrors.subject = "Subject must be at least 3 characters.";
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (formData.body.trim().length < 3) {
            newErrors.body = "Message must be at least 3 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            setFormData({ fullName: "", subject: "", email: "", body: "" });
            setErrors({});
            alert("Thank you for your message!");
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    />
                    {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    />
                    {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleInputChange}
                        rows="5"
                        style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
                    ></textarea>
                    {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactPage;

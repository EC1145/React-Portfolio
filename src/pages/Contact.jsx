import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = "Name is required";
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the form
      console.log(formState);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

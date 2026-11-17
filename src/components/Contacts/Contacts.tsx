"use client";

import { useState } from "react";
import css from "./Contacts.module.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type FormTouched = Partial<Record<keyof FormData, boolean>>;

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

const LIMITS = {
  name: { min: 3, max: 50 },
  email: { min: 5, max: 100 },
  message: { min: 20, max: 1000 },
};

export default function Contacts() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [touched, setTouched] = useState<FormTouched>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const validateField = (name: keyof FormData, value: string): string => {
    const trimmedValue = value.trim();
    const limits = LIMITS[name];

    if (!trimmedValue) {
      return "This field is required";
    }

    if (trimmedValue.length < limits.min) {
      return `Minimum ${limits.min} characters required`;
    }

    if (value.length > limits.max) {
      return `Maximum ${limits.max} characters allowed`;
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(trimmedValue)) {
        return "Please enter a valid email";
      }
    }

    return "";
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as keyof FormData;

    setForm((prev) => ({ ...prev, [field]: value }));
    setStatus("");

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = event.target.name as keyof FormData;

    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${css.contacts} section`} id="contacts">
      <div className={`${css.container} container`}>
        <div className={css.contactsContent}>
          <span className="section-label">LET'S CONNECT</span>

          <h2>
            Have an idea?<span> Let's make it work.</span>
          </h2>

          <p>
            Whether you have a project in mind, need help improving an existing
            product, or are looking for a junior developer to join your team,
            I'd be happy to hear from you. I value clear communication,
            thoughtful collaboration, and projects where everyone cares about
            the result. You don't need to have every detail figured out before
            reaching out. Sometimes a conversation is the best place to start.
            Let's talk about what we could build together.
          </p>

          <div className={css.contactsLinks}>
            <a href="carasyulia@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Yulia2123"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <form className={css.contactsForm} onSubmit={handleSubmit} noValidate>
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? css.inputError : ""}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className={css.errorText}>
              {errors.name}
            </span>
          )}

          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? css.inputError : ""}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={css.errorText}>
              {errors.email}
            </span>
          )}

          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your project..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? css.inputError : ""}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className={css.errorText}>
              {errors.message}
            </span>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className={css.successMessage} role="status">
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className={css.errorMessage} role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

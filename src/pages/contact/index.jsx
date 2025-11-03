import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Define validation schema with Yup
const schema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("📩 Contact Form Submitted:", data);
    alert("✅ Message sent successfully!");
    reset();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>📬 Contact Us</h1>

      {isSubmitSuccessful && (
        <p
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          ✅ Thank you! Your message has been sent.
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Full Name:</label>
          <input
            {...register("fullName")}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <p style={{ color: "red" }}>{errors.fullName?.message}</p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            {...register("email")}
            type="email"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Subject:</label>
          <input
            {...register("subject")}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <p style={{ color: "red" }}>{errors.subject?.message}</p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label>
          <textarea
            {...register("message")}
            rows="5"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <p style={{ color: "red" }}>{errors.message?.message}</p>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Send Message ✉️
        </button>
      </form>
    </div>
  );
}

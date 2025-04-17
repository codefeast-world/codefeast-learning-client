"use client"

import type React from "react"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { FormData, FormErrors } from "@/types"

type Subject = "General Inquiry" | "Technical Support" | "Billing Question"


export default function ContactComponent() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phoneNumber && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))

    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setIsSubmitting(true)
    console.log("Form data :", formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        console.log("Form submission failed:", data.error)
      } else {
        console.log("Form submitted successfully!", data)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          subject: "General Inquiry",
          message: "",
        })
        setIsSuccess(true)
      }
    } catch (error) {
      console.log("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects: Subject[] = ["General Inquiry", "Technical Support", "Billing Question"]

  return (
    <section className="container mx-auto py-16 md:py-24 px-10 md:px-28">
      {/* Contact Form */}
      <div className="bg-[#148BE721] dark:bg-gradient-to-b from-[#141414] to-black rounded-3xl px-10 md:px-12 lg:px-24 pt-10 md:pt-24 border-[1px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-[#333333] dark:text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className={`w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] rounded-xl p-3 text-[#333333] dark:text-gray-300 focus:outline-none focus:ring-1 ${
                errors.firstName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#333333] dark:border-[#333] focus:ring-blue-500"
              }`}
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-[#333333] dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className={`w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] rounded-xl p-3 text-[#333333] dark:text-gray-300 focus:outline-none focus:ring-1 ${
                errors.lastName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#333333] dark:border-[#333] focus:ring-blue-500"
              }`}
              required
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-[#333333] dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className={`w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] rounded-xl p-3 text-[#333333] dark:text-gray-300 focus:outline-none focus:ring-1 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#333333] dark:border-[#333] focus:ring-blue-500"
              }`}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-[#333333] dark:text-white">
              Phone
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone"
              className={`w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] rounded-xl p-3 text-[#333333] dark:text-gray-300 focus:outline-none focus:ring-1 ${
                errors.phoneNumber
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#333333] dark:border-[#333] focus:ring-blue-500"
              }`}
            />
            {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block mb-2 text-[#333333] dark:text-white">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] border-[#333333] dark:border-[#333] rounded-lg p-3 dark:text-gray-300 text-[#333333] appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-[#333333] dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            className={`w-full bg-[#33333305] dark:bg-[#1a1a1a] border-[0.75px] rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-1 ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-[#333333] dark:border-[#333] focus:ring-blue-500"
            }`}
            required
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-base text-center w-full max-w-xs text-white py-5 px-4 translate-y-8 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {isSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-xl border border-blue-200 dark:border-blue-900">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <svg
                    className="h-10 w-10 text-green-500 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your message has been received. Our team will reach out to you very soon!
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-white px-5 py-2.5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[var(--gray-light)] py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--text-primary)]">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)]">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:border-[var(--accent)] focus:ring-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)]">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:border-[var(--accent)] focus:ring-[var(--accent)]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)]">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:border-[var(--accent)] focus:ring-[var(--accent)]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-white py-2 px-4 rounded-md hover:bg-[var(--accent-hover)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

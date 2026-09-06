import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { site } from '../../lib/site'

const projectTypes = [
  'Brand Identity',
  'Logo Design',
  'Graphic Design',
  'Social Media Design',
  'Marketing Materials',
  'Creative Design',
  'Other',
] as const

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}

/**
 * Contact form with complete client-side validation.
 *
 * No backend is wired up yet — build the request payload inside handleSubmit
 * and connect it to your email service of choice (EmailJS, Formspree, Resend,
 * or a custom API endpoint) by uncommenting the fetch call.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!projectType) next.projectType = 'Please choose a project type.'
    if (!message.trim() || message.trim().length < 10) {
      next.message = 'Please tell me a little more about your project (at least 10 characters).'
    }
    return next
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    const payload = {
      name: name.trim(),
      email: email.trim(),
      projectType,
      message: message.trim(),
    }

    const delivered = await deliverInquiry(payload)

    // No backend is wired up yet, so we never pretend the message was sent
    // successfully. See deliverInquiry below for where to connect EmailJS,
    // Formspree, Resend or a custom API endpoint.
    if (delivered) {
      setName('')
      setEmail('')
      setProjectType('')
      setMessage('')
      setStatus('success')
      setStatusMessage(
        'Thank you — your message has been sent. I will get back to you soon.'
      )
      return
    }

    setStatus('error')
    setStatusMessage(
      'This form is not connected to an email service yet. Please reach out directly at ' +
        site.email +
        ' and I will get back to you.'
    )
  }

  async function deliverInquiry(data: {
    name: string
    email: string
    projectType: string
    message: string
  }): Promise<boolean> {
    // TODO: Connect an email backend.
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    // return response.ok
    void data
    await new Promise((resolve) => setTimeout(resolve, 900))
    return false
  }

  const inputBase =
    'w-full rounded-xl border bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent'

  const fieldError =
    'mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'success' && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your name"
            className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-line'}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={fieldError}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-line'}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={fieldError}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-semibold text-ink">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          className={`${inputBase} ${errors.projectType ? 'border-red-400' : 'border-line'}`}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="projectType-error" role="alert" className={fieldError}>
            {errors.projectType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell me a little about the project, brand or idea you have in mind..."
          className={`${inputBase} resize-y ${errors.message ? 'border-red-400' : 'border-line'}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className={fieldError}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-colors duration-300 hover:bg-accent hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Send Project Inquiry'
        )}
      </button>
    </form>
  )
}
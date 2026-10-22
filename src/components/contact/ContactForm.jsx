import { useId, useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import { profile } from '../../data/profile.js'

// When VITE_CONTACT_ENDPOINT is set (any Formspree-compatible endpoint that accepts
// JSON), the form posts to it and only reports success after a 2xx response.
// Without it, the form composes an email in the visitor's mail app instead.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-fg">
        {label}
        {optional && <span className="text-xs font-normal text-subtle">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-[#fca5a5]">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border bg-ink-950/60 px-4 text-[15px] text-fg placeholder:text-subtle transition-colors focus:border-brand/70 focus:outline-none aria-[invalid=true]:border-[#f87171]/70'

export default function ContactForm() {
  const id = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const mailtoHref = () => {
    const subject = values.subject.trim() || `Hello from ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    if (!ENDPOINT) {
      window.location.href = mailtoHref()
      setStatus({
        state: 'mailto',
        message: `Your email app should open with this message filled in. If it doesn't, email me directly at ${profile.email}.`,
      })
      return
    }

    // Honeypot: real visitors never fill this hidden field.
    if (formRef.current?.querySelector('[name="_gotcha"]')?.value) return

    setStatus({ state: 'sending', message: '' })
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: values.subject || `Portfolio message from ${values.name}` }),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setValues(initialValues)
      setStatus({ state: 'success', message: 'Thanks, your message was sent. I’ll reply by email.' })
    } catch {
      setStatus({
        state: 'error',
        message: `The message couldn’t be sent. Please try again, or email me directly at ${profile.email}.`,
      })
    }
  }

  const describedBy = (name) => (errors[name] ? `${id}-${name}-error` : undefined)
  const sending = status.state === 'sending'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-name`} label="Name" error={errors.name}>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={`${inputClass} min-h-12 ${errors.name ? '' : 'border-line-strong'}`}
          />
        </Field>
        <Field id={`${id}-email`} label="Email" error={errors.email}>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className={`${inputClass} min-h-12 ${errors.email ? '' : 'border-line-strong'}`}
          />
        </Field>
      </div>
      <Field id={`${id}-subject`} label="Subject" optional>
        <input
          id={`${id}-subject`}
          name="subject"
          value={values.subject}
          onChange={onChange}
          className={`${inputClass} min-h-12 border-line-strong`}
        />
      </Field>
      <Field id={`${id}-message`} label="Message" error={errors.message}>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={`${inputClass} resize-y py-3 ${errors.message ? '' : 'border-line-strong'}`}
        />
      </Field>

      {ENDPOINT && (
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-subtle sm:max-w-xs">
          {ENDPOINT
            ? 'Messages are delivered to my inbox. I usually reply by email.'
            : 'This opens your email app with the message ready to send. Nothing is stored on this site.'}
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-6 font-medium text-white transition-colors hover:bg-brand-bright disabled:opacity-60"
        >
          {sending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : ENDPOINT ? (
            <Send className="size-4" aria-hidden="true" />
          ) : (
            <Mail className="size-4" aria-hidden="true" />
          )}
          {sending ? 'Sending…' : ENDPOINT ? 'Send message' : 'Open in email app'}
        </button>
      </div>

      <div aria-live="polite" role="status">
        {status.message && (
          <p
            className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm ${
              status.state === 'error'
                ? 'border-[#f87171]/40 bg-[#f87171]/10 text-[#fecaca]'
                : 'border-brand/30 bg-brand/10 text-[#dbeafe]'
            }`}
          >
            {status.state === 'error' ? (
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            )}
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}

"use client";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GitFork as Github,
  LoaderCircle,
  Mail,
  Send,
  AlertCircle,
} from "lucide-react";
import { profile, settings } from "@/data/portfolio";
import {
  submitContact,
  validEndpoint,
  type ContactValues,
} from "@/lib/contact";
import { usePortfolio } from "./provider";
export function Contact() {
  const { lang } = usePortfolio();
  const fa = lang === "fa";
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "configuration"
  >("idle");
  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as ContactValues;
    if (values.website) return;
    if (!validEndpoint(settings.contactEndpoint)) {
      setStatus("configuration");
      return;
    }
    setStatus("sending");
    try {
      await submitContact(settings.contactEndpoint, values);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow">
          08 / {fa ? "در تماس باشیم" : "START A CONVERSATION"}
        </p>
        <h2>
          {fa ? "ایده بعدی شما،" : "Your next idea,"}
          <br />
          <span className="accent">
            {fa ? "از همین‌جا آغاز شود." : "starts here."}
          </span>
        </h2>
        <p className="muted">
          {fa
            ? "برای همکاری، فرصت کاری یا صحبت درباره پروژه‌تان پیام بفرستید."
            : "Have a project in mind, a role to discuss, or a problem worth solving? I’d love to hear about it."}
        </p>
        <a className="contact-email" dir="ltr" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={24} />
        </a>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} />
            GitHub
            <ArrowUpRight size={13} />
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} />
            {fa ? "ایمیل مستقیم" : "Direct email"}
          </a>
        </div>
        <div className="contact-note">
          <span className="status-dot" />
          {fa
            ? "کابل، افغانستان · همکاری از راه دور"
            : "Kabul, Afghanistan · Open to remote conversations"}
        </div>
      </div>
      <div className="contact-panel">
        <div className="panel-label">
          <span>LET’S MAKE IT HAPPEN</span>
          <span>↗</span>
        </div>
        <form onSubmit={send}>
          <div className="form-row">
            <label>
              {fa ? "نام شما" : "Your name"}
              <input
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                placeholder={fa ? "نام و تخلص" : "Name & surname"}
              />
            </label>
            <label>
              {fa ? "ایمیل شما" : "Email address"}
              <input
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                dir="ltr"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            {fa ? "موضوع" : "What’s on your mind?"}
            <input
              name="subject"
              required
              maxLength={160}
              placeholder={
                fa
                  ? "پروژه، همکاری یا فرصت کاری"
                  : "A project, a collaboration, an opportunity…"
              }
            />
          </label>
          <label>
            {fa ? "پیام شما" : "A little more about it"}
            <textarea
              name="message"
              rows={4}
              required
              maxLength={4000}
              placeholder={
                fa ? "درباره ایده خود بنویسید…" : "Tell me about your idea…"
              }
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Leave empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {!settings.contactEndpoint && (
            <p className="form-hint">
              {fa
                ? "ارسال مستقیم فرم هنوز فعال نشده است. فعلاً از لینک ایمیل استفاده کنید."
                : "Direct form delivery is not configured yet. Please use the email link for now."}
            </p>
          )}
          <button
            className="button primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <LoaderCircle className="spin" size={17} />
            ) : (
              <Send size={17} />
            )}{" "}
            {status === "sending"
              ? fa
                ? "در حال ارسال…"
                : "Sending…"
              : fa
                ? "ارسال پیام"
                : "Send message"}
            <ArrowUpRight size={17} />
          </button>
          <div
            role="status"
            aria-live="polite"
            className={`form-status ${status}`}
          >
            {status === "success" && (
              <>
                <CheckCircle2 size={18} />
                {fa
                  ? "پیام شما با موفقیت ارسال شد."
                  : "Your message was submitted successfully."}
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={18} />
                {fa
                  ? "ارسال ناموفق بود. دوباره تلاش کنید یا ایمیل بفرستید."
                  : "The message could not be submitted. Try again or contact me by email."}
              </>
            )}
            {status === "configuration" && (
              <>
                <AlertCircle size={18} />
                {fa
                  ? "سرویس ارسال هنوز تنظیم نشده؛ از ایمیل مستقیم استفاده کنید."
                  : "Form delivery is not configured. Please use direct email."}
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

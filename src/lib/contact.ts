export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};
export function validateContact(v: ContactValues) {
  if (v.website) return "spam";
  if (!v.name.trim() || !v.subject.trim() || !v.message.trim())
    return "required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) return "email";
  if (
    v.name.length > 120 ||
    v.email.length > 200 ||
    v.subject.length > 160 ||
    v.message.length > 4000
  )
    return "length";
  return null;
}
export function validEndpoint(value: string) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}
export async function submitContact(
  endpoint: string,
  values: ContactValues,
  fetcher: typeof fetch = fetch,
) {
  if (!validEndpoint(endpoint)) throw new Error("not-configured");
  if (validateContact(values)) throw new Error("invalid");
  const response = await fetcher(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("delivery-failed");
}

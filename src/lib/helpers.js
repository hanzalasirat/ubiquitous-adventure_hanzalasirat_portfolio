export function readPreference(key, fallback, allowed) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
export function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Browsing still works without storage. */
  }
}
export function contactMailto(email, { name, sender, subject, message }) {
  const body = `${message.trim()}\n\n${name.trim()}\n${sender.trim()}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
}
export function filterProjects(projects, category) {
  return category === "all"
    ? projects
    : projects.filter((project) => project.category === category);
}

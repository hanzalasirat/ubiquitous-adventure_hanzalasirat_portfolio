export type Language = "en" | "fa";
export type Localized = Record<Language, string>;
export type TimelineItem = {
  id: string;
  kind: "work" | "education" | "certificate";
  title: Localized;
  organization: Localized;
  period: string;
  description: Localized;
};
export type Testimonial = {
  id: string;
  name: string;
  role: Localized;
  quote: Localized;
  rating?: number;
};

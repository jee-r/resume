import { z, defineCollection, reference } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object ({
      name: z.string(),
      date: z.date().optional(),
      order: z.number().optional(),
      url_name: z.string().optional(),
      url_link: z.string().optional(),
    })
})
const works = defineCollection({
  type: "content",
  schema:
    z.object ({
      compagny_name: z.string(),
      job_title: z.string(),
      location: z.string(),
      period: z.string(),
    })
})
const educations = defineCollection({
  type: "content",
  schema:
    z.object ({
      name: z.string(),
      school: z.string(),
      specs: z.string(),
      year: z.date(),
      city: z.string(),
    })
})
export const collections = {
    projects: projects,
    works: works,
    educations: educations,
};

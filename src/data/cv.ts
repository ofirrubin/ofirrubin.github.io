export const profile = {
  name: "Ofir Rubin",
  tagline:
    "Full-stack engineer. Infrastructure and developer tooling, commerce platforms, and edge AI.",
  about: [
    "I work across three areas: infrastructure and developer tooling, B2B and B2C commerce platforms, and edge AI systems.",
    "Most of it runs on Kubernetes, with TypeScript, Python, and Go doing the heavy lifting.",
  ],
  contactNote: "Open to interesting problems.",
  email: "ofir@rubin.app",
  github: "https://github.com/ofirrubin",
  url: "https://ofirrubin.github.io",
};

export const focus: { title: string; body: string }[] = [
  {
    title: "Infrastructure & developer tooling",
    body: "Kubernetes control planes, identity, CI/CD, GitOps. The layer other engineers build on.",
  },
  {
    title: "Commerce platforms",
    body: "B2B and B2C, end-to-end — storefront, admin, backend, and the operations around them.",
  },
  {
    title: "Edge AI",
    body: "Video pipelines, device integration, and local-inference systems running on real hardware.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages",   items: ["TypeScript", "Python", "Go", "C", "C++"] },
  { group: "Frontend",    items: ["React", "Vite", "Next.js"] },
  { group: "Backend",     items: ["Node.js", "REST", "WebSockets"] },
  { group: "Databases",   items: ["PostgreSQL", "MSSQL", "SQLite", "Supabase"] },
  { group: "Infra & ops", items: ["Kubernetes", "Docker", "Linux", "Windows Server", "GitOps", "CI/CD"] },
  { group: "Identity",    items: ["Keycloak", "OIDC", "SAML"] },
];

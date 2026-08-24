export type ISiteSettings = {
  urls: {
    githubUrl: string;
    linkedInUrl: string;
  }
  siteMetadata: {
    maintenance: boolean;
    supportedSiteLanguages: string[]
  }
  currentEmployee: string
  currentEducation: string
  currentLocation: string
  currentLanguages: string[]
  title: string;
};

export const siteSettings: ISiteSettings = {
  urls: {
    githubUrl: "https://github.com/l3keboy",
    linkedInUrl: "https://www.linkedin.com/in/luke-h-421515225/",
  },
  siteMetadata: {
    supportedSiteLanguages: ["en"],
    maintenance: true,
  },
  currentEmployee: "CZ",
  currentLocation: "NL",
  currentEducation: "HBO-ICT - Fontys",
  currentLanguages: ["nl", "en"],
  title: "Luke Hendriks",
};

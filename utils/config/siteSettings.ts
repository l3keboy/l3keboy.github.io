import { Companies } from "../enums/Company"
import { SourceType } from "../enums/SourceType"

export type IProjectSiteSettings = {
  slug: string
  languages: string[]
  tools: string[]
  image?: string
  type: SourceType
  links: {
    slug: string
    url: string
  }[]
  highlight: boolean
}
export type ICertificationSiteSettings = {
  slug: string
  company: {
    name: Companies
  }
  grantDate: Date;
  expiryDate?: Date;
  certificate: {
    name: string;
    number: string;
    url: string;
  }
  highlight: boolean
}

export type ISiteSettings = {
  urls: {
    githubUrl: string;
    linkedInUrl: string;
  }
  siteMetadata: {
    maintenance: boolean;
    supportedSiteLanguages: string[]
  }
  projects: IProjectSiteSettings[],
  certifications: ICertificationSiteSettings[],
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
  projects:[
    {
      slug: "partio",
      languages: ["C#", "NextJS", "HTML", "CSS", "TailwindCSS"],
      tools: ["Docker", "Docker Compose", "PostgreSQL", "Supabase", "Google Tag Manager", "Google Analytics", "CookieBot"],
      image: "https://partio.app/partioIcons/partio-icon-green.svg",
      type: SourceType.CLOSED_SOURCE,
      links: [
        { slug: "organization", url: "https://github.com/partio-official" },
        { slug: "website", url: "https://partio.app/" }
      ],
      highlight: true
    },
    {
      slug: "solyra_coaching",
      languages: ["Nextjs", "HTML", "CSS", "TailwindCSS"],
      tools: ["Vercel", "Cal.com"],
      image: "https://solyra-coaching.nl/logo.png",
      type: SourceType.CLOSED_SOURCE,
      links: [
        { slug: "website", url: "https://solyra-coaching.nl/" }
      ],
      highlight: false
    },
    {
      slug: "husqy",
      languages: ["Python", "NextJS", "HTML", "CSS"],
      tools: ["Docker", "MicroK8S", "PostgreSQL", "Redis", "Lavalink", "HashiCorp Vault", "OpenTelemetry", "Seq"],
      image: "https://github.com/husqybot/assets/blob/main/logos/logo_default.png?raw=true",
      type: SourceType.CLOSED_SOURCE,
      links: [
        { slug: "organization", url: "https://github.com/husqybot" },
        { slug: "website", url: "https://husqy.xyz/" },
        { slug: "docs", url: "https://docs.husqy.xyz/" },
        { slug: "dashboard", url: "https://dashboard.husqy.xyz/" }
      ],
      highlight: true
    },
    {
      slug: "victreebot",
      languages: ["Python"],
      tools: ["Docker", "PostgreSQL", "Docker"],
      image: "https://github.com/l3keboy/Victreebot/blob/main/assets/logos/VictreeBot.png?raw=true",
      type: SourceType.OPEN_SOURCE,
      links: [
        { slug: "source", url: "https://github.com/l3keboy/victreebot" },
        { slug: "support_server", url: "https://discord.gg/sVmMUXCYp2" }
      ],
      highlight: false
    },
    {
      slug: "l3keboy.github.io",
      languages: ["Nextjs"],
      tools: ["Vercel"],
      type: SourceType.OPEN_SOURCE,
      links: [
        { slug: "source", url: "https://github.com/l3keboy/l3keboy.github.io" },
      ],
      highlight: true
    },
    {
      slug: "ios_qr_validator",
      languages: ["Swift"],
      tools: ["XCode", "Google Safebrowsing API"],
      type: SourceType.OPEN_SOURCE,
      image: "https://github.com/l3keboy/iOS-QR_Validator/blob/main/assets/permissions.png?raw=true",
      links: [
        { slug: "source", url: "https://github.com/l3keboy/iOS-QR_Validator" },
      ],
      highlight: false
    },
    {
      slug: "ios_timeit",
      languages: ["Swift"],
      tools: ["XCode"],
      type: SourceType.OPEN_SOURCE,
      image: "https://github.com/l3keboy/iOS-TimeIt/blob/main/assets/TimerView.png?raw=true",
      links: [
        { slug: "source", url: "https://github.com/l3keboy/iOS-TimeIt" },
      ],
      highlight: false
    },
    {
      slug: "ios_factzzz",
      languages: ["Swift"],
      tools: ["XCode"],
      type: SourceType.OPEN_SOURCE,
      image: "https://github.com/l3keboy/iOS-Factzzz/blob/main/assets/FactzzzView.png?raw=true",
      links: [
        { slug: "source", url: "https://github.com/l3keboy/iOS-Factzzz" },
      ],
      highlight: false
    },
    {
      slug: "lukehendriks.net-v2",
      languages: ["Nuxt V3"],
      tools: [],
      type: SourceType.OPEN_SOURCE,
      image: "https://github.com/l3keboy/lukehendriks.net-v2/blob/main/frontend/assets/images/memoji.png?raw=true",
      links: [
        { slug: "source", url: "https://github.com/l3keboy/lukehendriks.net-v2" },
      ],
      highlight: false
    },
    {
      slug: "lukehendriks.net-v1",
      languages: ["ReactJS", "TailwindCSS", "Laravel Lumen"],
      tools: [],
      type: SourceType.OPEN_SOURCE,
      image: "https://github.com/l3keboy/lukehendriks.net-v1/blob/main/images/homescreen-hero.png?raw=true",
      links: [
        { slug: "source", url: "https://github.com/l3keboy/lukehendriks.net-v1" },
      ],
      highlight: false
    }
  ],
  certifications:[
    {
      slug: "az_400",
      certificate: {
        name: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
        number: "53C1765EC4418787",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/53C1765EC4418787?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      grantDate: new Date(2025, 11), // December 2025
      expiryDate: new Date(2027, 11), // December 2027
      highlight: true,
    },
    {
      slug: "az_204 ",
      certificate: {
        name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
        number: "7990801179F2FC6E",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/7990801179F2FC6E?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      grantDate: new Date(2025, 8), // September 2025
      expiryDate: new Date(2027, 8), // September 2027
      highlight: true,
    },
    {
      slug: "az_104 ",
      certificate: {
        name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        number: "91ACAED8BC28489C",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/91ACAED8BC28489C?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      grantDate: new Date(2025, 2), // March 2025
      expiryDate: new Date(2027, 2), // March 2027
      highlight: true,
    },
    {
      slug: "itil_v4_foundation ",
      certificate: {
        name: "ITIL v4 Foundation Certificate in IT Service Management",
        number: "GR671779843LH",
        url: "/assets/certificates/itil_v4_foundation_certificate_in_it_service_management.pdf"
      },
      company: {
        name: Companies.PEOPLECERT
      },
      grantDate: new Date(2025, 5), // June 2025
      expiryDate: new Date(2028, 5), // June 2028
      highlight: false,
    },
    {
      slug: "exin_bcs_practitioner ",
      certificate: {
        name: "EXIN BCS Practitioner Certificate in Modelling Business Processes",
        number: "6625367.20894115",
        url: "https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=C8F0AC61-D4BF-4338-A8AC-D803962022F3&ts=-2037763906"
      },
      company: {
        name: Companies.EXIN
      },
      grantDate: new Date(2025, 3), // April 2025
      highlight: false,
    },
    {
      slug: "exin_bcs_foundation",
      certificate: {
        name: "EXIN BCS Foundation Certificate in Business Analysis (BAF)",
        number: "6625367.20892338",
        url: "https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=479C1DF2-4DC9-46C9-9CA4-A2D4AD09F887&ts=1571870046"
      },
      company: {
        name: Companies.EXIN
      },
      grantDate: new Date(2025, 2), // March 2025
      highlight: false,
    },
    {
      slug: "js_coding_specialist",
      certificate: {
        name: "JavaScript Coding Specialist",
        number: "67a11e61e222fe7625430f76",
        url: "https://platform.knowledge-pillars.com/c/67a11e61e222fe7625430f76"
      },
      company: {
        name: Companies.KNOWLEDGE_PILLARS
      },
      grantDate: new Date(2025, 1), // February 2025
      highlight: false,
    },
    {
      slug: "c#_coding_apprentice",
      certificate: {
        name: "C# Coding Apprentice",
        number: "66e38132ba58052fdb8c551a",
        url: "https://platform.knowledge-pillars.com/c/66e38132ba58052fdb8c551a"
      },
      company: {
        name: Companies.KNOWLEDGE_PILLARS
      },
      grantDate: new Date(2024, 8), // September 2024
      highlight: false,
    },
    {
      slug: "dasa_devops_professional_enable_and_scale",
      certificate: {
        name: "DASA DevOps Professional Enable and Scale",
        number: "103296889",
        url: "https://www.credential.net/3055cb77-4624-4fe8-a3de-6e79bb848064"
      },
      company: {
        name: Companies.DASA
      },
      grantDate: new Date(2024, 4), // May 2024
      highlight: false,
    },
    {
      slug: "az_900",
      certificate: {
        name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        number: "5F9C8D99D7EBAB3B",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/5F9C8D99D7EBAB3B?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      grantDate: new Date(2024, 4), // May 2024
      highlight: false,
    },
    {
      slug: "dasa_devops_fundamentals",
      certificate: {
        name: "DASA DevOps Fundamentals",
        number: "93842913",
        url: "https://www.credential.net/4554a1db-1031-4692-854d-316f48c04c2e"
      },
      company: {
        name: Companies.DASA
      },
      grantDate: new Date(2024, 1), // February 2024
      highlight: false,
    },
    {
      slug: "network+",
      certificate: {
        name: "CompTIA Network+ ce Certification",
        number: "7C6LLGT6BEE111WJ",
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQFgU-Mnk-gZnA/company-logo_100_100/company-logo_100_100/0/1728580001287/comptia_logo?e=1742428800&v=beta&t=70B4x5A2qHtpOWgfmG-uNgRWuBP9ftpjuZUlc_KDQuk"
      },
      company: {
        name: Companies.COMPTIA
      },
      grantDate: new Date(2024, 0), // January 2024
      expiryDate: new Date(2027, 0), // January 2027
      highlight: false,
    }
  ],
  currentEmployee: "CZ",
  currentLocation: "NL",
  currentEducation: "HBO-ICT - Fontys",
  currentLanguages: ["nl", "en"],
  title: "Luke Hendriks",
};

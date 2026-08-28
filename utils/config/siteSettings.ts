import { Companies } from "../enums/Company"
import { SourceType } from "../enums/SourceType"

export type ICertificationSiteSettings = {
  certificate: {
    name: string;
    number: string;
    url: string;
  }
  company: {
    name: Companies
  }
  expiryDate?: Date;
  grantDate: Date;
  highlight: boolean
  slug: string
}
export type IProjectSiteSettings = {
  highlight: boolean
  image?: string
  languages: string[]
  links: {
    highlight: boolean
    slug: string
    url: string
  }[]
  slug: string
  tools: string[]
  type: SourceType
}

export type ISiteSettings = {
  certifications: ICertificationSiteSettings[],
  currentEducation: string
  currentEmployee: string
  currentLanguages: string[]
  currentLocation: string
  projects: IProjectSiteSettings[],
  siteMetadata: {
    maintenance: boolean;
    supportedSiteLanguages: string[]
  }
  title: string;
  urls: {
    githubUrl: string;
    linkedInUrl: string;
  }
};

export const siteSettings: ISiteSettings = {
  certifications:[
    {
      certificate: {
        name: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
        number: "53C1765EC4418787",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/53C1765EC4418787?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      expiryDate: new Date(2027, 11), // December 2027
      grantDate: new Date(2025, 11), // December 2025
      highlight: true,
      slug: "az_400",
    },
    {
      certificate: {
        name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
        number: "7990801179F2FC6E",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/7990801179F2FC6E?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      expiryDate: new Date(2027, 8), // September 2027
      grantDate: new Date(2025, 8), // September 2025
      highlight: true,
      slug: "az_204",
    },
    {
      certificate: {
        name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        number: "91ACAED8BC28489C",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/HendriksLuke-7086/91ACAED8BC28489C?sharingId"
      },
      company: {
        name: Companies.MICROSOFT
      },
      expiryDate: new Date(2027, 2), // March 2027
      grantDate: new Date(2025, 2), // March 2025
      highlight: true,
      slug: "az_104",
    },
    {
      certificate: {
        name: "ITIL v4 Foundation Certificate in IT Service Management",
        number: "GR671779843LH",
        url: "/assets/certificates/itil_v4_foundation_certificate_in_it_service_management.pdf"
      },
      company: {
        name: Companies.PEOPLECERT
      },
      expiryDate: new Date(2028, 5), // June 2028
      grantDate: new Date(2025, 5), // June 2025
      highlight: false,
      slug: "itil_v4_foundation",
    },
    {
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
      slug: "exin_bcs_practitioner",
    },
    {
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
      slug: "exin_bcs_foundation",
    },
    {
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
      slug: "js_coding_specialist",
    },
    {
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
      slug: "c#_coding_apprentice",
    },
    {
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
      slug: "dasa_devops_professional_enable_and_scale",
    },
    {
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
      slug: "az_900",
    },
    {
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
      slug: "dasa_devops_fundamentals",
    },
    {
      certificate: {
        name: "CompTIA Network+ ce Certification",
        number: "7C6LLGT6BEE111WJ",
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQFgU-Mnk-gZnA/company-logo_100_100/company-logo_100_100/0/1728580001287/comptia_logo?e=1742428800&v=beta&t=70B4x5A2qHtpOWgfmG-uNgRWuBP9ftpjuZUlc_KDQuk"
      },
      company: {
        name: Companies.COMPTIA
      },
      expiryDate: new Date(2027, 0), // January 2027
      grantDate: new Date(2024, 0), // January 2024
      highlight: false,
      slug: "network+",
    }
  ],
  currentEducation: "HBO-ICT - Fontys",
  currentEmployee: "CZ",
  currentLanguages: ["nl", "en"],
  currentLocation: "NL",
  projects:[
    {
      highlight: true,
      image: "https://partio.app/apple-touch-icon.png",
      languages: ["C#", "NextJS", "HTML", "CSS", "TailwindCSS"],
      links: [
        {
          highlight: true, slug: "website",
          url: "https://partio.app/"
        },
        {
          highlight: false, slug: "organization",
          url: "https://github.com/partio-official"
        }
      ],
      slug: "partio",
      tools: ["Docker", "Docker Compose", "PostgreSQL", "Supabase", "Google Tag Manager", "Google Analytics", "CookieBot"],
      type: SourceType.CLOSED_SOURCE
    },
    {
      highlight: false,
      image: "https://solyra-coaching.nl/logo.png",
      languages: ["Nextjs", "HTML", "CSS", "TailwindCSS"],
      links: [
        {
          highlight: true, slug: "website",
          url: "https://solyra-coaching.nl/"
        }
      ],
      slug: "solyra_coaching",
      tools: ["Vercel", "Cal.com"],
      type: SourceType.CLOSED_SOURCE
    },
    {
      highlight: true,
      image: "https://github.com/husqybot/assets/blob/main/logos/logo_default.png?raw=true",
      languages: ["Python", "NextJS", "HTML", "CSS"],
      links: [
        {
          highlight: true, slug: "organization",
          url: "https://github.com/husqybot"
        },
        {
          highlight: false, slug: "website",
          url: "https://husqy.xyz/"
        },
        {
          highlight: false, slug: "docs",
          url: "https://docs.husqy.xyz/"
        },
        {
          highlight: false, slug: "dashboard",
          url: "https://dashboard.husqy.xyz/"
        }
      ],
      slug: "husqy",
      tools: ["Docker", "MicroK8S", "PostgreSQL", "Redis", "Lavalink", "HashiCorp Vault", "OpenTelemetry", "Seq"],
      type: SourceType.CLOSED_SOURCE
    },
    {
      highlight: false,
      image: "https://github.com/l3keboy/Victreebot/blob/main/assets/logos/VictreeBot.png?raw=true",
      languages: ["Python"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/victreebot"
        },
        {
          highlight: false, slug: "support_server",
          url: "https://discord.gg/sVmMUXCYp2"
        }
      ],
      slug: "victreebot",
      tools: ["Docker", "PostgreSQL", "Docker"],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: true,
      languages: ["Nextjs"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/l3keboy.github.io"
        },
      ],
      slug: "l3keboy_github_io",
      tools: ["Vercel"],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: false,
      languages: ["Swift"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/iOS-QR_Validator"
        },
      ],
      slug: "ios_qr_validator",
      tools: ["XCode", "Google Safebrowsing API"],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: false,
      languages: ["Swift"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/iOS-TimeIt"
        },
      ],
      slug: "ios_timeit",
      tools: ["XCode"],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: false,
      languages: ["Swift"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/iOS-Factzzz"
        },
      ],
      slug: "ios_factzzz",
      tools: ["XCode"],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: false,
      image: "https://github.com/l3keboy/lukehendriks.net-v2/blob/main/frontend/assets/images/memoji.png?raw=true",
      languages: ["Nuxt V3"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/lukehendriks.net-v2"
        },
      ],
      slug: "lukehendriks_net-v2",
      tools: [],
      type: SourceType.OPEN_SOURCE
    },
    {
      highlight: false,
      image: "https://github.com/l3keboy/lukehendriks.net-v1/blob/main/images/homescreen-hero.png?raw=true",
      languages: ["ReactJS", "TailwindCSS", "Laravel Lumen"],
      links: [
        {
          highlight: true, slug: "source",
          url: "https://github.com/l3keboy/lukehendriks.net-v1"
        },
      ],
      slug: "lukehendriks_net-v1",
      tools: [],
      type: SourceType.OPEN_SOURCE
    }
  ],
  siteMetadata: {
    maintenance: true,
    supportedSiteLanguages: ["en"],
  },
  title: "Luke Hendriks",
  urls: {
    githubUrl: "https://github.com/l3keboy",
    linkedInUrl: "https://www.linkedin.com/in/luke-h-421515225/",
  },
};

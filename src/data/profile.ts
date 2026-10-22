import type {
  Education,
  Experience,
  FocusArea,
  OverviewItem,
  Profile,
  Project,
  Skill,
  TextValue,
} from '../types/portfolio'
import { normalizeLanguage } from '../utils/routes'

export const profile: Profile = {
  name: 'Luis Ares',
  role: {
    es: 'Desarrollador Web Full Stack',
    en: 'Full Stack Web Developer',
    gl: 'Desenvolvedor Web Full Stack',
  },
  headline: {
    es: 'Desarrollador Web Full Stack · Técnico Informático · Administrador de Sistemas',
    en: 'Full Stack Web Developer · IT Technician · Systems Administrator',
    gl: 'Desenvolvedor Web Full Stack · Técnico Informático · Administrador de Sistemas',
  },
  summary: {
    es: 'Desarrollador Web y Técnico Informático con formación superior y más de una década en el sector IT. Combino desarrollo Full Stack (React, TypeScript, Django, Node.js) con administración de sistemas e infraestructura cloud (OVHcloud, CloudPanel), lo que me permite llevar un proyecto desde el código hasta producción. Experiencia en comercio electrónico e integración de pasarelas de pago. Disponible para proyectos freelance y nuevas oportunidades.',
    en: 'Web Developer and IT Technician with higher vocational education and more than a decade in the IT sector. I combine Full Stack development (React, TypeScript, Django, Node.js) with systems administration and cloud infrastructure (OVHcloud, CloudPanel), which lets me take a project from code to production. Experience in e-commerce and payment gateway integration. Available for freelance projects and new opportunities.',
    gl: 'Desenvolvedor Web e Técnico Informático con formación superior e máis dunha década no sector IT. Combino desenvolvemento Full Stack (React, TypeScript, Django, Node.js) con administración de sistemas e infraestrutura cloud (OVHcloud, CloudPanel), o que me permite levar un proxecto desde o código ata produción. Experiencia en comercio electrónico e integración de pasarelas de pagamento. Dispoñible para proxectos freelance e novas oportunidades.',
  },
  location: {
    es: 'Fene, Galicia, España',
    en: 'Fene, Galicia, Spain',
    gl: 'Fene, Galicia, España',
  },
  email: 'luisaap.dev@gmail.com',
  mailHref: 'mailto:luisaap.dev@gmail.com',
  website: 'https://www.luisaap.es/',
  github: 'https://github.com/luisaap-dev',
  linkedin: 'https://www.linkedin.com/in/luis-ares-302260184/',
  rustdesk: 'https://rustdesk.com/es/',
}

export const overview: OverviewItem[] = [
  {
    title: {
      es: 'Sector IT',
      en: 'IT sector',
      gl: 'Sector IT',
    },
    value: '+10',
    description: {
      es: 'Más de una década en el mundo IT: soporte técnico, sistemas y, en los últimos años, desarrollo web.',
      en: 'More than a decade in IT: technical support, systems and, in recent years, web development.',
      gl: 'Máis dunha década no mundo IT: soporte técnico, sistemas e, nos últimos anos, desenvolvemento web.',
    },
  },
  {
    title: {
      es: 'Instancias WordPress',
      en: 'WordPress instances',
      gl: 'Instancias WordPress',
    },
    value: '11',
    description: {
      es: 'Desplegadas para un centro de formación: 10 para alumnos y 1 para el profesor, en un servidor OVHcloud con CloudPanel.',
      en: 'Deployed for a training centre: 10 for students and 1 for the teacher, on an OVHcloud server with CloudPanel.',
      gl: 'Despregadas para un centro de formación: 10 para alumnado e 1 para o profesor, nun servidor OVHcloud con CloudPanel.',
    },
  },
  {
    title: {
      es: 'Base técnica',
      en: 'Technical base',
      gl: 'Base técnica',
    },
    value: 'DAW + SMR',
    description: {
      es: 'Formación superior en desarrollo web y en sistemas y redes.',
      en: 'Higher vocational education in web development and in systems and networks.',
      gl: 'Formación superior en desenvolvemento web e en sistemas e redes.',
    },
  },
]

export const focusAreas: FocusArea[] = [
  {
    title: {
      es: 'Desarrollo Full Stack',
      en: 'Full Stack development',
      gl: 'Desenvolvemento Full Stack',
    },
    description: {
      es: 'Aplicaciones web con React, TypeScript, Django y Node.js, incluyendo comercio electrónico e integración de pasarelas de pago.',
      en: 'Web applications with React, TypeScript, Django and Node.js, including e-commerce and payment gateway integration.',
      gl: 'Aplicacións web con React, TypeScript, Django e Node.js, incluíndo comercio electrónico e integración de pasarelas de pagamento.',
    },
  },
  {
    title: {
      es: 'Sistemas y cloud',
      en: 'Systems and cloud',
      gl: 'Sistemas e cloud',
    },
    description: {
      es: 'Despliegue y securización de servidores VPS Linux en OVHcloud con CloudPanel, optimización Nginx/PHP y gestión de DNS.',
      en: 'Deployment and hardening of Linux VPS servers on OVHcloud with CloudPanel, Nginx/PHP optimization and DNS management.',
      gl: 'Despregamento e securización de servidores VPS Linux en OVHcloud con CloudPanel, optimización Nginx/PHP e xestión de DNS.',
    },
  },
  {
    title: {
      es: 'Soporte y redes',
      en: 'Support and networks',
      gl: 'Soporte e redes',
    },
    description: {
      es: 'Microsoft 365 y Google Drive, cableado estructurado, TPV y pasarelas de pago, y soporte remoto y presencial.',
      en: 'Microsoft 365 and Google Drive, structured cabling, POS and payment gateways, and remote and on-site support.',
      gl: 'Microsoft 365 e Google Drive, cableado estruturado, TPV e pasarelas de pagamento, e soporte remoto e presencial.',
    },
  },
]

export const publishedProjects: Project[] = [
  {
    title: 'Pollo Kanalla',
    label: {
      es: 'Web para restaurante',
      en: 'Restaurant website',
      gl: 'Web para restaurante',
    },
    summary: {
      es: 'Web para el restaurante Pollo Kanalla.',
      en: 'Website for the Pollo Kanalla restaurant.',
      gl: 'Web para o restaurante Pollo Kanalla.',
    },
    stack: ['React', 'TypeScript'],
    liveUrl: 'https://pollo-kanalla.vercel.app/',
  },
  {
    title: 'La Velada del Año VI',
    label: {
      es: 'Propuesta de web oficial',
      en: 'Official website proposal',
      gl: 'Proposta de web oficial',
    },
    summary: {
      es: 'Propuesta candidata a web oficial del evento de Ibai Llanos en Sevilla: cartelera, combate principal e información del evento.',
      en: 'Candidate proposal for the official website of Ibai Llanos’s event in Seville: fight card, main event and event information.',
      gl: 'Proposta candidata a web oficial do evento de Ibai Llanos en Sevilla: cartel, combate principal e información do evento.',
    },
    stack: ['React', 'Tailwind CSS'],
    liveUrl: 'https://velada-iv-vert.vercel.app/',
  },
  {
    title: {
      es: 'Aplicación web bajo NDA',
      en: 'Web application under NDA',
      gl: 'Aplicación web baixo NDA',
    },
    label: {
      es: 'Full Stack · NDA',
      en: 'Full Stack · NDA',
      gl: 'Full Stack · NDA',
    },
    summary: {
      es: 'Aplicación web Full Stack con pasarela de pago, desarrollada bajo acuerdo de confidencialidad.',
      en: 'Full Stack web application with a payment gateway, developed under a non-disclosure agreement.',
      gl: 'Aplicación web Full Stack con pasarela de pagamento, desenvolvida baixo acordo de confidencialidade.',
    },
    stack: ['React', 'TypeScript', 'Django', 'Node.js'],
  },
  {
    title: {
      es: 'Infraestructura WordPress para un centro de formación',
      en: 'WordPress infrastructure for a training centre',
      gl: 'Infraestrutura WordPress para un centro de formación',
    },
    label: {
      es: 'Sistemas y cloud',
      en: 'Systems and cloud',
      gl: 'Sistemas e cloud',
    },
    summary: {
      es: 'Servidor OVHcloud montado desde cero con CloudPanel, certificados SSL y DNS configurados en Don Dominio para asegurar el dominio, y 11 instancias WordPress independientes desplegadas: 10 para los alumnos y 1 para el profesor.',
      en: 'OVHcloud server set up from scratch with CloudPanel, SSL certificates and DNS configured at Don Dominio to secure the domain, and 11 independent WordPress instances deployed: 10 for the students and 1 for the teacher.',
      gl: 'Servidor OVHcloud montado desde cero con CloudPanel, certificados SSL e DNS configurados en Don Dominio para asegurar o dominio, e 11 instancias WordPress independentes despregadas: 10 para o alumnado e 1 para o profesor.',
    },
    stack: ['OVHcloud', 'CloudPanel', 'WordPress', 'Nginx', 'PHP', 'Don Dominio'],
  },
  {
    title: {
      es: 'Rediseño ERP Gesruta',
      en: 'Gesruta ERP redesign',
      gl: 'Redeseño ERP Gesruta',
    },
    label: {
      es: 'UI/UX',
      en: 'UI/UX',
      gl: 'UI/UX',
    },
    summary: {
      es: 'Rediseño UI/UX del ERP de rutas logísticas Gesruta, durante las prácticas en Plus42.',
      en: 'UI/UX redesign of Gesruta, a logistics route ERP, during my internship at Plus42.',
      gl: 'Redeseño UI/UX do ERP de rutas loxísticas Gesruta, durante as prácticas en Plus42.',
    },
    stack: [],
  },
  {
    title: 'Hierros Santos',
    label: {
      es: 'Proyecto publicado',
      en: 'Published project',
      gl: 'Proxecto publicado',
    },
    summary: {
      es: 'Web corporativa para empresa industrial con catálogo visual de productos, información de empresa y presencia online en producción.',
      en: 'Corporate website for an industrial company with a visual product catalogue, company information and live online presence.',
      gl: 'Web corporativa para empresa industrial con catálogo visual de produtos, información da empresa e presenza online en produción.',
    },
    stack: ['React', 'JavaScript', 'Vite'],
    liveUrl: 'https://www.hierrossantos.es/',
    repoUrl: 'https://github.com/luisaap-dev/Website-Hierrossantos',
  },
  {
    title: 'Barminton',
    label: {
      es: 'Proyecto publicado',
      en: 'Published project',
      gl: 'Proxecto publicado',
    },
    summary: {
      es: 'Sitio para tienda multimarca de moda con enfoque en presentación del negocio, contacto y visibilidad de marca.',
      en: 'Website for a multi-brand fashion store focused on business presentation, contact and brand visibility.',
      gl: 'Sitio para tenda multimarca de moda con foco na presentación do negocio, contacto e visibilidade de marca.',
    },
    stack: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://barminton.net/',
    repoUrl: 'https://github.com/luisaap-dev/Website-Barminton',
  },
]

export const experience: Experience[] = [
  {
    period: {
      es: 'Ago 2026 – Actualidad',
      en: 'Aug 2026 – Present',
      gl: 'Ago 2026 – Actualidade',
    },
    role: {
      es: 'Desarrollador Web Freelance',
      en: 'Freelance Web Developer',
      gl: 'Desenvolvedor Web Freelance',
    },
    location: {
      es: 'Fene',
      en: 'Fene',
      gl: 'Fene',
    },
    detail: {
      es: 'Aplicación web Full Stack bajo NDA con React, TypeScript, Django y Node.js para la pasarela de pago. Web para Pollo Kanalla.',
      en: 'Full Stack web application under NDA with React, TypeScript, Django and Node.js for the payment gateway. Website for Pollo Kanalla.',
      gl: 'Aplicación web Full Stack baixo NDA con React, TypeScript, Django e Node.js para a pasarela de pagamento. Web para Pollo Kanalla.',
    },
  },
  {
    period: {
      es: 'Jun 2026 – Ago 2026',
      en: 'Jun 2026 – Aug 2026',
      gl: 'Xuñ 2026 – Ago 2026',
    },
    role: {
      es: 'Administrador de Sistemas / Programador Web (Freelance)',
      en: 'Systems Administrator / Web Developer (Freelance)',
      gl: 'Administrador de Sistemas / Programador Web (Freelance)',
    },
    location: {
      es: 'Fene',
      en: 'Fene',
      gl: 'Fene',
    },
    detail: {
      es: 'Despliegue desde cero de servidores VPS en OVHcloud; instalación y securización de CloudPanel; 11 instancias WordPress independientes para un centro de formación (10 alumnos y el profesor) con optimización Nginx/PHP; certificados SSL y registros DNS (A, CNAME, TXT) en Don Dominio.',
      en: 'From-scratch deployment of VPS servers on OVHcloud; CloudPanel installation and hardening; 11 independent WordPress instances for a training centre (10 students and the teacher) with Nginx/PHP optimization; SSL certificates and DNS records (A, CNAME, TXT) at Don Dominio.',
      gl: 'Despregamento desde cero de servidores VPS en OVHcloud; instalación e securización de CloudPanel; 11 instancias WordPress independentes para un centro de formación (10 alumnos e o profesor) con optimización Nginx/PHP; certificados SSL e rexistros DNS (A, CNAME, TXT) en Don Dominio.',
    },
  },
  {
    period: {
      es: 'Ene 2026 – Abr 2026',
      en: 'Jan 2026 – Apr 2026',
      gl: 'Xan 2026 – Abr 2026',
    },
    role: {
      es: 'Programador Web / Técnico Informático',
      en: 'Web Developer / IT Technician',
      gl: 'Programador Web / Técnico Informático',
    },
    company: 'FAXPG',
    location: {
      es: 'A Coruña (sustitución)',
      en: 'A Coruña (temporary cover)',
      gl: 'A Coruña (substitución)',
    },
    detail: {
      es: 'Gestión de cuentas, privilegios y seguridad en Microsoft 365 y Google Drive; rediseño de la tienda online; pasarelas de pago y TPV; soporte Helpdesk, hardware, impresoras y red local.',
      en: 'Account, permission and security management in Microsoft 365 and Google Drive; online store redesign; payment gateways and POS; Helpdesk support, hardware, printers and local network.',
      gl: 'Xestión de contas, privilexios e seguridade en Microsoft 365 e Google Drive; redeseño da tenda online; pasarelas de pagamento e TPV; soporte Helpdesk, hardware, impresoras e rede local.',
    },
  },
  {
    period: {
      es: 'Abr 2024 – Jun 2024',
      en: 'Apr 2024 – Jun 2024',
      gl: 'Abr 2024 – Xuñ 2024',
    },
    role: {
      es: 'Programador Web',
      en: 'Web Developer',
      gl: 'Programador Web',
    },
    company: 'Informática de Empresa ATIE, SL',
    location: {
      es: 'Fene (FCT)',
      en: 'Fene (work placement)',
      gl: 'Fene (FCT)',
    },
    detail: {
      es: 'React, WordPress, PHP y MySQL; publicación en Stratos con Plesk; mantenimiento de equipos.',
      en: 'React, WordPress, PHP and MySQL; publishing on Stratos with Plesk; computer maintenance.',
      gl: 'React, WordPress, PHP e MySQL; publicación en Stratos con Plesk; mantemento de equipos.',
    },
  },
  {
    period: {
      es: 'Sep 2023',
      en: 'Sep 2023',
      gl: 'Set 2023',
    },
    role: {
      es: 'Programador Web',
      en: 'Web Developer',
      gl: 'Programador Web',
    },
    company: 'Plus42',
    location: {
      es: 'A Coruña (prácticas IFCD0210)',
      en: 'A Coruña (IFCD0210 internship)',
      gl: 'A Coruña (prácticas IFCD0210)',
    },
    detail: {
      es: 'Rediseño UI/UX del ERP de rutas logísticas Gesruta.',
      en: 'UI/UX redesign of Gesruta, a logistics route ERP.',
      gl: 'Redeseño UI/UX do ERP de rutas loxísticas Gesruta.',
    },
  },
  {
    period: {
      es: '2012 – 2017',
      en: '2012 – 2017',
      gl: '2012 – 2017',
    },
    role: {
      es: 'Técnico Informático Freelance',
      en: 'Freelance IT Technician',
      gl: 'Técnico Informático Freelance',
    },
    location: {
      es: 'Fene',
      en: 'Fene',
      gl: 'Fene',
    },
    detail: {
      es: 'Reparación de hardware y software, soporte remoto y asesoramiento.',
      en: 'Hardware and software repair, remote support and advice.',
      gl: 'Reparación de hardware e software, soporte remoto e asesoramento.',
    },
  },
  {
    period: {
      es: 'Sep 2011 – Dic 2011',
      en: 'Sep 2011 – Dec 2011',
      gl: 'Set 2011 – Dec 2011',
    },
    role: {
      es: 'Técnico Informático',
      en: 'IT Technician',
      gl: 'Técnico Informático',
    },
    company: 'Informática de Empresa ATIE, SL',
    location: {
      es: 'Fene (FCT)',
      en: 'Fene (work placement)',
      gl: 'Fene (FCT)',
    },
    detail: {
      es: 'Cableado de red de datos en un centro educativo; mantenimiento de equipos e impresoras.',
      en: 'Data network cabling at a school; maintenance of computers and printers.',
      gl: 'Cableado de rede de datos nun centro educativo; mantemento de equipos e impresoras.',
    },
  },
]

export const education: Education[] = [
  {
    date: '2025',
    title: {
      es: 'Desarrollo de Aplicaciones Web con React',
      en: 'Web Application Development with React',
      gl: 'Desenvolvemento de Aplicacións Web con React',
    },
    place: 'Cluster TIC Galicia',
  },
  {
    date: '2024',
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
      en: 'Higher Technician in Web Application Development (DAW)',
      gl: 'Técnico Superior en Desenvolvemento de Aplicacións Web (DAW)',
    },
    place: 'CFP Afundación',
  },
  {
    date: '2023',
    title: {
      es: 'Certificado de Profesionalidad IFCD0210: Desarrollo de Aplicaciones con Tecnología Web',
      en: 'Professional Certificate IFCD0210: Web Technology Application Development',
      gl: 'Certificado de Profesionalidade IFCD0210: Desenvolvemento de Aplicacións con Tecnoloxía Web',
    },
    place: 'Consellería de Promoción do Emprego e Igualdade',
  },
  {
    date: '2011',
    title: {
      es: 'Técnico en Sistemas Microinformáticos y Redes (SMR)',
      en: 'Technician in Microcomputer Systems and Networks (SMR)',
      gl: 'Técnico en Sistemas Microinformáticos e Redes (SMR)',
    },
    place: 'CPIFP Rodolfo Ucha Piñeiro',
  },
]

export const skills: Skill[] = [
  {
    category: {
      es: 'Frontend',
      en: 'Frontend',
      gl: 'Frontend',
    },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: {
      es: 'Backend',
      en: 'Backend',
      gl: 'Backend',
    },
    items: ['Node.js', 'Python', 'Django', 'Flask', 'PHP', 'Java', 'SQL'],
  },
  {
    category: {
      es: 'Bases de datos',
      en: 'Databases',
      gl: 'Bases de datos',
    },
    items: ['MySQL', 'MariaDB', 'MongoDB'],
  },
  {
    category: {
      es: 'CMS, Cloud y Sistemas',
      en: 'CMS, Cloud and Systems',
      gl: 'CMS, Cloud e Sistemas',
    },
    items: [
      'WordPress',
      'OVHcloud',
      'CloudPanel',
      'Plesk',
      'Stratos',
      'Linux VPS',
      'Nginx',
      'Vercel',
      'DNS (Don Dominio)',
    ],
  },
  {
    category: {
      es: 'Soporte y redes',
      en: 'Support and networks',
      gl: 'Soporte e redes',
    },
    items: [
      'Microsoft 365',
      'Google Drive',
      { es: 'Cableado estructurado', en: 'Structured cabling', gl: 'Cableado estruturado' },
      { es: 'TPV y pasarelas de pago', en: 'POS and payment gateways', gl: 'TPV e pasarelas de pagamento' },
      { es: 'Soporte remoto y presencial', en: 'Remote and on-site support', gl: 'Soporte remoto e presencial' },
    ],
  },
  {
    category: {
      es: 'Herramientas',
      en: 'Tools',
      gl: 'Ferramentas',
    },
    items: ['Git', 'GitHub', 'GitHub Copilot', 'Claude AI'],
  },
]

export function getLocalizedValue(value: TextValue, language: string | undefined): string {
  if (typeof value === 'string') {
    return value
  }

  return value[normalizeLanguage(language)] || value.es
}

// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '../locales/en/home.json';
import HOME_VI from '../locales/vi/home.json';
import FOOTER_EN from '../locales/en/footer.json';
import FOOTER_VI from '../locales/vi/footer.json';
import CONTACT_EN from '../locales/en/contact.json';
import CONTACT_VI from '../locales/vi/contact.json';
import SERVICE_EN from '../locales/en/service.json';
import SERVICE_VI from '../locales/vi/service.json';
import SKILLS_EN from '../locales/en/skill.json';
import SKILLS_VI from '../locales/vi/skill.json';
import PROJECT_EN from '../locales/en/project.json';
import PROJECT_VI from '../locales/vi/project.json';
import HEADER_EN from '../locales/en/header.json';
import HEADER_VI from '../locales/vi/header.json';

export const resources = {
    en: {
        home: HOME_EN,
        footer: FOOTER_EN,
        contact: CONTACT_EN,
        service: SERVICE_EN,
        skill: SKILLS_EN,
        project: PROJECT_EN,
        header: HEADER_EN,
    },
    vi: {
        home: HOME_VI,
        footer: FOOTER_VI,
        contact: CONTACT_VI,
        service: SERVICE_VI,
        skill: SKILLS_VI,
        project: PROJECT_VI,
        header: HEADER_VI,
    },
} as const;

export const defaultNS = 'home';

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    // namespace refer translation defaut
    ns: ['home', 'footer', 'contact', 'service', 'skill', 'project', 'header'],
    // default namespace
    defaultNS,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

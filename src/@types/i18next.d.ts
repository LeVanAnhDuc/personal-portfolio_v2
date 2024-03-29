import { resources, defaultNS } from '../services/i18n';
import '';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: (typeof resources)['en'];
    }
}

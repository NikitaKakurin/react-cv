import { ru } from './ru';
import { en } from './en';

const i18n = { ru, en };
export type langType = keyof typeof i18n;
export default i18n;

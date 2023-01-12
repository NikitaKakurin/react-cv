import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';

export default function Footer() {
  const lang = useAppSelector(selectLang);
  return <footer className="flex items-center justify-center">2023 © {i18n[lang].owner}</footer>;
}

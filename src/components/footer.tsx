import { ThemeSwitcher } from "@/components/theme-switcher";
import { useTranslations } from "next-intl";

export default function Footer(){
    const t = useTranslations("Footer");
    return (<footer className="w-full h-fit flex items-center justify-center mx-auto text-center text-xs">
          <p>
            {t("powered")}{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>);

}
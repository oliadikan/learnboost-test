import { useTranslations } from "next-intl";
import Learnboost from "@/components/learnboost-logo";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center"></div>
      <h1 className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        {t("title")} <Learnboost />
      </h1>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-300 to-transparent my-8" />
    </div>
  );
}

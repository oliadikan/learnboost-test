import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export function EnvVarWarning() {
  const t = useTranslations("EnvVarWarning");
  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        {t("required")}
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={"outline"} disabled>
          {t("signin")}
        </Button>
      </div>
    </div>
  );
}

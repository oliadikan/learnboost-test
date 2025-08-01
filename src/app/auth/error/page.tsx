import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {getTranslations} from 'next-intl/server';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;
  const t = await getTranslations("Error");

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("sorry")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-muted-foreground">
                  {t("code")} {params.error}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t("unspecified")}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

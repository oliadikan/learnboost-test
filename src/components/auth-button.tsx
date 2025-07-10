import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/src/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl";

export async function AuthButton() {
  const t = useTranslations("AuthButton");
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant={'outline'}><div><div className="h-1 w-9 my-1 bg-primary"></div><div className="h-1 w-9 my-1 bg-primary"></div><div className="h-1 w-9 my-1 bg-primary"></div></div></Button></DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuLabel>Hey, {user.email}!</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>{t("edit")}</DropdownMenuItem>
      <DropdownMenuItem><LogoutButton /></DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/login">{t("login")}</Link>
      </Button>
    </div>
  );
}

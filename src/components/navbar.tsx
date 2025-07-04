import Link from "next/link";
import Learnboost from "@/components/learnboost-logo";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/src/lib/utils";
import { AuthButton } from "@/components/auth-button";
import { createClient } from "@/src/lib/supabase/server";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export async function Navbar(){
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (<nav className="w-full flex justify-center h-12">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
               {user? <Learnboost textClass="text-lg"/> : <Link href={"/"} >
                <Learnboost textClass="text-lg"/>
              </Link>}    
            </div>
            <div>
                {user? <ToggleGroup variant="outline" type="single" size="lg">
                <ToggleGroupItem value="tutor">Tutor AI</ToggleGroupItem>
                <ToggleGroupItem value="summary">Summary</ToggleGroupItem>
                <ToggleGroupItem value="cards">Cards</ToggleGroupItem>
            </ToggleGroup> : <div></div>}</div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>);
}


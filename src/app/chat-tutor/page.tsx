import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import ChatBot from "@/src/components/chat-bot";


export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

 

  return (
    <div className="flex-1 flex w-full h-screen p-5">
      <div className="w-1/2">
          <embed src="/data/nachhaltigkeit.pdf" type="application/pdf" height="100%" width="100%"/>
      </div>
      <div className="w-1/2 relative">
        <ChatBot />
      </div>
    </div>
  );
}

"use client";

import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSession } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div className="p-6">Loading...</div>;
  }

  const user = session?.user;

  if (!user) {
    return <div className="p-6">User not found.</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.image ?? ""} />
              <AvatarFallback>
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
              </div>

              <Badge className="mt-1 capitalize">
                {user.role ?? "User"}
              </Badge>

              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </div>
              </div>
            </div>
          </div>

          <Button>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
"use client";

import {
  Mail,
  ShieldCheck,
  Pencil,
  Building2,
  Heart,
  BadgeCheck,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        User not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      {/* Profile Card */}
      <Card className="overflow-hidden rounded-2xl border-0 shadow-lg">
        <div className="h-32 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400" />

        <CardContent className="relative px-8 pb-8">
          <div className="-mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-5">
              <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
                <AvatarImage src={user.image ?? ""} />
                <AvatarFallback className="text-3xl font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="pb-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold">
                    {user.name}
                  </h1>

                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <Badge className="capitalize">
                    {user.role}
                  </Badge>

                  <Badge variant="secondary">
                    Active Member
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />

              <div>
                <p className="text-xs text-muted-foreground">
                  Email Address
                </p>

                <p className="font-medium">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-3">
        <Card className="shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-blue-100 p-3">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Listings
              </p>

              <h2 className="text-2xl font-bold">24</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-green-100 p-3">
              <BadgeCheck className="h-6 w-6 text-green-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Sold Properties
              </p>

              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-xl bg-pink-100 p-3">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Wishlist
              </p>

              <h2 className="text-2xl font-bold">8</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
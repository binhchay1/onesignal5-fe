import React from "react";

import Link from "next/link";

import ApplicationLogo from "@/components/global/application-logo";

import { LoginForm } from "@/app/auth/login/_components/login-form";

export default function Page() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <ApplicationLogo />
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}

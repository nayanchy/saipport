"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <Button onClick={() => addUser()}>Button</Button>
          <div className="max-w-sm w-full mx-auto">
            <p>{JSON.stringify(users, null, 2)}</p>
          </div>
        </div>
      </Authenticated>

      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Please log in to see the content.</p>

          <SignInButton>Sign In</SignInButton>
        </div>
      </Unauthenticated>
    </>
  );
}

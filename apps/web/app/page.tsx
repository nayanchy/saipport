"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { add } from "@workspace/backend/users";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <Button onClick={() => addUser()}>Button</Button>
      <div className="max-w-sm w-full mx-auto">
        <p>{JSON.stringify(users, null, 2)}</p>
      </div>
    </div>
  );
}

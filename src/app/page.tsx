import { getQueryClient, trpc } from "@/trpc/server";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Antonio PREFETCH" })
  );
  console.log("SERVER COMPONENT");
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback = {<p>loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};
export default page;
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorksapceIdClient } from "./client";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");
  return <WorksapceIdClient />;
};

export default WorkspaceIdPage;

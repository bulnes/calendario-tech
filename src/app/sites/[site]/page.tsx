// we will create these in the next step
import { getHostnameDataBySubdomain } from "@/lib/db";

export default async function Page({ params }: { params: { site: string } }) {
  const sites = (await getHostnameDataBySubdomain(params.site)) as any;

  // If the site doesn't exist, return a 404 page
  if (!sites) {
    return (
      <>
        <h1>404 - Page Not Found</h1>
      </>
    );
  }

  return (
    <>
      <h1>{sites.name}</h1>
    </>
  );
}

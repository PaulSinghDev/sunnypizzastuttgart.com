import { generateSitemap } from "@nasa-gcn/remix-seo";
import { type LoaderFunctionArgs } from "@remix-run/node";
// @ts-expect-error Virtual modules are not recognized by TypeScript
// eslint-disable-next-line import/no-unresolved
import { routes } from "virtual:remix/server-build";
import { getDomainUrl } from "~/lib/getDomainUrl";

export async function loader({ request }: LoaderFunctionArgs) {
  return generateSitemap(request, routes, {
    siteUrl: getDomainUrl(request),
  });
}

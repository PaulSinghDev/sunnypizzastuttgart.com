import { generateRobotsTxt } from "@nasa-gcn/remix-seo";
import { type LoaderFunctionArgs } from "@remix-run/node";
import { getDomainUrl } from "~/lib/getDomainUrl";

export function loader({ request }: LoaderFunctionArgs) {
  return generateRobotsTxt([
    { type: "sitemap", value: `${getDomainUrl(request)}/sitemap.xml` },
    { type: "userAgent", value: "*" },
    { type: "disallow", value: "/api/" },
    { type: "userAgent", value: "GPTBot" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "ChatGPT-User" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Google-Extended" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "CCBot" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "anthropic-ai" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Claude-Web" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Claude-Mobile" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Bard" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Cohere-AI" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Anthropic-AI" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "FacebookBot" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Omgilibot" },
    { type: "disallow", value: "/" },
    { type: "userAgent", value: "Omgili" },
    { type: "disallow", value: "/" },
  ]);
}

import createMiddleware from "next-intl/middleware";

import { DEFAULT_LANG, LANGS } from "./config/constants";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LANGS,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: DEFAULT_LANG,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

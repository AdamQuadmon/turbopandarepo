"use client";

import { lazy } from "react";

// `error.tsx` is loaded as soon as the app starts.
// To avoid loading translation functionality from next-intl
// as part of the initial bundle, you can export a lazy reference.
// See https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/environments/error-files#errorjs

// eslint-disable-next-line react-refresh/only-export-components
export default lazy(() => import("~/components/locale/error"));

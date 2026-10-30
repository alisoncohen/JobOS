import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
const config = [
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "drizzle/meta/**",
      "next-env.d.ts",
    ],
  },
];

export default config;

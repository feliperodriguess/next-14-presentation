import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "./src/lib/graphql/generated.ts": {
      overwrite: true,
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        legacyMode: false,
        skipTypename: true,
      },
    },
  },
};

export default config;

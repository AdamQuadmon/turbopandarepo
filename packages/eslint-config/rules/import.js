const importRules = {
  "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],
  "import/consistent-type-specifier-style": "warn",
  "import/group-exports": "warn",
  "import/no-anonymous-default-export": "warn",
  "import/no-deprecated": "warn",
  "import/no-duplicates": ["error", { "prefer-inline": true }],
  "import/no-empty-named-blocks": "warn",
  "import/no-useless-path-segments": [
    "warn",
    {
      noUselessIndex: true,
    },
  ],
  //? https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
  "import/order": [
    "error",
    {
      groups: [
        ["external", "builtin"],
        "internal",
        ["sibling", "parent"],
        ["object", "type"],
        "index",
      ],
      pathGroups: [
        {
          pattern: "@(react|react-native)",
          group: "external",
          position: "before",
        },
        {
          pattern: "@turbopandarepo/**",
          group: "internal",
        },
      ],
      pathGroupsExcludedImportTypes: ["internal", "react"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};

export default importRules;

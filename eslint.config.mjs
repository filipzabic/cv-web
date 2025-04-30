import mantine from 'eslint-config-mantine';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(...mantine, eslintPluginPrettierRecommended, {
  ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'],
});

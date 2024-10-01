// vite.config.ts
import { portalsViteConfig } from "file:///home/nickgrosenbacher/dev/Sage/synapse-web-monorepo/packages/vite-config/dist/index.js";
import { mergeConfig } from "file:///home/nickgrosenbacher/dev/Sage/synapse-web-monorepo/node_modules/.pnpm/vite@5.4.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.2/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/home/nickgrosenbacher/dev/Sage/synapse-web-monorepo/apps/portals/arkportal";
var projectRootDir = resolve(__vite_injected_original_dirname);
var vite_config_default = mergeConfig(portalsViteConfig, {
  // TODO: PORTALS-3159
  // Until we create a build/exports strategy for synapse-portal-framework, we have to create an alias so Vite can resolve the module
  // This must be configured for each file because it depends on the projectRootDir
  resolve: {
    alias: [
      {
        find: /^@sage-bionetworks\/synapse-portal-framework$/,
        replacement: resolve(
          projectRootDir,
          "../../synapse-portal-framework/src/index.ts"
        )
      },
      {
        find: /@sage-bionetworks\/synapse-portal-framework/,
        replacement: resolve(
          projectRootDir,
          "../../synapse-portal-framework/src"
        )
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uaWNrZ3Jvc2VuYmFjaGVyL2Rldi9TYWdlL3N5bmFwc2Utd2ViLW1vbm9yZXBvL2FwcHMvcG9ydGFscy9hcmtwb3J0YWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25pY2tncm9zZW5iYWNoZXIvZGV2L1NhZ2Uvc3luYXBzZS13ZWItbW9ub3JlcG8vYXBwcy9wb3J0YWxzL2Fya3BvcnRhbC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9uaWNrZ3Jvc2VuYmFjaGVyL2Rldi9TYWdlL3N5bmFwc2Utd2ViLW1vbm9yZXBvL2FwcHMvcG9ydGFscy9hcmtwb3J0YWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBwb3J0YWxzVml0ZUNvbmZpZyB9IGZyb20gJ3ZpdGUtY29uZmlnJ1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5cbmNvbnN0IHByb2plY3RSb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUpXG5cbi8vIFVubGVzcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSwgYWxsIGNoYW5nZXMgc2hvdWxkIGdvIGludG8gdGhlIHNoYXJlZCB2aXRlIGNvbmZpZ3VyYXRpb24sIG5vdCB0aGUgaW5kaXZpZHVhbCBwb3J0YWwgY29uZmlndXJhdGlvblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcocG9ydGFsc1ZpdGVDb25maWcsIHtcbiAgLy8gVE9ETzogUE9SVEFMUy0zMTU5XG4gIC8vIFVudGlsIHdlIGNyZWF0ZSBhIGJ1aWxkL2V4cG9ydHMgc3RyYXRlZ3kgZm9yIHN5bmFwc2UtcG9ydGFsLWZyYW1ld29yaywgd2UgaGF2ZSB0byBjcmVhdGUgYW4gYWxpYXMgc28gVml0ZSBjYW4gcmVzb2x2ZSB0aGUgbW9kdWxlXG4gIC8vIFRoaXMgbXVzdCBiZSBjb25maWd1cmVkIGZvciBlYWNoIGZpbGUgYmVjYXVzZSBpdCBkZXBlbmRzIG9uIHRoZSBwcm9qZWN0Um9vdERpclxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogL15Ac2FnZS1iaW9uZXR3b3Jrc1xcL3N5bmFwc2UtcG9ydGFsLWZyYW1ld29yayQvLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShcbiAgICAgICAgICBwcm9qZWN0Um9vdERpcixcbiAgICAgICAgICAnLi4vLi4vc3luYXBzZS1wb3J0YWwtZnJhbWV3b3JrL3NyYy9pbmRleC50cycsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAvQHNhZ2UtYmlvbmV0d29ya3NcXC9zeW5hcHNlLXBvcnRhbC1mcmFtZXdvcmsvLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShcbiAgICAgICAgICBwcm9qZWN0Um9vdERpcixcbiAgICAgICAgICAnLi4vLi4vc3luYXBzZS1wb3J0YWwtZnJhbWV3b3JrL3NyYycsXG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWixTQUFTLHlCQUF5QjtBQUNyYixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTSxpQkFBaUIsUUFBUSxnQ0FBUztBQUd4QyxJQUFPLHNCQUFRLFlBQVksbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJNUMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

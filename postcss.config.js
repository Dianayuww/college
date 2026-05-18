 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/postcss.config.js b/postcss.config.js
new file mode 100644
index 0000000000000000000000000000000000000000..2e7af2b7f1a6f391da1631d93968a9d487ba977d
--- /dev/null
+++ b/postcss.config.js
@@ -0,0 +1,6 @@
+export default {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  },
+}
 
EOF
)

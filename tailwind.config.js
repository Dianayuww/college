 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/tailwind.config.js b/tailwind.config.js
new file mode 100644
index 0000000000000000000000000000000000000000..3c8ed0790c56f30af806371245c6765cb6f24e09
--- /dev/null
+++ b/tailwind.config.js
@@ -0,0 +1,23 @@
+/** @type {import('tailwindcss').Config} */
+export default {
+  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
+  theme: {
+    extend: {
+      fontFamily: {
+        serif: ['"Playfair Display"', 'serif'],
+        sans: ['Inter', 'system-ui', 'sans-serif'],
+      },
+      colors: {
+        background: '#efe4d1',
+        darkBrown: '#3b2b22',
+        mediumBrown: '#7b6252',
+        accent: '#c7a879',
+        cream: '#fffaf2',
+      },
+      boxShadow: {
+        soft: '0 10px 30px rgba(59, 43, 34, 0.10)',
+      },
+    },
+  },
+  plugins: [],
+}
 
EOF
)

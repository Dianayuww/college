 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/vite.config.js b/vite.config.js
new file mode 100644
index 0000000000000000000000000000000000000000..9ffcc675746194c4a34eb43404d15db40b810265
--- /dev/null
+++ b/vite.config.js
@@ -0,0 +1,6 @@
+import { defineConfig } from 'vite'
+import react from '@vitejs/plugin-react'
+
+export default defineConfig({
+  plugins: [react()],
+})
 
EOF
)

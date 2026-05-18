 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/main.jsx b/src/main.jsx
new file mode 100644
index 0000000000000000000000000000000000000000..c48c79638df2f4f14bee217563f59c82c01cf98a
--- /dev/null
+++ b/src/main.jsx
@@ -0,0 +1,10 @@
+import React from 'react'
+import ReactDOM from 'react-dom/client'
+import './index.css'
+import App from './App'
+
+ReactDOM.createRoot(document.getElementById('root')).render(
+  <React.StrictMode>
+    <App />
+  </React.StrictMode>,
+)
 
EOF
)

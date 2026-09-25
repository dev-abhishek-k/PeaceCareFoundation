---
name: Dependency cache after branch changes
description: Why the preview can remain blank after switching to a frontend branch with different packages
---

After switching branches with different frontend dependencies, check that installed modules match the current manifest before diagnosing source imports. Once missing packages are installed, restart the running Vite workflow if the preview remains blank.

**Why:** A build passed after a missing package was installed, but the already-running dev server continued to serve its earlier failed-import response until restarted.

**How to apply:** On a branch switch or dependency change, sync the current project's packages, restart the existing web workflow once, then check its logs and page preview before editing application code.
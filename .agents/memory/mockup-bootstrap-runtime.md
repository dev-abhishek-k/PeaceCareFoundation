---
name: Mockup bootstrap runtime
description: An environment-specific failure mode when setting up the mockup sandbox.
---

Check that `node` resolves in the current environment before attempting mockup artifact creation. A declared Node module does not necessarily make its executable available in an already running shell; changing the module declaration alone may not fix bootstrap.

**Why:** Mockup artifact setup invokes `node` directly. In this workspace it failed with a process-spawn error both before and after installing a different Node module, while the current shell still could not find the executable.

**How to apply:** Verify the executable first. If it remains unavailable after supported environment setup, avoid repeated artifact-creation attempts; proceed with the existing app for direct page changes or wait until the runtime is available.
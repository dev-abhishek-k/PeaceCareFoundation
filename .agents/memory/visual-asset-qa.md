---
name: Visual asset QA
description: Workspace-specific limitation of local contact-sheet tooling when inspecting generated images.
---

ImageMagick contact sheets may fail in this environment because its font configuration is incomplete, even when no labels are requested. Python's Pillow may also be unavailable. Do not add dependencies just to make an optional image contact sheet.

**Why:** Multiple contact-sheet attempts failed although the image assets themselves were valid and displayed correctly in the running app.

**How to apply:** Check that all referenced image files exist, inspect selected assets directly, and review the rendered page at desktop and mobile sizes. Recheck the environment before treating this limitation as permanent.
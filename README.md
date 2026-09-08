# Eusha & Shoily — Our Unfinished Story

A privately hosted, single-scene WebGL romance. Native scrolling is the film timeline; no page sections are stacked. The camera travels through a connected castle, memory corridor, royal hall, garden and balcony. The sequence includes nine chapters and an epilogue.

## Source

- `dist/js/story.js`: original narration, chapter timing, camera key poses and pacing.
- `dist/js/world.js`: castle geometry, materials, lighting, real-time effects, 3D memory frames, character staging, depth-aware postprocessing and adaptive quality.
- `dist/js/photos.js`: all 15 supplied photographs, natural aspect ratios, captions and descriptive filenames. Add photos here and adjust gallery placement in `world.js`.
- `dist/js/main.js`: scroll timeline, accessible narration, chapter navigation, full-size memory viewer, reduced-motion and WebGL fallback.
- `dist/js/audio.js`: optional original instrumental soundscape. Audio begins only after a deliberate click.
- `dist/assets/`: optimized originals, fantasy portrait renders, kingdom matte, local fonts.
- `dist/vendor/three.module.js`: locally vendored Three.js r179 subset from the installed runtime, with small compatibility additions; no external CDN dependency. Copyright Three.js authors, MIT.

## Rendering choices and limitations

The architecture, picture frames, landscape, garden and camera are real 3D geometry in one shared world. Identity-based fantasy characters are carefully traced flat silhouette meshes textured with generated portrait renders, facing the camera; they are not rigged volumetric character models. The knight enters along the corridor but does not have a skeletal walking cycle. Original memory photographs are never regenerated or warped; perspective belongs to their 3D frames.

A generated distant landscape matte provides atmospheric detail beyond the modeled castle. DOF, shadows and pixel ratio adapt for mobile. A lightweight photographic story remains available if WebGL fails. Motion preference is saved locally on the device; no photos or personal data are uploaded by the site.

## Editing and validation

Static output is authored directly in `dist/`; no build is needed. Serve `dist/` with any static server. All runtime resources are local and fonts have fallbacks. Use `node --check` for source syntax and the included `validate.mjs` for story timing, asset references, camera continuity and core geometry checks. This implementation was validated without browser testing.

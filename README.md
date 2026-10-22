# Shadow Theatre · Puppet Stories
An original colourful theatre by John Parker: shape-built paper puppets, articulated poses, perspective-projected shadows, movable light, three backdrops, captions, motion recording/playback, timeline scrubbing and four locally saved performances.

## Run
Node 20.19+ or 22.12+. `npm ci`, `npm run dev`, `npm test`, `npm run build`. Deploy with Vercel Vite preset, output dist.

## Play
Drag puppets or switch to Move light. Cast controls move, turn, resize and wave. Build adds oval, triangle, rectangle and star pieces with precise local position/size/rotation. Light controls change point-light position and puppet depth. Story switches scenery and captions. Record captures up to 30 seconds of stage motion, light, captions and scene cuts, not microphone audio. Play, scrub, return to stage and save/reload performances. Add/remove puppets and shapes, undo/redo shape edits, or reset the stage. Saves and maker stars remain on this device. No accounts, ads, analytics or microphone permission.

Keyboard: 1–3 selects cast; arrows move; R rotates; W waves; Space records/plays/stops; Escape stops and returns to editing. Touch/pointer dragging and visible controls provide alternatives. Audio chimes only after opting in. There is no automatic ambient animation or camera shake; reduced motion disables transitions.

## Engineering
Canvas2D draws transformed shape polygons and their projection through a point-light onto the backdrop scrim. Shadow scale is 1/(1-depth). Articulation changes each paper piece before world transform and projection. A sampled timeline stores transforms separately from immutable puppet construction, interpolates poses/light and preserves discrete scene/caption cuts. Recording limits structure edits to preserve replay identity. Local saves preserve custom puppet IDs and validate construction bounds. Original generated jungle and coral illustrations integrate with code-native cosmic scenery and precise interactive geometry. This is a fictional creative light model for play.

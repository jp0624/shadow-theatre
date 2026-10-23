# Shadow Theatre · Puppet Stories
An original colourful theatre by John Parker: shape-built paper puppets, articulated poses, perspective-projected shadows, movable light, three backdrops, captions, motion recording/playback, timeline scrubbing and four locally saved performances.

## Run
Node 20.19+ or 22.12+. `npm ci`, `npm run dev`, `npm test`, `npm run build`. Deploy with Vercel Vite preset, output dist.

## Play
Drag puppets or switch to Move light. Cast controls move, turn, resize and wave. Build adds oval, triangle, rectangle and star pieces with precise local position/size/rotation. Light controls change point-light position and puppet depth. Story switches scenery and captions. Record captures up to 30 seconds of stage motion, light, captions and scene cuts, not microphone audio. Play, scrub, return to stage and save/reload performances. Add/remove puppets and shapes, undo/redo shape edits, or reset the stage. Saves and maker stars remain on this device. No accounts, ads, analytics or microphone permission.

Keyboard: 1–3 selects cast; arrows move; R rotates; W waves; Space records/plays/stops; Escape stops and returns to editing. Touch/pointer dragging and visible controls provide alternatives. Audio chimes only after opting in. There is no automatic ambient animation or camera shake; reduced motion disables transitions.

## Engineering
Canvas2D draws transformed shape polygons and their projection through a point-light onto the backdrop scrim. Shadow scale is 1/(1-depth). Articulation changes each paper piece before world transform and projection. A sampled timeline stores transforms separately from immutable puppet construction, interpolates poses/light and preserves discrete scene/caption cuts. Recording limits structure edits to preserve replay identity. Local saves preserve custom puppet IDs and validate construction bounds. Original generated jungle and coral illustrations integrate with code-native cosmic scenery and precise interactive geometry. This is a fictional creative light model for play.

## Shadow Agency edition
Full-window illustrated headquarters and rooftop sets with a collapsible floating director desk, plus an optional browser Full screen control. Original agents Nova and Pip, Widget the robot and Professor Noodle have editable geometric versions in the workshop. Six new movable gadgets: portal, case, crystal, drone, moon and fern. Up to twelve actors/props can be positioned, scaled, rotated, layered, recorded, scrubbed and saved locally. Existing saved stories remain loadable. C cycles elements when the stage has focus. The two new AI-generated scenery assets are original fictional settings inspired by playful secret-agency worlds; no Odd Squad artwork or characters are reused.

### Matching character artwork
The agency cast now uses a transparent, shaded character atlas that matches the illustrated headquarters and rooftop sets. Each character has a standing and waving pose. Shadows use the character's actual alpha silhouette and the existing perspective projection. Movement, rotation, scaling, recording and older saved agency casts retain their behavior. In Build, switch between the illustrated character and editable geometry; changing a shape uses the shape view so every edit is visible.

### Complete material and scenery pass
All stage elements now belong to the same dimensional agency world: the movable brass spotlight, six illustrated gadgets and their vault previews, textured oval/star construction pieces, shaded enamel box/triangle pieces and glass-like custom puppet eyes. The modular builder remains editable and supports undo/redo. The three former paper/coral/cosmic scenes now open a botanical lab, reef observatory and star chamber; the saved scene IDs are preserved. Gadget identity is stored separately from its editable name, so renamed props survive save/load with their artwork intact. No external images or remote image service is required at runtime.

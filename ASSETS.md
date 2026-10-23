# Original scenery and characters
- `public/hq.webp`: generated illustration of a burgundy, teal and brass hall of impossible doors with clear floor for puppets.
- `public/rooftop.webp`: generated illustration of a fantastical rooftop observatory with a telescope, floating tower and clear floor.
- Generated with OpenAI image generation, 23 October 2026. Fictional original game scenery; no external franchise assets.
- Editable geometric versions of the agents, robot, alien and gadgets are code-native polygons in `src/stage.js`. Each shape contributes to its actual projected shadow and recorded transform.
- Legacy jungle and sea image files remain in source; stable scene IDs now open the themed replacement sets.

## Dimensional character cast — 23 October 2026
`public/agency-cast.webp` is an original transparent eight-sprite atlas generated with OpenAI's built-in image generation, using `hq.webp` as a style reference. Prompt brief: four equal columns (Nova, Pip, Widget, Noodle), two rows (neutral, waving), full bodies; dimensional digital painting, warm brass highlights, textured navy/burgundy cloth, teal metal and cinematic lighting matching the headquarters. No scenery, text, floor plane or outlines. Alpha is preserved in the WebP asset. Canvas selects the correct cell at render time. The same alpha generates exact projected character silhouettes; waves, rotation, scale and saved timelines remain functional. Original geometric pieces remain editable in Build, with a reversible illustrated/shape view.

## Complete agency materials and sets
Generated with the built-in OpenAI image tool using `hq.webp` as the material/lighting reference:
- `public/agency-gadgets.webp`: transparent 3×3 object sheet: portal, briefcase, crystal; drone, moon globe, fern; brass spotlight, enamel oval, brass star. Prompt direction: dimensional shaded brass/teal/burgundy, cyan glass, transparent margins, no UI or scenery. Atlas regions are selected in `src/gadgets.js`; opaque silhouettes supply prop shadows.
- `public/botanical-lab.webp`: secret conservatory, jungle windows and research terrariums, brass arches and open teal stage floor.
- `public/reef-observatory.webp`: curved panoramic reef window, brass ribs, burgundy benches, cyan sea and open circular teal floor.
- `public/star-chamber.webp`: domed planetarium, brass armillary sphere, telescope, navy space and golden orbital floor inlays.
Scene prompts requested original cinematic digital painting matching the headquarters, no foreground characters, no logos/text/UI. The old scene keys remain stable for saved takes. All four generated images are WebP optimized; alpha is preserved for the object atlas. Custom ovals/stars use the illustrated component textures; adjustable boxes and triangles use code-native enamel shading and brass rims.

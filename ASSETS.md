# Original scenery and characters
- `public/hq.webp`: generated illustration of a burgundy, teal and brass hall of impossible doors with clear floor for puppets.
- `public/rooftop.webp`: generated illustration of a fantastical rooftop observatory with a telescope, floating tower and clear floor.
- Generated with OpenAI image generation, 23 October 2026. Fictional original game scenery; no external franchise assets.
- Editable geometric versions of the agents, robot, alien and gadgets are code-native polygons in `src/stage.js`. Each shape contributes to its actual projected shadow and recorded transform.
- Existing jungle and sea scenery is retained for old saves and alternate stages.

## Dimensional character cast — 23 October 2026
`public/agency-cast.webp` is an original transparent eight-sprite atlas generated with OpenAI's built-in image generation, using `hq.webp` as a style reference. Prompt brief: four equal columns (Nova, Pip, Widget, Noodle), two rows (neutral, waving), full bodies; dimensional digital painting, warm brass highlights, textured navy/burgundy cloth, teal metal and cinematic lighting matching the headquarters. No scenery, text, floor plane or outlines. Alpha is preserved in the WebP asset. Canvas selects the correct cell at render time. The same alpha generates exact projected character silhouettes; waves, rotation, scale and saved timelines remain functional. Original geometric pieces remain editable in Build, with a reversible illustrated/shape view.

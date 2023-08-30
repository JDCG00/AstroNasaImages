import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.718b4cdf.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const title = "Nasa Images";
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Nasa Images Viewer">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" href="/saturn.png" type="image/x-icon">
		<title>Nasa Images</title>
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/blust/Projects/Astro/AstroNasaImages/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { body, url, hdUrl, mediaType } = Astro2.props;
  console.log("MediaType: " + mediaType, "Url: " + url);
  let isImage = mediaType === "image";
  console.log(isImage);
  return renderTemplate`${maybeRenderHead()}<li class="link-card astro-DOHJNAO5">
	<div class="astro-DOHJNAO5">
		${body != void 0 && renderTemplate`<h2 class="astro-DOHJNAO5">${body}</h2>`}
		${url != void 0 && (isImage ? renderTemplate`${renderComponent($$result, "image-click", "image-click", { "data-message": hdUrl, "class": "astro-DOHJNAO5" }, { "default": () => renderTemplate`
						<img id="img-click"${addAttribute(url, "src")} class="astro-DOHJNAO5">
					` })}` : renderTemplate`<iframe${addAttribute(url, "src")} class="astro-DOHJNAO5"></iframe>`)}
	</div>
	
	
</li>`;
}, "/home/blust/Projects/Astro/AstroNasaImages/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const token = "GGEl82J1UIHvbPwHG6CJ5BkOIj2vnerckcZb7skw";
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${token}`
  );
  const responseData = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nasa Images", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6"><span class="text-gradient astro-J7PV25F6">${responseData["title"]}</span></h1>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "body": responseData["explanation"], "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "mediaType": responseData["media_type"], "url": responseData["url"], "hdUrl": responseData["hdurl"], "class": "astro-J7PV25F6" })}
		</ul>
	</main>
	<canvas class="astro-J7PV25F6"></canvas>
	
` })}`;
}, "/home/blust/Projects/Astro/AstroNasaImages/src/pages/index.astro", void 0);

const $$file = "/home/blust/Projects/Astro/AstroNasaImages/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

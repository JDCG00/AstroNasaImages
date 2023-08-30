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
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<link rel="manifest" href="/src/manifest.json">
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
  const { href, title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
		<img${addAttribute(image, "src")} class="astro-DOHJNAO5">
	</a>
</li>`;
}, "/home/blust/Projects/Astro/AstroNasaImages/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let token = "GGEl82J1UIHvbPwHG6CJ5BkOIj2vnerckcZb7skw";
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${token}`);
  const responseData = await response.json();
  console.log(responseData);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-J7PV25F6">
		<svg class="astro-a astro-J7PV25F6" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" class="astro-J7PV25F6"></path>
			<defs class="astro-J7PV25F6">
				<linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" class="astro-J7PV25F6">
					<stop stop-opacity="0.9" class="astro-J7PV25F6"></stop>
					<stop offset="1" stop-opacity="0.2" class="astro-J7PV25F6"></stop>
				</linearGradient>
			</defs>
		</svg>
		<h1 class="astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">Astro</span></h1>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "title": responseData["title"], "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "title": responseData["explanation"], "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "image": responseData["url"], "class": "astro-J7PV25F6" })}
		</ul>
	</main>
` })}`;
}, "/home/blust/Projects/Astro/AstroNasaImages/src/pages/index.astro", void 0);

const $$file = "/home/blust/Projects/Astro/AstroNasaImages/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

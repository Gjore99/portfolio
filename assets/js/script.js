'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalSubtitle = document.querySelector("[data-modal-subtitle]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

const closeTestimonialsModal = function (event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!modalContainer || !modalContainer.classList.contains("active")) { return; }

  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    if (modalSubtitle) {
      const subtitleEl = this.querySelector("[data-testimonials-subtitle]");
      modalSubtitle.innerHTML = subtitleEl ? subtitleEl.innerHTML : "";
    }
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button (touch-friendly for mobile)
if (modalCloseBtn) {
  let closeViaTouch = false;

  modalCloseBtn.addEventListener("touchend", function (event) {
    closeViaTouch = true;
    closeTestimonialsModal(event);
  });

  modalCloseBtn.addEventListener("click", function (event) {
    if (closeViaTouch) {
      closeViaTouch = false;
      return;
    }

    closeTestimonialsModal(event);
  });
}
if (overlay) {
  overlay.addEventListener("click", closeTestimonialsModal);
}



// credential modal (project management portfolio cards)
const credentialModalContainer = document.querySelector("[data-credential-modal-container]");
const credentialOverlay = document.querySelector("[data-credential-overlay]");
const credentialModalCloseBtn = document.querySelector("[data-credential-modal-close-btn]");
const credentialModalContent = document.querySelector("[data-credential-modal-content]");
const credentialModalSection = credentialModalContainer
  ? credentialModalContainer.querySelector(".credential-modal")
  : null;
const credentialModalIcon = credentialModalSection
  ? credentialModalSection.querySelector(".credential-modal-icon")
  : null;
const projectModalItems = document.querySelectorAll("[data-project-modal-item]");

const NEXIT_GALLERY_BASE = "./assets/images/project-nexit";
const BLAZE_GALLERY_BASE = "./assets/images/project-blaze";
const VERDEVESTA_GALLERY_BASE = "./assets/images/project-verdevesta";
const VERDELUME_GALLERY_BASE = "./assets/images/project-verdelume";
const PARABOLA_GALLERY_BASE = "./assets/images/project-parabola";
const CHINA_GALLERY_BASE = "./assets/images/project-china";
const TRUCK_GALLERY_BASE = "./assets/images/project-truck";
const SENTINEL_GALLERY_BASE = "./assets/images/project-sentinal";
const THUMBNAIL_GALLERY_BASE = "./assets/images/project-thumbnail";

const THUMBNAIL_GALLERY_IMAGES = [
  `${THUMBNAIL_GALLERY_BASE}/img-1.avif`,
  `${THUMBNAIL_GALLERY_BASE}/img-2.png`,
  `${THUMBNAIL_GALLERY_BASE}/img-3.png`,
  `${THUMBNAIL_GALLERY_BASE}/img-4.png`,
  `${THUMBNAIL_GALLERY_BASE}/img-5.avif`,
  `${THUMBNAIL_GALLERY_BASE}/img-6.jpg`,
  `${THUMBNAIL_GALLERY_BASE}/img-7.avif`,
  `${THUMBNAIL_GALLERY_BASE}/img-8.png`,
  `${THUMBNAIL_GALLERY_BASE}/img-9.png`
];

const buildGalleryImages = function (basePath, count) {
  const images = [];

  for (let i = 1; i <= count; i++) {
    images.push(`${basePath}/img-${i}.jpg`);
  }

  return images;
};

const buildPhotoGalleryImages = function (basePath, count) {
  const images = [];

  for (let i = 1; i <= count; i++) {
    images.push(`${basePath}/photo-${i}.jpg`);
  }

  return images;
};

const buildEscWorkshopGalleryImages = function () {
  const files = [
    "photo-1.jpg",
    "photo-2.jpg",
    "photo-3.jpg",
    "photo-4.jpg",
    "photo-5.jpg",
    "photo-6.jpg",
    "photo-7.jpg",
    "photo-8.jpg",
    "photo-9.jpeg",
    "photo-10.jpg",
    "photo-11.jpg",
    "photo-12.jpg",
    "photo-13.jpg",
    "photo-14.jpeg",
    "photo-15.jpg"
  ];

  return files.map(function (file) {
    return `${ESC_WORKSHOPS_BASE}/${file}`;
  });
};

const buildNamedGalleryImages = function (basePath, count, namePrefix, extension) {
  const images = [];

  for (let i = 1; i <= count; i++) {
    images.push(`${basePath}/${namePrefix}-${i}.${extension}`);
  }

  return images;
};

const getAppShowcaseImages = function (showcase) {
  if (Array.isArray(showcase.images) && showcase.images.length) {
    return showcase.images;
  }

  if (showcase.imageCount > 0) {
    return buildGalleryImages(showcase.galleryBase, showcase.imageCount);
  }

  return [];
};

const designShowcases = {
  nexit: {
    title: "NEXIT Construction Ltd",
    tag: "Performance Creative",
    images: buildGalleryImages(NEXIT_GALLERY_BASE, 8),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          A logo is only the anchor point of a true corporate identity. For <strong>NEXIT Construction Ltd</strong>, the objective was to engineer a robust visual ecosystem that translates raw physical strength into a modern, reliable, and premium digital presence.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Industrial Synergy:</strong>
            Blended rugged, heavy-duty industrial motifs with razor-sharp vector precision to reflect the premium engineering behind their construction operations.
          </li>
          <li>
            <strong>Unified Visual Systems:</strong>
            Developed a high-impact corporate color palette and bold typography guidelines engineered to maintain flawless visual consistency across heavy machinery wrapping, physical site signage, and digital interfaces.
          </li>
          <li>
            <strong>Custom Iconography &amp; Illustrations:</strong>
            Designed proprietary, custom vector brand illustrations that visually communicate the company's daily processes, eliminating the need for generic stock layouts.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A fully scalable, comprehensive brand blueprint that repositions NEXIT from a standard local contractor to a highly authoritative, future-proof industry leader.
        </p>
      </section>
    `
  },
  blaze: {
    title: "Blaze Trail",
    tag: "Performance Creative",
    images: buildGalleryImages(BLAZE_GALLERY_BASE, 14),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          A logo is only the initial beacon of an impactful brand. For <strong>Blaze Trail</strong>, the core objective was to engineer a highly cohesive, energetic visual identity that bridges the gap between rugged outdoor adventure and environmental responsibility.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Synergistic Wilderness Motifs:</strong>
            Seamlessly fused hard geometric mountain vectors with fluid, fiery design elements to symbolize tracking paths, guiding explorers, and preserving raw natural beauty.
          </li>
          <li>
            <strong>Vibrant Outdoor Palette:</strong>
            Formulated a high-contrast, adventure-driven color mapping scheme combined with bold, dynamic typography optimized for heavy readability on technical outdoor gear, physical signage, and digital screens.
          </li>
          <li>
            <strong>Symbolic Custom Illustration:</strong>
            Designed proprietary navigation icons and environmental brand illustrations that visually communicate the spirit of adventure without relying on generic stock elements.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A highly versatile, premium brand identity that repositions Blaze Trail as an authoritative, future-proof mark capable of scaling fluidly across digital media, merchandise, and brand storytelling channels.
        </p>
      </section>
    `
  },
  verdevesta: {
    title: "Verdevesta · Botanical Branding & Retail Ecosystem",
    tag: "Performance Creative",
    images: buildGalleryImages(VERDEVESTA_GALLERY_BASE, 9),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          Bridging the gap between interior design and plant care can be intimidating for modern urban dwellers. For <strong>Verdevesta</strong>, the objective was to engineer an approachable, highly polished botanical brand identity tailored for busy professionals seeking to integrate nature into sleek, modern living spaces—then extend that system into consumer retail packaging, sustainable labeling, and responsive digital storefront assets without losing visual cohesion.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Contemporary Jungle Aesthetics:</strong>
            Engineered a sophisticated, high-contrast visual identity that seamlessly interfaces with modern interior design trends (such as minimalist and Scandinavian color blocks), with an organic color canvas built for minimalist living spaces.
          </li>
          <li>
            <strong>Chromatic Harmony:</strong>
            Formulated a vibrant, multi-tonal green palette—balancing lively fresh greens with deep, premium, moody emerald tones—to represent structural growth, product diversity, and organic vitality across both lifestyle and retail touchpoints.
          </li>
          <li>
            <strong>Functional Lifestyle &amp; Retail Assets:</strong>
            Designed custom instructional iconography, variable typographic hierarchies, sustainable product labeling physics, and packaging systems aimed at accessibility, confidence, and premium retail presentation.
          </li>
          <li>
            <strong>Packaging &amp; Digital Retail Extension:</strong>
            Carried the core identity into consumer packaging, shelf-ready labeling, and responsive digital storefront assets—ensuring the brand scales from botanical lifestyle storytelling to point-of-sale clarity.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A comprehensive, highly scalable brand blueprint that positions Verdevesta as a premier, lifestyle-centric design authority—unifying botanical branding, packaging, digital retail platforms, and editorial marketing into one future-proof visual ecosystem.
        </p>
      </section>
    `
  },
  verdelume: {
    title: "Verdelume Botanical Beverage Identity",
    tag: "Performance Creative",
    images: buildGalleryImages(VERDELUME_GALLERY_BASE, 9),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          The consumer marketplace is saturated with over-complicated packaging and synthetic positioning. For <strong>Verdelume</strong>, the direct objective was to conceptualize and craft a refreshing, premium visual identity for an all-natural beverage line that strips away the noise, communicating purity, balance, and modern wellness directly through clean minimalist design principles.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Organic Geometry &amp; Symbolism:</strong>
            Engineered a bespoke, soft vector emblem blending a fluid bird form—signifying clarity, care, and calm—with clean leaflike elements to emphasize an organic, earth-born foundation.
          </li>
          <li>
            <strong>Grounded Color Architecture:</strong>
            Developed a rich, deeply saturated botanical green palette combined with generous whitespace and elegant, high-contrast typography to give the product an unapologetically natural yet highly modern aesthetic.
          </li>
          <li>
            <strong>E-Commerce &amp; Retail Optimization:</strong>
            Structured a versatile visual system designed to adapt seamlessly across physical bottle labeling physics, localized print collateral, and high-converting, mobile-responsive digital storefronts.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A fully integrated, future-proof brand system that elevates Verdelume from a functional beverage to a premium lifestyle symbol, capable of maintaining strict visual authority across diverse global retail and digital marketing tracks.
        </p>
      </section>
    `
  },
  parabola: {
    title: "Parabola Sonic Identity & Apparel Systems",
    tag: "Performance Creative",
    images: buildGalleryImages(PARABOLA_GALLERY_BASE, 9),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          Music branding requires translating abstract acoustic frequencies into an immediate, high-impact visual identity. For <strong>Parabola</strong>, the core directive was to engineer a powerful, space-bending visual emblem that anchors the band's sonic architecture and establishes an instant, highly desirable merchandise presence for their audience.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Sonic-to-Visual Geometry:</strong>
            Deconstructed standard layout grids to warp pixel paths, creating a sharp, high-resonance vector emblem that visually mirrors rhythmic basslines, spatial depth, and acoustic frequency bends.
          </li>
          <li>
            <strong>Aggressive Minimalist Canvas:</strong>
            Crafted a stark, high-contrast monochrome layout optimized for maximal visual punch. The mark is engineered to command attention on crowded digital streaming platforms, album sleeves, and low-light concert venues.
          </li>
          <li>
            <strong>Streetwear &amp; Apparel Architecture:</strong>
            Designed the primary mark with strict geometric physics to ensure flawless scaling. The logo is mathematically optimized for physical merchandise production, specifically screen-printed streetwear, heavy-weight embroidered hoodies, and large-scale stage backdrops.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A heavy-hitting, cutting-edge visual ecosystem that repositions Parabola from a musical act to a full lifestyle brand, maintaining seamless visual authority across retail merchandise, streaming frameworks, and media channels.
        </p>
      </section>
    `
  },
  china: {
    title: "Mystic Serenity — Digital Matte Painting",
    tag: "Visual Art",
    images: buildGalleryImages(CHINA_GALLERY_BASE, 4),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          Translating environmental mystery and historical folklore into a single, cohesive visual narrative requires strict control over pixel manipulation, perspective matching, and illumination theory. This project explores the intersection of cultural heritage and environmental fantasy, telling a silent story through advanced digital photo manipulation and composition techniques.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Multi-Plate Digital Compositing:</strong>
            Seamlessly blended a series of independent visual assets—including hidden temples, ancient mountain bridges, and rugged peaks—into a unified, anatomically correct spatial grid to establish realistic environmental perspective.
          </li>
          <li>
            <strong>Cinematic Lighting &amp; Shadow Casting:</strong>
            Engineered a precise, low-light night environment. Implemented custom brush mapping to execute advanced shadow casting and soft, radiant moonlit glows across stone surfaces and water ripples.
          </li>
          <li>
            <strong>Color Grading &amp; Harmonization:</strong>
            Overhauled raw source textures with a tight, deliberate color grading pass—balancing atmospheric midnight blues and misty mountain shadows with warm, high-contrast focal points of golden light.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A high-impact piece of digital artwork that showcases deep expertise in complex, layered image workflows, non-destructive mask isolation, and narrative-driven environment design.
        </p>
      </section>
    `
  },
  truck: {
    title: "Sunset Chrome — High-Fidelity Vehicle Compositing",
    tag: "Visual Art",
    images: buildGalleryImages(TRUCK_GALLERY_BASE, 4),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          Recreating realistic metallic surfaces requires an intricate understanding of ray behavior, environment mapping, and light refraction. The core objective of this project was to take a complex automotive subject and seamlessly integrate it into a dramatic, high-contrast golden-hour environment—capturing the precise interplay between polished chrome and natural light falloff.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Specular Reflection Mapping:</strong>
            Engineered highly precise metallic reflections along the truck's curvilinear chrome panels. Mapped environmental bounce lights directly onto the metallic facets to realistically reflect the dramatic sunset horizons.
          </li>
          <li>
            <strong>Hard-Surface Texturing &amp; Detailing:</strong>
            Executed strict texture processing to ensure crisp panel seams, glass transparency variables, and ultra-high dynamic range (HDR) definition across all vehicle surfaces, giving the subject an imposing, tactile presence.
          </li>
          <li>
            <strong>Atmospheric Environment Bleed:</strong>
            Integrated the vehicle into a sunset backlighting matrix. Applied soft volumetric light bleeds around the frame contours and matched ambient tire occlusions on the ground plane to firmly lock the asset into its digital environment.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          An impactful digital art asset that demonstrates complete control over lighting physics, surface properties, and high-fidelity photorealistic composition techniques inside a non-destructive workflow.
        </p>
      </section>
    `
  },
  sentinel: {
    title: "The Sentinel — Advanced Luminescent Compositing",
    tag: "Visual Art",
    images: buildGalleryImages(SENTINEL_GALLERY_BASE, 4),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          Controlling high-contrast, self-illuminating light sources within low-light digital environments requires meticulous value management. The objective of this artistic piece was to capture a mystical, fantasy character subject—the Sentinel—manipulating intense bioluminescent light values without sacrificing fine textural details or washing out the ambient background.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Bioluminescent Light Layering:</strong>
            Engineered highly intricate, multi-layered neon glow curves along the subject's primary focal elements (the horns). Utilizing complex blend-mode stacks (such as Linear Dodge and Screen) to establish believable self-illumination physics under a dark canvas.
          </li>
          <li>
            <strong>Ambient Color Spill &amp; Attenuation:</strong>
            Formulated realistic light-casting behaviors across surrounding asset planes. Painted custom environmental lighting highlights that naturally wrap around contours, fabric folds, and surface textures to simulate real-world light falloff from a magical source.
          </li>
          <li>
            <strong>Ethereal Vignette &amp; Environment Staging:</strong>
            Built an atmospheric, misty moonlit landscape backdrop. Used precise value adjustments, cloud rendering, and deep masking techniques to control the user's focal flow and anchor the character seamlessly into a high-fantasy digital world.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          A captivating digital art asset showcasing advanced proficiency in non-destructive light painting, precise gradient maps, and high-tier conceptual environment building within professional image-editing matrices.
        </p>
      </section>
    `
  },
  thumbnail: {
    title: "High-CTR YouTube Thumbnail Portfolio",
    tag: "Performance Creative",
    images: THUMBNAIL_GALLERY_IMAGES,
    bodyHtml: `
      <section class="design-modal-section design-modal-section--impact">
        <h4 class="design-modal-heading">Performance Outcome</h4>
        <p class="design-modal-text">
          <strong>Why it worked:</strong> Layouts engineered for A/B testing — high contrast, mobile-first legibility, and emotional focal points. Winning variants targeted a <strong>[XX% CTR lift]</strong> in feed tests against baseline thumbnails.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          In a hyper-saturated digital landscape, a video's thumbnail serves as its critical first impression and the primary driver of algorithmic discovery. This portfolio showcases high-performance digital media graphics engineered specifically using visual psychology to seize attention in crowded user feeds, instantly communicate narrative value, and incentivize active clicks.
        </p>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Design Strategy &amp; Execution</h4>
        <ul class="design-modal-list">
          <li>
            <strong>Click-Through Rate (CTR) Optimization:</strong>
            Designed layouts using intentional composition rules (such as the rule of thirds, high-contrast character isolation, and aggressive color grading) to drastically enhance visual prominence against standard feed backgrounds.
          </li>
          <li>
            <strong>Strategic Typographic Hierarchy:</strong>
            Implemented ultra-bold, ultra-readable custom font styling to deliver a punchy structural hook in under a second—ensuring absolute legibility even on compact mobile screens.
          </li>
          <li>
            <strong>Visual Psychology &amp; Retention:</strong>
            Positioned emotional focal points, micro-expressions, and spatial contrast elements that build subconscious intrigue, turning passive scrolling behaviors into immediate user engagement loops.
          </li>
        </ul>
      </section>
      <section class="design-modal-section">
        <h4 class="design-modal-heading">The Structural Result</h4>
        <p class="design-modal-text">
          Professionally engineered visual entry-points that demonstrably expand video visibility, prevent high-quality video production from going unnoticed, and maximize the overall commercial performance of digital media channels.
        </p>
      </section>
    `
  }
};

const ERASMUS_DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/1Z5tofZ0ipvqK5-7B016y7vY1Vd6481R4?usp=sharing";

const erasmusCertificates = [
  {
    id: "ai-sustainibility",
    title: "AI & Sustainibilty",
    fileId: "1wPcQmu6Ppc3jm0g7YavAZgs3Wm-6hL9i",
    slug: "ai-sustainibility"
  },
  {
    id: "cyberkindnes",
    title: "Cyberkindnes",
    fileId: "1dhT71_HwBZEGbvJT1p7_5YiJkQC0vQoi",
    slug: "cyberkindnes"
  },
  {
    id: "holistic-education",
    title: "Holistic Education and Role-Playng for Affective and Relational Trening",
    fileId: "1d7qu6VM2QzAVZauC8ohhGojhEut_nGEo",
    slug: "holistic-education"
  },
  {
    id: "professional-development",
    title: "Profesional Development Activity",
    fileId: "1ObzwJX20zVRRqjoBw-7RAm6wsJIBrxjd",
    slug: "professional-development"
  },
  {
    id: "storytelling",
    title: "Storytelling",
    fileId: "1TUqAGru0td_wfRsVPLNq9JKoE1mBt01A",
    slug: "storytelling"
  },
  {
    id: "techno-entrepreneurs",
    title: "Techno-Entreprenuers in Action",
    fileId: "1EtqKtWVox184eQ-XRhF9baVp_zy9U4dp",
    slug: "techno-entrepreneurs"
  },
  {
    id: "the-creative-mess",
    title: "The Creative Mess",
    fileId: "1WBOk9fQ7dCEzFeuc2XbiyEwZqpz9PdLF",
    slug: "the-creative-mess"
  },
  {
    id: "youth-in-mountains",
    title: "Youth In Mountains",
    fileId: "16ixGTKx4OoHx6bIMUxdKPN111vxdkKVa",
    slug: "youth-in-mountains"
  }
];

const escapeCredentialHtml = function (value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const getDrivePreviewUrl = function (fileId) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

const getDriveViewUrl = function (fileId) {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
};

const getErasmusPhotoBase = function (slug) {
  return `./assets/credentials/erasmus/${slug}`;
};

const heicObjectUrlCache = new Map();
const erasmusPdfPrefetchCache = new Set();

const isHeicPath = function (path) {
  return /\.heic$/i.test(path);
};

const getErasmusPhotoStem = function (filename) {
  return filename.replace(/\.[^.]+$/i, "");
};

const ERASMUS_MEDIA_EXTENSIONS = [
  "jpg", "JPG", "jpeg", "JPEG", "png", "PNG", "heic", "HEIC", "webp", "WEBP"
];

const resolveErasmusMediaSrc = async function (photoBase, filename) {
  const candidates = [filename];
  const stem = getErasmusPhotoStem(filename);

  for (let i = 0; i < ERASMUS_MEDIA_EXTENSIONS.length; i++) {
    const candidate = `${stem}.${ERASMUS_MEDIA_EXTENSIONS[i]}`;

    if (candidate !== filename) {
      candidates.push(candidate);
    }
  }

  const seen = new Set();

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    const key = candidate.toLowerCase();

    if (seen.has(key)) { continue; }
    seen.add(key);

    const src = `${photoBase}/${candidate}`;

    try {
      const response = await fetch(src);

      if (response.ok) {
        return src;
      }
    } catch (error) {
      continue;
    }
  }

  return `${photoBase}/${filename}`;
};

const getErasmusPhotoIndex = function (filename) {
  const match = filename.match(/photo-(\d+)/i);
  return match ? match[1] : "";
};

const showMediaFallback = function (imgElement) {
  imgElement.hidden = true;
  const fallback = imgElement.nextElementSibling;

  if (fallback && fallback.classList.contains("credential-slide-fallback")) {
    fallback.hidden = false;
  }
};

const convertHeicBlob = async function (src) {
  const response = await fetch(src);

  if (!response.ok) {
    throw new Error(`Unable to fetch ${src}`);
  }

  const buffer = await response.arrayBuffer();
  const attempts = [
    { toType: "image/jpeg", quality: 0.85, multiple: true },
    { toType: "image/jpeg", quality: 0.72, multiple: false },
    { toType: "image/png", multiple: true }
  ];

  if (typeof heic2any === "undefined") {
    throw new Error("heic2any is unavailable");
  }

  let lastError = null;

  for (let i = 0; i < attempts.length; i++) {
    const inputBlob = new Blob([buffer], { type: "image/heic" });

    try {
      const converted = await heic2any(Object.assign({ blob: inputBlob }, attempts[i]));
      const outputBlob = Array.isArray(converted) ? converted[0] : converted;

      if (outputBlob) {
        return outputBlob;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`HEIC conversion failed for ${src}`);
};

const loadGalleryImageSrc = async function (imgElement, src) {
  const cachedObjectUrl = imgElement.dataset.objectUrl;

  if (cachedObjectUrl) {
    URL.revokeObjectURL(cachedObjectUrl);
    delete imgElement.dataset.objectUrl;
  }

  if (!isHeicPath(src)) {
    imgElement.src = src;
    imgElement.hidden = false;
    imgElement.dataset.mediaLoaded = "true";
    return;
  }

  if (heicObjectUrlCache.has(src)) {
    imgElement.src = heicObjectUrlCache.get(src);
    imgElement.hidden = false;
    imgElement.dataset.mediaLoaded = "true";
    return;
  }

  const jpegBlob = await convertHeicBlob(src);
  const objectUrl = URL.createObjectURL(jpegBlob);

  heicObjectUrlCache.set(src, objectUrl);
  imgElement.src = objectUrl;
  imgElement.dataset.objectUrl = objectUrl;
  imgElement.hidden = false;
  imgElement.dataset.mediaLoaded = "true";
};

const loadErasmusSlideImage = async function (imgElement) {
  if (!imgElement || imgElement.dataset.mediaLoaded === "true") { return; }

  const manifestSrc = imgElement.dataset.mediaSrc;
  const lastSlash = manifestSrc.lastIndexOf("/");
  const photoBase = manifestSrc.slice(0, lastSlash);
  const filename = manifestSrc.slice(lastSlash + 1);

  try {
    const resolvedSrc = await resolveErasmusMediaSrc(photoBase, filename);
    await loadGalleryImageSrc(imgElement, resolvedSrc);
  } catch (error) {
    showMediaFallback(imgElement);
  }
};

const hydrateErasmusSlideMedia = function (root) {
  const activeSlideImg = root.querySelector(".credential-slide.active img[data-media-src]");

  if (activeSlideImg) {
    loadErasmusSlideImage(activeSlideImg);
  }
};

const getErasmusCertById = function (certId) {
  for (let i = 0; i < erasmusCertificates.length; i++) {
    if (erasmusCertificates[i].id === certId) {
      return erasmusCertificates[i];
    }
  }

  return null;
};

const prefetchErasmusPdf = function (fileId) {
  if (!fileId || erasmusPdfPrefetchCache.has(fileId)) { return; }

  erasmusPdfPrefetchCache.add(fileId);

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = getDrivePreviewUrl(fileId);
  link.as = "document";
  document.head.appendChild(link);
};

const preloadErasmusCertMedia = function (cert) {
  if (!cert) { return; }

  prefetchErasmusPdf(cert.fileId);

  const mediaItems = getErasmusMediaForCert(cert);

  if (!mediaItems.length || mediaItems[0].type === "video") { return; }

  const photoBase = getErasmusPhotoBase(cert.slug);
  const filename = mediaItems[0].file;

  resolveErasmusMediaSrc(photoBase, filename)
    .then(function (resolvedSrc) {
      if (heicObjectUrlCache.has(resolvedSrc)) { return; }

      if (isHeicPath(resolvedSrc)) {
        return convertHeicBlob(resolvedSrc).then(function (jpegBlob) {
          heicObjectUrlCache.set(resolvedSrc, URL.createObjectURL(jpegBlob));
        });
      }

      return fetch(resolvedSrc, { cache: "force-cache" });
    })
    .catch(function () {});
};

const mountErasmusPdfFrame = function (root, previewUrl) {
  const pdfFrame = root.querySelector("[data-credential-pdf-frame]");

  if (!pdfFrame || pdfFrame.src) { return; }

  pdfFrame.src = previewUrl;
};

const ERASMUS_VIDEO_EXTENSIONS = ["mp4", "webm", "mov"];

const getErasmusMediaType = function (filename) {
  const extension = filename.split(".").pop().toLowerCase();

  for (let i = 0; i < ERASMUS_VIDEO_EXTENSIONS.length; i++) {
    if (extension === ERASMUS_VIDEO_EXTENSIONS[i]) {
      return "video";
    }
  }

  return "image";
};

const getErasmusCropClass = function (crop) {
  if (crop === "top") { return " crop-top"; }
  if (crop === "bottom") { return " crop-bottom"; }
  return "";
};

const getErasmusAutoCrop = function (index, total, type, slug) {
  if (
    slug === "ai-sustainibility" ||
    slug === "cyberkindnes" ||
    slug === "holistic-education" ||
    slug === "professional-development" ||
    slug === "techno-entrepreneurs" ||
    slug === "the-creative-mess" ||
    slug === "youth-in-mountains"
  ) {
    return "center";
  }
  if (type === "video") { return "center"; }
  if (index === 0) { return "top"; }
  if (index === total - 1) { return "bottom"; }
  return "center";
};

const buildErasmusMediaList = function (files, slug) {
  const media = [];

  for (let i = 0; i < files.length; i++) {
    const type = getErasmusMediaType(files[i]);

    media.push({
      file: files[i],
      type: type,
      crop: getErasmusAutoCrop(i, files.length, type, slug)
    });
  }

  return media;
};

const erasmusMediaManifest = {
  "ai-sustainibility": buildErasmusMediaList([
    "photo-1.jpg", "photo-2.jpg", "photo-3.jpg", "photo-4.jpg", "photo-5.jpg",
    "photo-6.jpg", "photo-7.jpg", "photo-8.jpg", "photo-9.jpg", "photo-10.jpg",
    "photo-11.jpg", "photo-12.jpg", "photo-13.jpg"
  ], "ai-sustainibility"),
  cyberkindnes: buildErasmusMediaList([
    "photo-1.HEIC", "photo-2.JPG", "photo-3.JPG", "photo-4.HEIC", "photo-5.HEIC",
    "photo-6.HEIC", "photo-7.HEIC", "photo-8.jpg", "photo-9.jpg", "photo-10.JPG"
  ], "cyberkindnes"),
  "holistic-education": buildErasmusMediaList([
    "photo-1.jpg", "photo-2.jpg", "photo-3.jpg", "photo-4.jpg", "photo-5.jpg",
    "photo-6.jpg", "photo-7.jpg", "photo-8.jpg", "photo-9.jpg", "photo-10.jpg"
  ], "holistic-education"),
  "professional-development": buildErasmusMediaList([
    "photo-1.JPG", "photo-2.JPG", "photo-3.JPG", "photo-4.JPG", "photo-5.JPG",
    "photo-6.JPG", "photo-7.JPG", "photo-8.JPG", "photo-9.JPG", "photo-10.JPG",
    "photo-11.JPG", "photo-12.JPG", "photo-13.JPG"
  ], "professional-development"),
  storytelling: buildErasmusMediaList([
    "photo-1.jpg", "photo-2.JPG", "photo-3.JPG", "photo-4.JPG", "photo-5.jpg",
    "photo-6.JPG", "photo-7.JPG", "photo-8.JPG", "photo-9.JPG", "photo-10.JPG",
    "photo-11.JPG", "photo-12.jpeg", "photo-13.jpeg"
  ], "storytelling"),
  "techno-entrepreneurs": buildErasmusMediaList([
    "photo-1.jpeg", "photo-2.jpeg", "photo-3.jpeg", "photo-4.jpeg", "photo-5.jpeg",
    "photo-6.jpeg", "photo-7.jpeg", "photo-8.jpeg", "photo-9.jpeg", "photo-10.jpeg",
    "photo-11.jpeg", "photo-12.mp4"
  ], "techno-entrepreneurs"),
  "the-creative-mess": buildErasmusMediaList([
    "photo-1.JPG", "photo-2.JPG", "photo-3.JPG", "photo-4.JPG", "photo-5.JPG",
    "photo-6.JPG", "photo-7.JPG", "photo-8.JPG", "photo-9.JPG", "photo-10.JPG",
    "photo-11.JPG", "photo-12.JPG", "photo-13.JPG"
  ], "the-creative-mess"),
  "youth-in-mountains": buildErasmusMediaList([
    "photo-1.jpg", "photo-2.HEIC", "photo-3.HEIC", "photo-4.jpg", "photo-5.jpg",
    "photo-6.jpg", "photo-7.jpg", "photo-8.jpg", "photo-9.HEIC", "photo-10.HEIC",
    "photo-11.HEIC", "photo-12.jpg", "photo-13.jpg"
  ], "youth-in-mountains")
};

const getErasmusMediaForCert = function (cert) {
  return erasmusMediaManifest[cert.slug] || [];
};

const buildErasmusSlideMediaHtml = function (cert, mediaItem, index, photoBase) {
  const src = `${photoBase}/${mediaItem.file}`;
  const cropClass = getErasmusCropClass(mediaItem.crop);
  const label = `${cert.title} — slide ${index + 1}`;

  if (mediaItem.type === "video") {
    return `
      <video
        class="credential-slide-video${cropClass}"
        controls
        playsinline
        loop
        preload="metadata"
        src="${escapeCredentialHtml(src)}"
        aria-label="${escapeCredentialHtml(label)}"
      ></video>
    `;
  }

  return `
    <img
      data-media-src="${escapeCredentialHtml(src)}"
      alt="${escapeCredentialHtml(label)}"
      class="credential-slide-img${cropClass}"
    >
  `;
};

const credentialModalFunc = function () {
  credentialModalContainer.classList.toggle("active");
  credentialOverlay.classList.toggle("active");

  if (!credentialModalContainer.classList.contains("active") && credentialModalSection) {
    credentialModalSection.classList.remove(
      "credential-modal--wide",
      "credential-modal--design",
      "credential-modal--esc",
      "credential-modal--app"
    );
  }

  if (!credentialModalContainer.classList.contains("active") && credentialModalIcon) {
    credentialModalIcon.hidden = false;
  }
};

const bindDesignGallery = function (root, images) {
  const galleryImage = root.querySelector("[data-design-gallery-img]");
  const prevButton = root.querySelector("[data-design-gallery-prev]");
  const nextButton = root.querySelector("[data-design-gallery-next]");

  if (!galleryImage || !images.length) { return; }

  let activeIndex = 0;

  const updateGallery = function () {
    const src = images[activeIndex];

    galleryImage.alt = `Design showcase image ${activeIndex + 1} of ${images.length}`;

    loadGalleryImageSrc(galleryImage, src).catch(function () {
      galleryImage.removeAttribute("src");
    });
  };

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      activeIndex = (activeIndex - 1 + images.length) % images.length;
      updateGallery();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      activeIndex = (activeIndex + 1) % images.length;
      updateGallery();
    });
  }

  updateGallery();
};

const renderDesignShowcase = function (galleryId) {
  const showcase = designShowcases[galleryId];

  if (!showcase || !credentialModalContent || !credentialModalSection) { return; }

  credentialModalSection.classList.add("credential-modal--wide", "credential-modal--design");

  if (credentialModalIcon) {
    credentialModalIcon.hidden = true;
  }

  credentialModalContent.innerHTML = `
    <h3 class="credential-modal-heading">${escapeCredentialHtml(showcase.title)}</h3>

    <div class="design-gallery" data-design-gallery>
      <button type="button" class="design-gallery-nav design-gallery-nav--prev" data-design-gallery-prev aria-label="Previous image">
        <ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon>
      </button>

      <div class="design-gallery-stage">
        <img src="" alt="" class="design-gallery-img" data-design-gallery-img>
      </div>

      <button type="button" class="design-gallery-nav design-gallery-nav--next" data-design-gallery-next aria-label="Next image">
        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <div class="design-modal-body">
      ${showcase.bodyHtml}
    </div>
  `;

  bindDesignGallery(credentialModalContent, showcase.images);
};

const RECEIPT_AI_GALLERY_BASE = "./assets/images/project-receipt-ai";
const CONVERTER_GALLERY_BASE = "./assets/images/project-converter";
const JOURNAL_AI_GALLERY_BASE = "./assets/images/project-journal-ai";

const appShowcases = {
  "receipt-ai": {
    title: "AI-Powered Multi-Lingual Receipt Accountant",
    galleryBase: RECEIPT_AI_GALLERY_BASE,
    images: buildNamedGalleryImages(RECEIPT_AI_GALLERY_BASE, 4, "photo", "png"),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          A functional web utility that extracts, parses, and translates unstructured transaction data from receipt images or PDFs into a clean tabular layout. Features a built-in data migration clipboard system for seamless exporting into Microsoft Excel.
        </p>
      </section>
    `,
    cta: {
      type: "github",
      label: "View Code on GitHub",
      href: "https://github.com/Gjore99/receipt-assistant"
    }
  },
  converter: {
    title: "Universal Client-Side File Converter Engine",
    galleryBase: CONVERTER_GALLERY_BASE,
    images: buildNamedGalleryImages(CONVERTER_GALLERY_BASE, 3, "photo", "png"),
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          A browser-native conversion pipeline that transforms files between common formats entirely on the client—no server uploads required. Built for fast drag-and-drop workflows, batch handling, and predictable output quality across document, image, and data interchange use cases.
        </p>
      </section>
    `,
    cta: {
      type: "github",
      label: "View Code on GitHub",
      href: "https://github.com/Gjore99/universal-file-converter"
    }
  },
  "journal-ai": {
    title: "Life Journal AI Desktop Client",
    galleryBase: JOURNAL_AI_GALLERY_BASE,
    imageCount: 0,
    bodyHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">Project Overview</h4>
        <p class="design-modal-text">
          An offline-first personal reflection desktop software application combining a React frontend with a secure Tauri native desktop shell. Implements modular CRUD state management and localized markdown file-system data models.
        </p>
      </section>
    `,
    status: {
      type: "wip",
      label: "🛠️ Development In Progress"
    }
  }
};

const buildAppModalFooter = function (showcase) {
  if (showcase.cta && showcase.cta.type === "github") {
    return `
      <div class="app-modal-footer">
        <a
          href="${escapeCredentialHtml(showcase.cta.href)}"
          class="credential-modal-cta"
          target="_blank"
          rel="noopener noreferrer"
        >${escapeCredentialHtml(showcase.cta.label)}</a>
      </div>
    `;
  }

  if (showcase.status && showcase.status.type === "wip") {
    return `
      <div class="app-modal-footer">
        <div class="app-modal-status app-modal-status--wip" role="status">
          ${escapeCredentialHtml(showcase.status.label)}
        </div>
      </div>
    `;
  }

  return "";
};

const buildAppGalleryStageHtml = function (images) {
  if (!images.length) {
    return `
      <div class="design-gallery-placeholder">
        <span class="design-gallery-placeholder-label">App screenshots coming soon</span>
      </div>
    `;
  }

  return `<img src="" alt="" class="design-gallery-img" data-design-gallery-img>`;
};

const renderAppShowcase = function (showcaseId) {
  const showcase = appShowcases[showcaseId];

  if (!showcase || !credentialModalContent || !credentialModalSection) { return; }

  const images = getAppShowcaseImages(showcase);

  credentialModalSection.classList.add("credential-modal--wide", "credential-modal--design", "credential-modal--app");

  if (credentialModalIcon) {
    credentialModalIcon.hidden = true;
  }

  const galleryNavAttrs = images.length ? "" : " hidden";

  credentialModalContent.innerHTML = `
    <h3 class="credential-modal-heading">${escapeCredentialHtml(showcase.title)}</h3>

    <div class="design-gallery" data-design-gallery>
      <button type="button" class="design-gallery-nav design-gallery-nav--prev" data-design-gallery-prev aria-label="Previous image"${galleryNavAttrs}>
        <ion-icon name="chevron-back-outline" aria-hidden="true"></ion-icon>
      </button>

      <div class="design-gallery-stage">
        ${buildAppGalleryStageHtml(images)}
      </div>

      <button type="button" class="design-gallery-nav design-gallery-nav--next" data-design-gallery-next aria-label="Next image"${galleryNavAttrs}>
        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <div class="design-modal-body">
      ${showcase.bodyHtml}
      ${buildAppModalFooter(showcase)}
    </div>
  `;

  if (images.length) {
    bindDesignGallery(credentialModalContent, images);
  }
};

const ESC_WORKSHOPS_BASE = "./assets/credentials/esc/workshops";
const ESC_COLLABORATIONS_BASE = "./assets/credentials/esc/collaborations";
const ESC_TRAININGS_BASE = "./assets/credentials/esc/trainings";

const escShowcases = {
  esc: {
    title: "European Solidarity Corps (ESC) Operational Leadership",
    tag: "Logistics & Operations",
    overviewHtml: `
      <section class="design-modal-section">
        <h4 class="design-modal-heading">ESC Operational Overview</h4>
        <p class="design-modal-text">
          Currently executing a long-term international deployment focused on non-formal educational logistics, cross-border resource management, and regional community activation. This framework highlights my progression across diverse organizational roles—operating simultaneously as a lead facilitator, volunteer coordinator, and cross-functional project manager.
        </p>
      </section>
    `,
    tracks: [
      {
        id: "workshops",
        title: "Track 1: Proprietary Workshops &amp; Project Delivery",
        images: buildEscWorkshopGalleryImages(),
        bodyHtml: `
          <ul class="design-modal-list">
            <li>
              <strong>Core Focus:</strong>
              End-to-end design, marketing, and execution of proprietary community workshops and interactive educational modules.
            </li>
            <li>
              <strong>Competencies Demonstrated:</strong>
              Took 100% independent ownership of project scope, managed local participant engagement loops, and deployed creative non-formal frameworks to deliver high-retention learning experiences.
            </li>
          </ul>
        `
      },
      {
        id: "collaborations",
        title: "Track 2: Cross-Organizational NGO Collaborations",
        images: buildPhotoGalleryImages(ESC_COLLABORATIONS_BASE, 11),
        bodyHtml: `
          <ul class="design-modal-list">
            <li>
              <strong>Core Focus:</strong>
              Inter-organizational city-wide initiatives, co-hosted events, and joint socio-cultural operations alongside decentralized regional NGOs.
            </li>
            <li>
              <strong>Competencies Demonstrated:</strong>
              Dynamic cross-functional teamwork, adaptive field logistics under changing project constraints, and high-level stakeholder representation in public ecosystems.
            </li>
          </ul>
        `
      },
      {
        id: "trainings",
        title: "Track 3: Advanced Training &amp; Capacity Building",
        images: buildPhotoGalleryImages(ESC_TRAININGS_BASE, 11),
        bodyHtml: `
          <ul class="design-modal-list">
            <li>
              <strong>Core Focus:</strong>
              Co-facilitation, documentation, and end-to-end organization of intensive international training courses and capacity-building seminars—delivering sessions to cross-border participant groups rather than attending as a trainee.
            </li>
            <li>
              <strong>Competencies Demonstrated:</strong>
              Session design and co-delivery, live facilitation of non-formal learning blocks, structured documentation of outcomes and materials, and operational coordination of logistics, timelines, and participant engagement across multi-day programs.
            </li>
          </ul>
        `
      }
    ]
  }
};

const buildEscTrackGalleryHtml = function (track) {
  let slidesHtml = "";
  let dotsHtml = "";
  const trackAltLabel = track.title.replace(/&amp;/g, "&");

  for (let i = 0; i < track.images.length; i++) {
    slidesHtml += `
      <figure class="credential-slide${i === 0 ? " active" : ""}" data-credential-slide>
        <div class="credential-slide-placeholder">
          <img
            src="${escapeCredentialHtml(track.images[i])}"
            alt="${escapeCredentialHtml(trackAltLabel)} — photo ${i + 1}"
            class="credential-slide-img"
            loading="lazy"
          >
        </div>
      </figure>
    `;

    dotsHtml += `
      <button
        type="button"
        class="credential-slide-dot${i === 0 ? " active" : ""}"
        data-credential-slide-dot
        aria-label="Slide ${i + 1} of ${track.images.length}"
      ></button>
    `;
  }

  return `
    <section class="esc-track-section" data-esc-track-section="${escapeCredentialHtml(track.id)}">
      <h4 class="design-modal-heading">${track.title}</h4>

      <div class="credential-slideshow" data-credential-slideshow>
        <div class="credential-slideshow-track">
          ${slidesHtml}
        </div>
        <div class="credential-slideshow-controls">
          <button type="button" class="credential-slideshow-btn" data-credential-slide-prev aria-label="Previous slide">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div class="credential-slideshow-dots">
            ${dotsHtml}
          </div>
          <button type="button" class="credential-slideshow-btn" data-credential-slide-next aria-label="Next slide">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div class="esc-track-body">
        ${track.bodyHtml}
      </div>
    </section>
  `;
};

const renderEscShowcase = function (showcaseId) {
  const showcase = escShowcases[showcaseId];

  if (!showcase || !credentialModalContent || !credentialModalSection) { return; }

  credentialModalSection.classList.add("credential-modal--wide", "credential-modal--design", "credential-modal--esc");

  if (credentialModalIcon) {
    credentialModalIcon.hidden = true;
  }

  let tracksHtml = "";

  for (let i = 0; i < showcase.tracks.length; i++) {
    tracksHtml += buildEscTrackGalleryHtml(showcase.tracks[i]);
  }

  credentialModalContent.innerHTML = `
    <h3 class="credential-modal-heading">${escapeCredentialHtml(showcase.title)}</h3>

    <div class="esc-modal-body">
      ${showcase.overviewHtml}
      ${tracksHtml}
    </div>
  `;

  for (let i = 0; i < showcase.tracks.length; i++) {
    const trackRoot = credentialModalContent.querySelector(`[data-esc-track-section="${showcase.tracks[i].id}"]`);

    if (trackRoot) {
      bindCredentialSlideshow(trackRoot);
    }
  }
};

const bindCredentialSlideshow = function (root) {
  const slideshow = root.querySelector("[data-credential-slideshow]");

  if (!slideshow) { return; }

  const slides = slideshow.querySelectorAll("[data-credential-slide]");
  const prevBtn = slideshow.querySelector("[data-credential-slide-prev]");
  const nextBtn = slideshow.querySelector("[data-credential-slide-next]");
  const dots = slideshow.querySelectorAll("[data-credential-slide-dot]");
  let activeIndex = 0;

  const syncSlideMedia = function () {
    for (let i = 0; i < slides.length; i++) {
      const videos = slides[i].querySelectorAll("video");

      for (let j = 0; j < videos.length; j++) {
        if (i === activeIndex) {
          continue;
        }

        videos[j].pause();
      }
    }
  };

  const setSlide = function (index) {
    activeIndex = (index + slides.length) % slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.toggle("active", i === activeIndex);
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("active", i === activeIndex);
    }

    syncSlideMedia();

    const activeSlide = slides[activeIndex];
    const activeImage = activeSlide ? activeSlide.querySelector("img[data-media-src]") : null;

    if (activeImage && !activeImage.getAttribute("src")) {
      loadErasmusSlideImage(activeImage);
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", function () { setSlide(activeIndex - 1); });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () { setSlide(activeIndex + 1); });
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () { setSlide(i); });
  }

  syncSlideMedia();
};

const renderErasmusGallery = function () {
  if (!credentialModalContent || !credentialModalSection) { return; }

  credentialModalSection.classList.add("credential-modal--wide");
  credentialModalSection.classList.remove("credential-modal--design");

  if (credentialModalIcon) {
    credentialModalIcon.hidden = false;
  }

  let cardsHtml = "";

  for (let i = 0; i < erasmusCertificates.length; i++) {
    const cert = erasmusCertificates[i];
    cardsHtml += `
      <button type="button" class="credential-gallery-card" data-erasmus-cert-id="${escapeCredentialHtml(cert.id)}">
        <span class="credential-gallery-card-label">Youthpass</span>
        <span class="credential-gallery-card-title">${escapeCredentialHtml(cert.title)}</span>
        <span class="credential-gallery-card-hint">View project &amp; certificate</span>
      </button>
    `;
  }

  credentialModalContent.innerHTML = `
    <h3 class="credential-modal-heading">Erasmus+ Professional Certifications</h3>
    <p class="credential-modal-label">International Management Archive</p>
    <p class="credential-modal-summary">
      An accredited portfolio of European Union Youthpasses earned via intensive professional development programs. Officially validates advanced competencies in international project design, non-formal leadership frameworks, and cross-border team facilitation.
    </p>
    <div class="credential-gallery-grid" data-erasmus-gallery>
      ${cardsHtml}
    </div>
    <a
      href="${escapeCredentialHtml(ERASMUS_DRIVE_FOLDER)}"
      class="credential-modal-cta credential-modal-cta--secondary"
      target="_blank"
      rel="noopener noreferrer"
    >Open full credentials folder</a>
  `;

  const galleryCards = credentialModalContent.querySelectorAll("[data-erasmus-cert-id]");

  for (let i = 0; i < galleryCards.length; i++) {
    const warmCert = function () {
      preloadErasmusCertMedia(getErasmusCertById(this.dataset.erasmusCertId));
    };

    galleryCards[i].addEventListener("mouseenter", warmCert);
    galleryCards[i].addEventListener("focus", warmCert);
    galleryCards[i].addEventListener("touchstart", warmCert, { passive: true });

    galleryCards[i].addEventListener("click", function () {
      renderErasmusCertificateDetail(this.dataset.erasmusCertId);
    });
  }
};

const renderErasmusCertificateDetail = function (certId) {
  let cert = erasmusCertificates[0];

  for (let i = 0; i < erasmusCertificates.length; i++) {
    if (erasmusCertificates[i].id === certId) {
      cert = erasmusCertificates[i];
      break;
    }
  }

  if (credentialModalSection) {
    credentialModalSection.classList.add("credential-modal--wide");
    credentialModalSection.classList.remove("credential-modal--design");
  }

  if (credentialModalIcon) {
    credentialModalIcon.hidden = true;
  }

  const photoBase = getErasmusPhotoBase(cert.slug);
  const previewUrl = getDrivePreviewUrl(cert.fileId);
  const viewUrl = getDriveViewUrl(cert.fileId);
  const mediaItems = getErasmusMediaForCert(cert);

  let slidesHtml = "";
  let dotsHtml = "";

  if (mediaItems.length) {
    for (let i = 0; i < mediaItems.length; i++) {
      const photoIndex = getErasmusPhotoIndex(mediaItems[i].file);

      slidesHtml += `
        <figure
          class="credential-slide${i === 0 ? " active" : ""}"
          data-credential-slide
          data-erasmus-slug="${escapeCredentialHtml(cert.slug)}"
          data-erasmus-photo="${escapeCredentialHtml(photoIndex)}"
        >
          <div class="credential-slide-placeholder">
            ${buildErasmusSlideMediaHtml(cert, mediaItems[i], i, photoBase)}
          </div>
        </figure>
      `;

      dotsHtml += `
        <button
          type="button"
          class="credential-slide-dot${i === 0 ? " active" : ""}"
          data-credential-slide-dot
          aria-label="Slide ${i + 1} of ${mediaItems.length}"
        ></button>
      `;
    }
  } else {
    slidesHtml = `
      <figure class="credential-slide active" data-credential-slide>
        <div class="credential-slide-placeholder">
          <div class="credential-slide-fallback">
            <span>Add media to this certification folder</span>
            <code>${escapeCredentialHtml(photoBase)}/photo-1.jpg</code>
          </div>
        </div>
      </figure>
    `;

    dotsHtml = `
      <button
        type="button"
        class="credential-slide-dot active"
        data-credential-slide-dot
        aria-label="Slide 1 of 1"
      ></button>
    `;
  }

  credentialModalContent.innerHTML = `
    <button type="button" class="credential-back-btn" data-erasmus-back>
      <ion-icon name="arrow-back-outline" aria-hidden="true"></ion-icon>
      <span>All certifications</span>
    </button>
    <h3 class="credential-modal-heading">${escapeCredentialHtml(cert.title)}</h3>

    <div class="credential-slideshow" data-credential-slideshow>
      <div class="credential-slideshow-track">
        ${slidesHtml}
      </div>
      <div class="credential-slideshow-controls">
        <button type="button" class="credential-slideshow-btn" data-credential-slide-prev aria-label="Previous slide">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div class="credential-slideshow-dots">
          ${dotsHtml}
        </div>
        <button type="button" class="credential-slideshow-btn" data-credential-slide-next aria-label="Next slide">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>

    <div class="credential-pdf-panel">
      <iframe
        class="credential-pdf-frame"
        data-credential-pdf-frame
        data-pdf-src="${escapeCredentialHtml(previewUrl)}"
        title="${escapeCredentialHtml(cert.title)} certificate preview"
        loading="eager"
        allow="autoplay"
      ></iframe>
    </div>

    <a
      href="${escapeCredentialHtml(viewUrl)}"
      class="credential-modal-cta"
      target="_blank"
      rel="noopener noreferrer"
    >View certificate</a>
  `;

  const backBtn = credentialModalContent.querySelector("[data-erasmus-back]");

  if (backBtn) {
    backBtn.addEventListener("click", function () { renderErasmusGallery(); });
  }

  bindCredentialSlideshow(credentialModalContent);
  mountErasmusPdfFrame(credentialModalContent, previewUrl);
  hydrateErasmusSlideMedia(credentialModalContent);
};

const openCredentialModal = function (source) {
  if (!credentialModalContent) { return; }

  if (source && source.dataset.designGallery) {
    renderDesignShowcase(source.dataset.designGallery);
  } else if (source && source.dataset.appShowcase) {
    renderAppShowcase(source.dataset.appShowcase);
  } else if (source && source.dataset.escShowcase) {
    renderEscShowcase(source.dataset.escShowcase);
  } else if (source && source.dataset.credentialGallery === "erasmus") {
    renderErasmusGallery();
  } else if (source) {
    if (credentialModalSection) {
      credentialModalSection.classList.remove("credential-modal--wide", "credential-modal--design", "credential-modal--esc");
    }
    if (credentialModalIcon) {
      credentialModalIcon.hidden = false;
    }
    credentialModalContent.innerHTML = source.innerHTML;
  }

  credentialModalFunc();
};

if (credentialModalContainer && credentialModalContent) {

  for (let i = 0; i < projectModalItems.length; i++) {

    const trigger = projectModalItems[i].querySelector("[data-project-modal-trigger]");
    const source = projectModalItems[i].querySelector(".project-modal-data");

    if (!trigger || !source) { continue; }

    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      openCredentialModal(source);
    });

  }

  credentialModalCloseBtn.addEventListener("click", credentialModalFunc);
  credentialOverlay.addEventListener("click", credentialModalFunc);

}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.dataset.selectValue || this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const creativeStrategistPanel = document.querySelector("[data-creative-strategist-panel]");
const projectList = document.querySelector("[data-project-list]");

const CS_UGC_VIDEO_BASE = "./assets/videos/creative-strategist";
const CS_UGC_VIDEO_COUNT = 22;
const CS_UGC_MAX_LOADING = 4;
const CS_UGC_MAX_PLAYING = 4;
const CS_UGC_MARQUEE_DURATION = 110;
const CS_UGC_PRELOAD_SECONDS = 1.5;
const CS_UGC_VISIBLE_LOAD_PRIORITY = 2500;
const CS_UGC_APPROACH_LOAD_PRIORITY = 900;
const CS_UGC_BOOT_REEL_COUNT = 4;
const CS_UGC_SYNC_MS = 160;

const getCsUgcVideoSrc = function (index) {
  return `${CS_UGC_VIDEO_BASE}/ugc-loop-${index}.mp4`;
};

let csUgcPreloadTimer = null;
let csUgcLoadQueue = [];
let csUgcActiveLoads = 0;
let csMediaSuspended = false;

const getCsUgcLimits = function () {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (connection && (connection.saveData || connection.effectiveType === "slow-2g" || connection.effectiveType === "2g")) {
    return { maxLoading: 2, maxPlaying: 2 };
  }

  return { maxLoading: CS_UGC_MAX_LOADING, maxPlaying: CS_UGC_MAX_PLAYING };
};

const buildCsUgcFrameHtml = function (index) {
  return `
    <div class="cs-ugc-frame" data-cs-ugc-frame>
      <video
        data-ugc-src="${getCsUgcVideoSrc(index)}"
        loop
        muted
        playsinline
        preload="none"
        aria-hidden="true"
      ></video>
    </div>
  `;
};

const bindCreativeStrategistVideoEvents = function (video) {
  if (!video || video.dataset.eventsBound === "true") { return; }

  video.dataset.eventsBound = "true";

  const retryPlay = function () {
    if (csMediaSuspended || !creativeStrategistPanel || creativeStrategistPanel.hidden) { return; }
    if (video.dataset.wantsPlay !== "true") { return; }

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(function () {}).catch(function () {});
    }
  };

  video.addEventListener("loadeddata", retryPlay);
  video.addEventListener("canplay", retryPlay);
  video.addEventListener("stalled", retryPlay);
  video.addEventListener("waiting", function () {
    window.setTimeout(retryPlay, 250);
  });

  video.addEventListener("error", function () {
    const source = video.dataset.ugcSrc || video.dataset.csCaseSrc || video.getAttribute("src");

    if (!source) { return; }

    video.dataset.ugcLoading = "false";
    csUgcActiveLoads = Math.max(0, csUgcActiveLoads - 1);
    video.removeAttribute("src");
    video.preload = "none";
    video.load();
    removeUgcLoadQueueItem(video);
    processUgcLoadQueue();

    window.setTimeout(function () {
      if (!csMediaSuspended && video.dataset.wantsPlay === "true") {
        requestUgcVideoLoad(video, 900);
      }
    }, 600);
  });
};

const getCreativeStrategistVideoSource = function (video) {
  return video.dataset.ugcSrc || video.dataset.csCaseSrc || video.getAttribute("src") || "";
};

const removeUgcLoadQueueItem = function (video) {
  csUgcLoadQueue = csUgcLoadQueue.filter(function (item) {
    return item.video !== video;
  });
  video.dataset.ugcQueued = "false";
};

const markUgcVideoReady = function (video) {
  if (!video || video.dataset.ugcLoading !== "true") { return; }

  video.dataset.ugcLoading = "false";
  csUgcActiveLoads = Math.max(0, csUgcActiveLoads - 1);
  processUgcLoadQueue();

  if (video.dataset.wantsPlay === "true") {
    playCreativeStrategistVideo(video);
  }
};

const startUgcVideoLoad = function (video, forceBoot) {
  const source = getCreativeStrategistVideoSource(video);

  if (!video || !source || video.getAttribute("src") || video.dataset.ugcLoading === "true") { return; }

  const limits = getCsUgcLimits();

  if (!forceBoot && csUgcActiveLoads >= limits.maxLoading) { return; }

  csUgcActiveLoads += 1;
  video.dataset.ugcLoading = "true";
  video.dataset.ugcQueued = "false";
  bindCreativeStrategistVideoEvents(video);

  const onReady = function () {
    video.removeEventListener("loadeddata", onReady);
    video.removeEventListener("canplay", onReady);
    video.removeEventListener("canplaythrough", onReady);
    markUgcVideoReady(video);
  };

  video.addEventListener("loadeddata", onReady);
  video.addEventListener("canplay", onReady);
  video.addEventListener("canplaythrough", onReady);
  video.preload = "auto";
  video.src = source;

  if (video.readyState >= 2) {
    window.requestAnimationFrame(onReady);
  }
};

const processUgcLoadQueue = function () {
  const limits = getCsUgcLimits();
  const hasVisibleWaiting = csUgcLoadQueue.some(function (item) {
    return item.priority >= CS_UGC_VISIBLE_LOAD_PRIORITY;
  });
  const loadLimit = hasVisibleWaiting ? limits.maxLoading + 1 : limits.maxLoading;

  csUgcLoadQueue.sort(function (a, b) {
    return b.priority - a.priority;
  });

  while (csUgcActiveLoads < loadLimit && csUgcLoadQueue.length) {
    const item = csUgcLoadQueue.shift();

    if (!item || !item.video || !item.video.isConnected) { continue; }

    if (item.video.getAttribute("src") || item.video.dataset.ugcLoading === "true") {
      item.video.dataset.ugcQueued = "false";
      continue;
    }

    if (hasVisibleWaiting && item.priority < CS_UGC_VISIBLE_LOAD_PRIORITY && csUgcActiveLoads >= limits.maxLoading) {
      csUgcLoadQueue.unshift(item);
      break;
    }

    startUgcVideoLoad(item.video);
  }
};

const requestUgcVideoLoad = function (video, priority) {
  if (!video || video.getAttribute("src") || video.dataset.ugcLoading === "true") { return; }

  const nextPriority = Math.max(priority, 1);

  if (video.dataset.ugcQueued === "true") {
    for (let i = 0; i < csUgcLoadQueue.length; i++) {
      if (csUgcLoadQueue[i].video === video) {
        csUgcLoadQueue[i].priority = Math.max(csUgcLoadQueue[i].priority, nextPriority);
        break;
      }
    }

    processUgcLoadQueue();
    return;
  }

  video.dataset.ugcQueued = "true";
  csUgcLoadQueue.push({ video: video, priority: nextPriority });
  processUgcLoadQueue();
};

const requestVisibleUgcVideoLoad = function (video, visibleWidth) {
  requestUgcVideoLoad(video, CS_UGC_VISIBLE_LOAD_PRIORITY + Math.max(visibleWidth, 1));
};

const ensureCreativeStrategistVideoSource = function (video) {
  if (!video) { return false; }

  const source = getCreativeStrategistVideoSource(video);

  if (!source) { return false; }

  bindCreativeStrategistVideoEvents(video);

  if (!video.getAttribute("src")) {
    requestUgcVideoLoad(video, 800);
    return false;
  }

  return true;
};

const playCreativeStrategistVideo = function (video) {
  if (!video || csMediaSuspended) { return; }

  video.dataset.wantsPlay = "true";

  if (!video.getAttribute("src")) {
    requestUgcVideoLoad(video, CS_UGC_VISIBLE_LOAD_PRIORITY);
    return;
  }

  if (video.dataset.ugcLoading === "true") { return; }

  bindCreativeStrategistVideoEvents(video);

  video.muted = true;
  video.playsInline = true;
  video.defaultMuted = true;
  video.preload = "auto";

  const playPromise = video.play();

  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(function () {}).catch(function () {
      window.setTimeout(function () {
        if (!csMediaSuspended && video.dataset.wantsPlay === "true") {
          video.play().then(function () {}).catch(function () {});
        }
      }, 280);
    });
  }
};

const pauseCreativeStrategistVideo = function (video) {
  if (!video || video.paused) { return; }

  video.dataset.wantsPlay = "false";
  video.pause();
};

const setCreativeStrategistMarqueeRunning = function (isRunning) {
  if (!creativeStrategistPanel) { return; }

  const track = creativeStrategistPanel.querySelector(".cs-ugc-marquee__track");

  if (track) {
    track.style.animationPlayState = isRunning ? "running" : "paused";
  }
};

const getUgcMarqueeMetrics = function (track) {
  if (!track) {
    return { preloadLeadPx: 200, pixelsPerSecond: 200 };
  }

  if (!track.dataset.pixelsPerSecond) {
    const halfWidth = track.scrollWidth / 2;
    const pixelsPerSecond = halfWidth > 0 ? halfWidth / CS_UGC_MARQUEE_DURATION : 200;

    track.dataset.pixelsPerSecond = String(pixelsPerSecond);
    track.dataset.halfWidth = String(halfWidth);
  }

  const pixelsPerSecond = parseFloat(track.dataset.pixelsPerSecond);

  return {
    preloadLeadPx: pixelsPerSecond * CS_UGC_PRELOAD_SECONDS,
    pixelsPerSecond: pixelsPerSecond
  };
};

const preloadUgcVideo = function (video, priority) {
  requestUgcVideoLoad(video, priority || 1);
};

const unloadUgcVideo = function (video) {
  if (!video) { return; }

  removeUgcLoadQueueItem(video);
  video.dataset.wantsPlay = "false";
  video.pause();

  if (video.dataset.ugcLoading === "true") {
    video.dataset.ugcLoading = "false";
    csUgcActiveLoads = Math.max(0, csUgcActiveLoads - 1);
    processUgcLoadQueue();
  }

  if (video.getAttribute("src")) {
    video.removeAttribute("src");
    video.preload = "none";
    video.load();
  }
};

const resetUgcMarqueeState = function () {
  const marqueeRoot = document.querySelector("[data-cs-ugc-marquee]");

  if (!marqueeRoot) { return; }

  delete marqueeRoot.dataset.initialPrimed;
  delete marqueeRoot.dataset.bootComplete;
  csUgcLoadQueue = [];
  csUgcActiveLoads = 0;

  const track = marqueeRoot.querySelector(".cs-ugc-marquee__track");

  if (track) {
    delete track.dataset.pixelsPerSecond;
    delete track.dataset.halfWidth;
  }
};

const getMarqueeFrameLoadScore = function (rect, viewportRight, preloadLeadPx) {
  const frameWidth = rect.width || 200;
  const isVisible = rect.left < viewportRight && rect.right > 0;

  if (isVisible) {
    const visibleLeft = Math.max(rect.left, 0);
    const visibleRight = Math.min(rect.right, viewportRight);
    const visibleWidth = Math.max(visibleRight - visibleLeft, 0);

    return 1100 + visibleWidth;
  }

  if (rect.left >= viewportRight && rect.left < viewportRight + preloadLeadPx) {
    const distance = rect.left - viewportRight;
    const closeness = 1 - (distance / preloadLeadPx);

    return 880 + Math.floor(closeness * 140);
  }

  if (rect.right > 0 && rect.right <= frameWidth * 0.75 && rect.left < 0) {
    return 0;
  }

  return 0;
};

const isMarqueeFrameVisible = function (rect, viewportRight) {
  return rect.left < viewportRight && rect.right > 0;
};

const getMarqueeVisibleWidth = function (rect, viewportRight) {
  const visibleLeft = Math.max(rect.left, 0);
  const visibleRight = Math.min(rect.right, viewportRight);

  return Math.max(visibleRight - visibleLeft, 0);
};

const isMarqueeFrameApproaching = function (rect, viewportRight, preloadLeadPx) {
  return rect.left >= viewportRight && rect.left < viewportRight + preloadLeadPx;
};

const bootInitialMarqueeReels = function (frames) {
  if (!frames || !frames.length) { return; }

  const viewportRight = window.innerWidth;
  const visibleCandidates = [];
  const fallbackVideos = [];

  for (let i = 0; i < frames.length; i++) {
    const video = frames[i].querySelector("video");

    if (!video) { continue; }

    fallbackVideos.push(video);

    const rect = frames[i].getBoundingClientRect();

    if (isMarqueeFrameVisible(rect, viewportRight)) {
      visibleCandidates.push({
        video: video,
        score: getMarqueeVisibleWidth(rect, viewportRight)
      });
    }
  }

  visibleCandidates.sort(function (a, b) {
    return b.score - a.score;
  });

  const bootVideos = [];

  for (let i = 0; i < visibleCandidates.length && bootVideos.length < CS_UGC_BOOT_REEL_COUNT; i++) {
    bootVideos.push(visibleCandidates[i].video);
  }

  for (let i = 0; i < fallbackVideos.length && bootVideos.length < CS_UGC_BOOT_REEL_COUNT; i++) {
    if (bootVideos.indexOf(fallbackVideos[i]) === -1) {
      bootVideos.push(fallbackVideos[i]);
    }
  }

  for (let i = 0; i < bootVideos.length; i++) {
    const video = bootVideos[i];

    video.dataset.wantsPlay = "true";
    removeUgcLoadQueueItem(video);

    if (!video.getAttribute("src")) {
      startUgcVideoLoad(video, true);
    }

    playCreativeStrategistVideo(video);
  }
};

const primeInitialUgcFrames = function (frames) {
  bootInitialMarqueeReels(frames);

  const viewportRight = window.innerWidth;
  const track = creativeStrategistPanel
    ? creativeStrategistPanel.querySelector(".cs-ugc-marquee__track")
    : null;
  const preloadLeadPx = getUgcMarqueeMetrics(track).preloadLeadPx;
  let bestApproach = null;

  for (let i = 0; i < frames.length; i++) {
    const rect = frames[i].getBoundingClientRect();
    const video = frames[i].querySelector("video");

    if (!video || !isMarqueeFrameApproaching(rect, viewportRight, preloadLeadPx)) { continue; }

    const score = getMarqueeFrameLoadScore(rect, viewportRight, preloadLeadPx);

    if (!bestApproach || score > bestApproach.score) {
      bestApproach = { video: video, score: score };
    }
  }

  if (bestApproach) {
    requestUgcVideoLoad(bestApproach.video, CS_UGC_APPROACH_LOAD_PRIORITY + 40);
    bestApproach.video.dataset.wantsPlay = "true";
  }
};

const suspendCreativeStrategistMedia = function () {
  if (!creativeStrategistPanel) { return; }

  csMediaSuspended = true;
  setCreativeStrategistMarqueeRunning(false);
  stopUgcMarqueeSync();
  resetUgcMarqueeState();

  const videos = creativeStrategistPanel.querySelectorAll("video");

  for (let i = 0; i < videos.length; i++) {
    if (videos[i].dataset.ugcSrc || videos[i].dataset.csCaseSrc) {
      unloadUgcVideo(videos[i]);
    } else {
      pauseCreativeStrategistVideo(videos[i]);
    }
  }
};

const pauseCreativeStrategistMedia = function () {
  suspendCreativeStrategistMedia();
};

const resumeCreativeStrategistMedia = function () {
  if (!creativeStrategistPanel || creativeStrategistPanel.hidden || !isPortfolioPageActive()) { return; }

  csMediaSuspended = false;
  setCreativeStrategistMarqueeRunning(true);
  startUgcMarqueeSync();

  const startPlayback = function () {
    const marqueeRoot = document.querySelector("[data-cs-ugc-marquee]");
    const frames = marqueeRoot ? marqueeRoot.querySelectorAll("[data-cs-ugc-frame]") : [];

    if (marqueeRoot && marqueeRoot.dataset.bootComplete !== "true" && frames.length) {
      bootInitialMarqueeReels(frames);
      marqueeRoot.dataset.initialPrimed = "true";
      marqueeRoot.dataset.bootComplete = "true";
    }

    syncCreativeStrategistPlayback();
  };

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(startPlayback);
  });
};

const playAllCaseStudyVideos = function () {
  syncCaseStudyPlayback();
};

const syncCaseStudyPlayback = function () {
  if (!creativeStrategistPanel || creativeStrategistPanel.hidden) { return; }

  const caseVideos = creativeStrategistPanel.querySelectorAll(".cs-editorial-row__media video");

  for (let i = 0; i < caseVideos.length; i++) {
    const media = caseVideos[i].closest(".cs-editorial-row__media") || caseVideos[i];
    const rect = media.getBoundingClientRect();

    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      requestUgcVideoLoad(caseVideos[i], 700 + Math.max(window.innerHeight - rect.top, 0));
      playCreativeStrategistVideo(caseVideos[i]);
    } else {
      pauseCreativeStrategistVideo(caseVideos[i]);
    }
  }
};

const syncUgcMarqueePlayback = function () {
  const marqueeRoot = document.querySelector("[data-cs-ugc-marquee]");

  if (!marqueeRoot || !creativeStrategistPanel || creativeStrategistPanel.hidden || csMediaSuspended) { return; }

  const track = marqueeRoot.querySelector(".cs-ugc-marquee__track");
  const frames = marqueeRoot.querySelectorAll("[data-cs-ugc-frame]");
  const metrics = getUgcMarqueeMetrics(track);
  const viewportRight = window.innerWidth;
  const preloadLeadPx = metrics.preloadLeadPx;
  const approachCandidates = [];

  if (marqueeRoot.dataset.initialPrimed !== "true") {
    primeInitialUgcFrames(frames);
    marqueeRoot.dataset.initialPrimed = "true";
    marqueeRoot.dataset.bootComplete = "true";
  }

  for (let i = 0; i < frames.length; i++) {
    const video = frames[i].querySelector("video");
    const rect = frames[i].getBoundingClientRect();
    const frameWidth = rect.width || 200;
    const isVisible = isMarqueeFrameVisible(rect, viewportRight);
    const visibleWidth = getMarqueeVisibleWidth(rect, viewportRight);
    const isApproaching = isMarqueeFrameApproaching(rect, viewportRight, preloadLeadPx);
    const shouldUnload = rect.right < -(frameWidth * 2) || rect.left > window.innerWidth + preloadLeadPx * 1.5;

    if (!video) { continue; }

    if (shouldUnload) {
      unloadUgcVideo(video);
      continue;
    }

    if (isVisible) {
      video.dataset.wantsPlay = "true";

      if (!video.getAttribute("src")) {
        requestVisibleUgcVideoLoad(video, visibleWidth);
      } else if (video.dataset.ugcLoading !== "true") {
        playCreativeStrategistVideo(video);
      }
    } else if (isApproaching) {
      const distance = rect.left - viewportRight;
      const closeness = 1 - (distance / preloadLeadPx);

      approachCandidates.push({
        video: video,
        score: closeness
      });
      video.dataset.wantsPlay = "true";

      if (!video.getAttribute("src")) {
        requestUgcVideoLoad(video, CS_UGC_APPROACH_LOAD_PRIORITY + Math.floor(closeness * 80));
      } else if (video.dataset.ugcLoading !== "true") {
        playCreativeStrategistVideo(video);
      }
    } else {
      pauseCreativeStrategistVideo(video);
    }
  }

  approachCandidates.sort(function (a, b) {
    return b.score - a.score;
  });

  for (let i = 0; i < approachCandidates.length && i < 1; i++) {
    const video = approachCandidates[i].video;

    if (!video.getAttribute("src")) {
      requestUgcVideoLoad(video, CS_UGC_APPROACH_LOAD_PRIORITY + 60);
      video.dataset.wantsPlay = "true";
    }
  }
};

const stopUgcMarqueeSync = function () {
  if (csUgcPreloadTimer) {
    window.clearInterval(csUgcPreloadTimer);
    csUgcPreloadTimer = null;
  }
};

const syncCreativeStrategistPlayback = function () {
  syncUgcMarqueePlayback();
  syncCaseStudyPlayback();
};

const startUgcMarqueeSync = function () {
  stopUgcMarqueeSync();
  syncCreativeStrategistPlayback();
  csUgcPreloadTimer = window.setInterval(syncCreativeStrategistPlayback, CS_UGC_SYNC_MS);
};

const bindCreativeStrategistUgcPlayback = function () {
  csMediaSuspended = false;
  setCreativeStrategistMarqueeRunning(true);
  startUgcMarqueeSync();
};

const bindCreativeStrategistCasePlayback = function () {
  window.requestAnimationFrame(function () {
    playAllCaseStudyVideos();
  });
};

const initCreativeStrategistUgcMarquee = function () {
  const marqueeRoot = document.querySelector("[data-cs-ugc-marquee]");

  if (!marqueeRoot || marqueeRoot.dataset.initialized === "true") { return; }

  let framesHtml = "";

  for (let pass = 0; pass < 2; pass++) {
    for (let i = 1; i <= CS_UGC_VIDEO_COUNT; i++) {
      framesHtml += buildCsUgcFrameHtml(i);
    }
  }

  marqueeRoot.innerHTML = `<div class="cs-ugc-marquee__track">${framesHtml}</div>`;
  marqueeRoot.dataset.initialized = "true";

  const ugcVideos = marqueeRoot.querySelectorAll("video");

  for (let i = 0; i < ugcVideos.length; i++) {
    bindCreativeStrategistVideoEvents(ugcVideos[i]);
  }
};

const initCreativeStrategistMedia = function () {
  initCreativeStrategistUgcMarquee();
  bindCreativeStrategistUgcPlayback();
  bindCreativeStrategistCasePlayback();
};

const isPortfolioPageActive = function () {
  const portfolioPage = document.querySelector('[data-page="portfolio"]');

  return Boolean(portfolioPage && portfolioPage.classList.contains("active"));
};

const syncCreativeStrategistMediaState = function () {
  if (
    creativeStrategistPanel
    && !creativeStrategistPanel.hidden
    && isPortfolioPageActive()
    && !document.hidden
  ) {
    csMediaSuspended = false;
    initCreativeStrategistMedia();
    resumeCreativeStrategistMedia();
  } else {
    pauseCreativeStrategistMedia();
  }
};

const syncCreativeStrategistPanel = function (selectedValue) {
  const isCreativeStrategist = selectedValue === "creative-strategist";

  if (creativeStrategistPanel) {
    creativeStrategistPanel.hidden = !isCreativeStrategist;
    creativeStrategistPanel.classList.toggle("active", isCreativeStrategist);

    if (isCreativeStrategist) {
      if (isPortfolioPageActive()) {
        csMediaSuspended = false;
        initCreativeStrategistMedia();
        resumeCreativeStrategistMedia();
      } else {
        pauseCreativeStrategistMedia();
      }
    } else {
      pauseCreativeStrategistMedia();
    }
  }

  if (projectList) {
    projectList.hidden = isCreativeStrategist;
  }
};

const creativeStrategistFilterBtn = document.querySelector('[data-filter-btn="creative-strategist"]');


document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    suspendCreativeStrategistMedia();
    return;
  }

  syncCreativeStrategistMediaState();
});

window.addEventListener("focus", function () {
  syncCreativeStrategistMediaState();
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    syncCreativeStrategistMediaState();
  }
});

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

  syncCreativeStrategistPanel(selectedValue);

}

// add event in all filter button items for large screen
let lastClickedBtn = document.querySelector('[data-filter-btn="creative-strategist"]') || filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.dataset.filterBtn || this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

filterFunc("creative-strategist");
if (selectValue) {
  selectValue.innerText = "Strategy & Performance";
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// published author — 3-book interactive showcase
const authorSelector = document.querySelector("[data-author-selector]");
const authorPanel = document.querySelector("[data-author-panel]");
const authorFeature = document.querySelector("[data-author-feature]");
const authorGrid = document.querySelector("[data-author-grid]");

const authorBooks = [
  {
    id: "set-your-sail",
    title: "Set Your Sail",
    titleAlt: "Подигни го едрото",
    tag: "Mindset & Personal Development",
    coverImage: "./assets/images/author/set-your-sail-mockup.png",
    synopsis:
      "A foundational guide exploring self-sufficiency, vision cultivation, and structured personal development frameworks inspired by classic philosophy. Showcased at international book festivals.",
    ctaUrl: "https://www.amazon.com/Set-Your-Sail-Timeless-Navigating-ebook/dp/B0FYRLFY8P/ref=sr_1_1?dib=eyJ2IjoiMSJ9.XsPHwT4mIbLS_HH6nrm7lA.1VoZCyrrmq8SzauzKsn1af2GDoTF-PZWU8NMcm841Q0&dib_tag=se&keywords=Set+Your+Sail+George+Trajkov&qid=1781329203&sr=8-1",
    accent: "sail",
    cards: [
      { title: "The Inner Compass", meta: "Core Pillar", topic: "Vision", description: "Constructing structured vision roadmaps to confidently navigate the changing seasons of life and actively build your future self.", icon: "compass-outline", visual: "pillar", image: "./assets/images/books/set-your-sail/photo-the-inner-compas.png" },
      { title: "Mindset Resilience", meta: "Core Pillar", topic: "Fortitude", description: "Mastering tactical personal development frameworks to effectively guard your mind, conquer worry, and maintain absolute emotional control.", icon: "shield-outline", visual: "pillar", image: "./assets/images/books/set-your-sail/photo-mindset-resiliance.png" },
      { title: "Attitude Architecture", meta: "Core Pillar", topic: "Workshops", description: "Cultivating a high-performance perspective to systematically transform external obstacles into strategic, competitive advantages.", icon: "people-outline", visual: "pillar", image: "./assets/images/books/set-your-sail/photo-attitude-architecture.png" },
      { title: "The Seasons of Life", meta: "Core Pillar", topic: "Action", description: "Navigating the cyclical shifts of professional environments with the strategic patience to prepare during downturns and the agility to harvest success.", icon: "flag-outline", visual: "pillar", image: "./assets/images/books/set-your-sail/photo-the-seasons-of-life.png" },
      { title: "Media & Podcasts", meta: "Core Pillar", topic: "Broadcast", description: "Amplifying impactful growth concepts across modern digital ecosystems, regional networks, and broadcast podcast appearances.", icon: "mic-outline", visual: "pillar", image: "./assets/images/books/set-your-sail/photo-media-podcast.png", imageOffsetY: 100 },
      { title: "Public Exhibition", meta: "Book Festival", topic: "Showcase", description: "Actively driving regional print distribution pipelines and featuring title showcases live at major public book festivals and literary fairs.", icon: "globe-outline", visual: "festival", image: "./assets/images/books/set-your-sail/photo-public exhebition.jpg" }
    ]
  },
  {
    id: "dark-psychology",
    title: "Dark Psychology: 59 Ways They Control You",
    titleAlt: "",
    tag: "Covert Influence",
    synopsis:
      "A raw, comprehensive blueprint mapping out 59 subtle manipulation tactics used to hijack human autonomy, decode behavioral control, and fortify absolute psychological sovereignty.",
    coverImage: "./assets/images/author/dark-psychology-mockup.png",
    ctaUrl: "https://www.amazon.com/dp/B0H5K3MDHG",
    accent: "psychology",
    cards: [
      { title: "Reality Distortion", meta: "Core Chapter", topic: "Distortion", description: "Decoding subtle gaslighting and memory manipulation patterns to instantly recognize when external forces attempt to rewrite your perception of objective truth.", icon: "eye-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-reality-distortion.png" },
      { title: "Cognitive Dissonance", meta: "Core Chapter", topic: "Social traps", description: "Unmasking how internal psychological friction is engineered to systematically manipulate decision-making structures and force individuals into accepting conflicting beliefs.", icon: "heart-dislike-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-cognitive-dissonance.png" },
      { title: "Emotional Leverage", meta: "Core Chapter", topic: "Defense", description: "Dissecting the underlying mechanics of emotional blackmail, love-bombing, and weaponized empathy used to quietly manufacture invisible compliance frameworks.", icon: "shield-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-emotional-leverage.png" },
      { title: "Systemic Bias", meta: "Core Chapter", topic: "Freedom", description: "Analyzing how authority bias, groupthink induction, and social proof exploitation are strategically leveraged to guide or control collective human behavior.", icon: "link-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-systemic-bias.png" },
      { title: "Relational Fragmentation", meta: "Core Chapter", topic: "History", description: "Isolating covert triangulation and divide-and-conquer strategies explicitly designed to alter relational dynamics, generate dependency, and exploit individual vulnerabilities.", icon: "time-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-relational-fragmentation.png" },
      { title: "Public Exhibition", meta: "Core Chapter", topic: "Sovereignty", description: "Actively driving regional print distribution pipelines and featuring title showcases live at major public book festivals and open-air literary fairs.", icon: "lock-open-outline", visual: "pillar", image: "./assets/images/books/dark-psychology/photo-public-exhibition.jpg" }
    ]
  },
  {
    id: "think-again",
    title: "Thought Experiments: Challenge Reality. Question Everything.",
    featuredTitle: "Thought Experiments",
    titleAlt: "",
    tag: "Cognitive Paradoxes",
    synopsis:
      "An intellectual journey through history's most profound philosophical puzzles, quantum dilemmas, and simulated realities designed to break conventional thinking boundaries and question the ultimate nature of existence.",
    coverImage: "./assets/images/author/thought-experiments-mockup.png",
    ctaUrl: "https://www.amazon.com/dp/B0H5DR8WG9",
    accent: "philosophy",
    cards: [
      { title: "Simulated Realities", meta: "Core Chapter", topic: "Existential futures", description: "Analyzing deep existential paradoxes and simulated matrix theories to question whether our perceived universe is an objective truth or an engineered digital illusion.", icon: "hardware-chip-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-simulated-relics.png" },
      { title: "Quantum Paradoxes", meta: "Core Chapter", topic: "Perception", description: "Investigating mind-bending quantum hypotheses and cosmic anomalies that challenge the traditional boundaries of physics, memory, and personal consciousness.", icon: "cube-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-quantum-paradoxes.png" },
      { title: "Cognitive Limits", meta: "Core Chapter", topic: "Cognitive loops", description: "Dissecting foundational thought experiments that explore the deep chasm between raw computer data processing, artificial intelligence, and genuine qualitative human experience.", icon: "library-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-cognitive-limits.png" },
      { title: "Temporal Mechanics", meta: "Core Chapter", topic: "Reality", description: "Exploring radical temporal loops and philosophical paradoxes that challenge how we define historical reality, memory validity, and the flow of time.", icon: "flask-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-temporal-mechanics.png" },
      { title: "Moral Equations", meta: "Core Chapter", topic: "Logic", description: "Evaluating complex ethical dilemmas and utilitarian frameworks that force a structural reassessment of human empathy and decision-making under extreme logical constraints.", icon: "git-network-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-moral-equation.png" },
      { title: "Public Exhibition", meta: "Core Chapter", topic: "Growth", description: "Actively driving regional print distribution pipelines and featuring title showcases live at major public book festivals and open-air literary fairs.", icon: "infinite-outline", visual: "pillar", image: "./assets/images/books/think-again/photo-public-exhibition.jpg" }
    ]
  }
];

let activeAuthorBookId = authorBooks[0].id;

const escapeAuthorHtml = function (value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const getAuthorBookById = function (bookId) {
  for (let i = 0; i < authorBooks.length; i++) {
    if (authorBooks[i].id === bookId) { return authorBooks[i]; }
  }
  return authorBooks[0];
};

const renderAuthorHero = function (book) {
  const featuredTitle = book.featuredTitle || book.title;
  const titleAlt = book.titleAlt
    ? `<p class="author-book-title-mk">${escapeAuthorHtml(book.titleAlt)}</p>`
    : "";
  const coverMockupClass = book.coverImage ? " author-book-cover--mockup" : "";
  const coverMockupBg = book.coverImage
    ? `<img class="author-book-cover-photo" src="${escapeAuthorHtml(book.coverImage)}" alt="" aria-hidden="true">`
    : "";

  authorFeature.innerHTML = `
    <div class="author-book-feature">
      <div class="author-book-cover${coverMockupClass}" data-accent="${escapeAuthorHtml(book.accent)}" aria-hidden="true">
        ${coverMockupBg}
        <p class="author-book-eyebrow">Featured Title</p>
        <p class="author-book-title-en">${escapeAuthorHtml(featuredTitle)}</p>
        ${titleAlt}
        <p class="author-book-byline">George Trajkov</p>
      </div>
      <div class="author-book-copy">
        <p class="author-book-tag">${escapeAuthorHtml(book.tag)}</p>
        <h3 class="h3 author-book-headline">
          <a href="${escapeAuthorHtml(book.ctaUrl)}" class="blog-item-title-link author-external-link" target="_blank" rel="noopener noreferrer">${escapeAuthorHtml(featuredTitle)}</a>
        </h3>
        ${book.titleAlt ? `<p class="author-book-subtitle">${escapeAuthorHtml(book.titleAlt)}</p>` : ""}
        <p class="author-book-synopsis">${escapeAuthorHtml(book.synopsis)}</p>
        <a href="${escapeAuthorHtml(book.ctaUrl)}" class="author-kindle-cta author-external-link" target="_blank" rel="noopener noreferrer">
          <ion-icon name="book-outline" aria-hidden="true"></ion-icon>
          <span>Read on Amazon Kindle</span>
        </a>
      </div>
    </div>
  `;
};

const renderAuthorGrid = function (book) {
  let gridHtml = "";

  for (let i = 0; i < book.cards.length; i++) {
    const card = book.cards[i];
    const metaSecondary = card.topic
      ? `<span class="dot"></span><p class="blog-category">${escapeAuthorHtml(card.topic)}</p>`
      : "";

    const photoOffsetClass = card.imageOffsetY ? " author-card-photo--offset" : "";
    const photoOffsetStyle = card.imageOffsetY
      ? ` style="--author-photo-offset-y: ${card.imageOffsetY}px"`
      : "";

    const visualMarkup = card.image
      ? `<img class="author-card-photo${photoOffsetClass}"${photoOffsetStyle} src="${escapeAuthorHtml(encodeURI(card.image))}" alt="" loading="lazy" onerror="this.classList.add('is-hidden'); this.nextElementSibling.classList.remove('is-hidden');">
            <ion-icon class="author-card-icon-fallback is-hidden" name="${escapeAuthorHtml(card.icon)}" aria-hidden="true"></ion-icon>`
      : `<ion-icon name="${escapeAuthorHtml(card.icon)}" aria-hidden="true"></ion-icon>`;

    gridHtml += `
      <li class="blog-post-item author-card" style="animation-delay: ${i * 50}ms">
        <div class="blog-card-inner">
          <figure class="blog-banner-box">
            <div class="author-card-visual${card.image ? " author-card-visual--photo" : ""}" data-visual="${escapeAuthorHtml(card.visual)}">
              ${visualMarkup}
            </div>
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${escapeAuthorHtml(card.meta)}</p>
              ${metaSecondary}
            </div>
            <h3 class="h3 blog-item-title">
              <a href="${escapeAuthorHtml(book.ctaUrl)}" class="blog-item-title-link author-external-link" target="_blank" rel="noopener noreferrer">${escapeAuthorHtml(card.title)}</a>
            </h3>
            <p class="blog-text">${escapeAuthorHtml(card.description)}</p>
          </div>
        </div>
      </li>
    `;
  }

  authorGrid.innerHTML = gridHtml;
};

const setActiveAuthorSelector = function (bookId) {
  const selectorButtons = authorSelector.querySelectorAll("[data-book-id]");

  for (let i = 0; i < selectorButtons.length; i++) {
    const isActive = selectorButtons[i].dataset.bookId === bookId;
    selectorButtons[i].classList.toggle("active", isActive);
    selectorButtons[i].setAttribute("aria-pressed", isActive ? "true" : "false");
  }
};

const renderAuthorBook = function (bookId) {
  const book = getAuthorBookById(bookId);
  activeAuthorBookId = book.id;
  renderAuthorHero(book);
  renderAuthorGrid(book);
  setActiveAuthorSelector(book.id);
};

const switchAuthorBook = function (bookId) {
  if (bookId === activeAuthorBookId || !authorPanel) { return; }

  authorPanel.classList.add("is-switching");

  window.setTimeout(function () {
    renderAuthorBook(bookId);
    authorPanel.classList.remove("is-switching");
  }, 180);
};

const initAuthorBooks = function () {
  if (!authorSelector || !authorFeature || !authorGrid) { return; }

  let selectorHtml = "";

  for (let i = 0; i < authorBooks.length; i++) {
    const book = authorBooks[i];
    const isActive = i === 0;

    const selectorTitleAlt = book.titleAlt
      ? `<span class="author-selector-title-alt">${escapeAuthorHtml(book.titleAlt)}</span>`
      : "";

    selectorHtml += `
      <li>
        <button type="button" class="author-selector-card${isActive ? " active" : ""}" data-book-id="${escapeAuthorHtml(book.id)}" aria-pressed="${isActive ? "true" : "false"}">
          <span class="author-selector-title">${escapeAuthorHtml(book.featuredTitle || book.title)}</span>
          ${selectorTitleAlt}
          <span class="author-selector-tag">${escapeAuthorHtml(book.tag)}</span>
        </button>
      </li>
    `;
  }

  authorSelector.innerHTML = selectorHtml;

  const selectorButtons = authorSelector.querySelectorAll(".author-selector-card");

  for (let i = 0; i < selectorButtons.length; i++) {
    selectorButtons[i].addEventListener("click", function () {
      switchAuthorBook(this.dataset.bookId);
    });
  }

  renderAuthorBook(authorBooks[0].id);
};

initAuthorBooks();



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const activateNavPage = function (pageName) {
  for (let i = 0; i < pages.length; i++) {
    const isMatch = pages[i].dataset.page === pageName;
    pages[i].classList.toggle("active", isMatch);
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    const linkPage = navigationLinks[i].innerHTML.trim().toLowerCase();
    navigationLinks[i].classList.toggle("active", linkPage === pageName);
  }

  window.scrollTo(0, 0);
  syncCreativeStrategistMediaState();
};

const activatePortfolioFilter = function (filterValue, filterLabel) {
  if (!filterValue || typeof filterFunc !== "function") { return; }

  if (selectValue && filterLabel) {
    selectValue.innerText = filterLabel;
  }

  for (let i = 0; i < filterBtn.length; i++) {
    const btnValue = filterBtn[i].dataset.filterBtn;
    const isActive = btnValue === filterValue;

    filterBtn[i].classList.toggle("active", isActive);

    if (isActive && typeof lastClickedBtn !== "undefined") {
      if (lastClickedBtn && lastClickedBtn !== filterBtn[i]) {
        lastClickedBtn.classList.remove("active");
      }

      lastClickedBtn = filterBtn[i];
    }
  }

  filterFunc(filterValue);
};

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

    syncCreativeStrategistMediaState();

  });
}

const heroCtaButtons = document.querySelectorAll("[data-hero-cta]");

for (let i = 0; i < heroCtaButtons.length; i++) {
  heroCtaButtons[i].addEventListener("click", function () {
    const target = this.dataset.heroCta;

    if (target === "case-studies") {
      activateNavPage("portfolio");
      activatePortfolioFilter("creative-strategist", "Strategy & Performance");
    } else if (target === "contact") {
      activateNavPage("contact");
    }
  });
}
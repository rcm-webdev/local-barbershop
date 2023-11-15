const services = [
  {
    title: "Men's Classic Haircut",
    description:
      "The timeless trim that exudes confidence and style—our classic haircut is your passport to looking effortlessly dapper and ready to conquer the world.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="currentColor" rx="3"/><path stroke="#fff" d="M19 19C21 22 21 26 19 29"/><path stroke="#fff" d="M36 14L21 24L36 34"/><circle cx="16" cy="16" r="4" stroke="#fff"/><circle cx="16" cy="32" r="4" stroke="#fff"/></g></svg>`,
  },
  {
    title: "Men's Classic Haircut with Fade",
    description:
      "Elevate your style with a modern twist! Our classic haircut with a fade adds that extra edge, ensuring you leave feeling sharp and on-trend.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 28V15.6522C15 13 18 10 24 10C30 10 33 13 33 15.6522V28"/><path fill="#2F88FF" d="M12 34V28H36V34H12Z"/><path d="M20 4H28"/><path d="M8 16V28H40V16"/><path d="M17 43L31 43"/><path d="M24 34V43"/><path d="M24 4V10"/></g></svg>`,
  },
  {
    title: "Fade Only Service",
    description:
      "A precision-focused transformation that sharpens your edges and adds a touch of modern finesse to your style. Trust our skilled barbers to sculpt the perfect fade, accentuating your confidence and leaving you with a fresh, refined appearance.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#2F88FF" d="M29.7961 24H16.2039C16.2039 24 12.2176 31.7083 18.7524 34.8333C22.9346 37.3333 16.2039 44 16.2039 44H29.7962C29.7962 44 23.0654 36.7083 27.2476 34.8333C33.7824 31.7083 29.7961 24 29.7961 24Z"/><path d="M37 10L30 24H16L9 10C9 10 12 4 23 4C34 4 37 10 37 10Z"/><path d="M25 24L27 12"/><path d="M21 24L19 12"/></g></svg>`,
  },
  {
    title: "Beard Trim",
    description:
      "Crafting impeccable facial landscapes, our beard trim service shapes your facial hair into a masterpiece, tailored to express your unique masculinity.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 8L38 8V17L33 24V36C33 36 33 44 24 44C15 44 15 36 15 36L15 24L10 17V8Z"/><path d="M15 4V10"/><path d="M21 4V10"/><path d="M27 4V10"/><rect width="6" height="10" x="21" y="28" fill="#2F88FF" rx="3"/><path d="M10 17H38"/><path d="M33 4V10"/></g></svg>`,
  },
  {
    title: "Men's Haircut with Fade & Beard Trim",
    description:
      "For the ultimate makeover: a fusion of precision cutting and sculpting. Our haircut with fade and beard trim combo promises a complete transformation, leaving you looking effortlessly suave",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white"  viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="38" height="6" x="3.609" y="36.534" fill="#2F88FF" rx="2" transform="rotate(-10 3.61 36.534)"/><path d="M44 40L40 36"/><path fill="#2F88FF" d="M8 4L26.3848 22.3848L22.1421 26.6274C22.1421 26.6274 12.2426 16.7279 9.41419 13.8995C6.58577 11.071 6.58575 9.65682 6.58577 8.24262C6.58579 6.82843 8 4 8 4Z"/><path d="M8 4L26 22L35 31"/></g></svg>`,
  },
  {
    title: "Kid's Haircut",
    description:
      "We make grooming fun for the little champs too! Our kid-friendly barbers ensure a joyful experience, delivering cool cuts that match their playful personalities.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="stroke-black dark:stroke-white"  viewBox="0 0 48 48"><g fill="none" stroke-linejoin="round" stroke-width="2"><path fill="#2F88FF" stroke="currentColor" d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4H15C13.8954 4 12.9976 4.89414 12.9681 5.99832C12.8995 8.57035 12.6829 12.9512 12 15C11.2389 17.2832 8.16103 20.1456 6.73361 21.3831C6.27454 21.7811 6 22.3537 6 22.9613V42C6 43.1046 6.89543 44 8 44H40C41.1046 44 42 43.1046 42 42V22.9613C42 22.3537 41.7255 21.7811 41.2664 21.3831C39.839 20.1456 36.7611 17.2832 36 15C35.3171 12.9512 35.1005 8.57035 35.0319 5.99832C35.0024 4.89414 34.1046 4 33 4H30Z"/><rect width="6" height="12" x="27" y="24" stroke="#fff"/><path stroke="#fff" stroke-linecap="round" d="M15 24H21V36H15"/><path stroke="#fff" stroke-linecap="round" d="M21 30H15"/></g></svg>`,
  },
];

export { services };

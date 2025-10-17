

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Language switch & CV files

This project includes a simple language toggle (EN / ID) in the hero section. When you switch languages, the "Download CV" button will link to a different PDF depending on the selected language.

Place your CV files inside the `public/` folder with these filenames:

- `/public/cv-en.pdf` (English CV)
- `/public/cv-id.pdf` (Bahasa Indonesia CV)

If you use different filenames, update the anchor href in `src/pages/Index.tsx` accordingly.

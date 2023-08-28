import { useHead } from "@vueuse/head";
import { ref, onMounted } from "vue";

import OgImage from "@/assets/images/thumbnail.svg";
interface useStructuredData {
  name: string;
  url: string;
  description: string;
  datePublished: string;
  logo: string,
}
const structuredData: useStructuredData = {
  name: "Gigi Shalamberidze",
  url: "URL of your website",
  description: "Portfolio website of Gigi Shalamberidze",
  datePublished: "2023-08-28",
  logo: OgImage,
};
export function usePageMetaData(
  title: string,
  description: string,
  keywords: string
) {
  const pageTitle = ref(title);
  const pageDescription = ref(description);

  onMounted(() => {
    pageTitle.value = title;
    pageDescription.value = description;
  });

  useHead({
    title: pageTitle,
    meta: [
      {
        name: "description",
        content: pageDescription,
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: "Gigi Shalamberidze",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      // Open Graph tags
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: OgImage,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Person",
          name: structuredData.name,
          url: structuredData.url,
          description: structuredData.description,
          datePublished: structuredData.datePublished,
          logo: structuredData.logo,
        }),
      },
    ],
  });
}

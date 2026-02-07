import Helmet from 'react-helmet';
import type { SeoProps } from '../../../core/components/props';

export function SEO({ title, description, route, children }: SeoProps) {
  const url = `https://smth-fun.com/${route || ''}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": url,
    "name": title,
    "description": description,
    "isPartOf": { "@id": "https://smth-fun.com#website" }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://smth-fun.com/icons/android-chrome-512x512.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://smth-fun.com/icons/android-chrome-512x512.png" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      {children}
    </>
  );
}

import Helmet from 'react-helmet';
import type { SeoProps } from '../../../core/components/props';

export function SEO({ title, description, schemaMarkup, children }: SeoProps) {
  return <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph for Facebook, LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
    {children}
  </>
};

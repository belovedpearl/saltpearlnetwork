import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, image }) => {
  const location = useLocation();
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Your Website Name" />
      <meta property="og:type" content="website" />

      {/* Twitter Card (For Twitter Previews) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
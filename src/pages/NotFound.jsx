import SEO from "../components/seo/SEO";

export default function NotFound() {
  return (
    <div className="p-10 text-3xl">
      <SEO
        title="404"
        description="The page you are looking for could not be found."
        image="/logo.png"
        url={window.location.href}
      />
      404 - Not Found
    </div>
  );
}

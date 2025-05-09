// app/docs/[...slug]/page.js
export default function DocsPage({ params }) {
  const path = params.slug ? params.slug.join('/') : 'Root';
  return (
    <div>
      <h2>Documentation Page</h2>
      <p>Path: /docs/{path}</p>
      {/* Here you would render content based on the slug */}
    </div>
  );
}
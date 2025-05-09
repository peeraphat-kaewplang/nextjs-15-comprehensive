// app/templated-section/layout.js
export default function TemplatedSectionLayout({ children }) {
  return (
    <div style={{ border: '2px dashed purple', padding: '1rem', marginTop: '1rem' }}>
      <h4>Templated Section Layout (Persists State)</h4>
      <nav>
        <Link href="/templated-section/page-one" style={{marginRight: '10px'}}>Page One</Link>
        <Link href="/templated-section/page-two">Page Two</Link>
      </nav>
      {children}
    </div>
  );
}
// app/(company)/layout.js
export default function CompanyLayout({ children }) {
  return (
    <div style={{ border: '2px solid blue', padding: '1rem', marginTop: '1rem' }}>
      <h3>Company Section Layout (from Route Group)</h3>
      <nav style={{ marginBottom: '0.5rem' }}>
        <Link href="/mission" style={{ marginRight: '10px' }}>Our Mission</Link>
        <Link href="/team">Our Team</Link>
      </nav>
      {children}
    </div>
  );
}
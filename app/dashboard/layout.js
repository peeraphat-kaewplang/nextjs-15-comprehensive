// app/dashboard/layout.js
export default function DashboardLayout({ children, user, stats }) {
  return (
    <div>
      <h1>Main Dashboard Area</h1>
      {children} {/* This is for app/dashboard/page.js */}
      <div style={{ display: 'flex', marginTop: '1rem', gap: '1rem' }}>
        <section style={{ border: '1px solid green', padding: '1rem', flex: 1 }}>
          <h2>User Slot</h2>
          {user}
        </section>
        <section style={{ border: '1px solid orange', padding: '1rem', flex: 1 }}>
          <h2>Stats Slot</h2>
          {stats}
        </section>
      </div>
    </div>
  );
}
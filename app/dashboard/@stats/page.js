// app/dashboard/@stats/page.js
async function getStatsData() {
  await new Promise(resolve => setTimeout(resolve, 1200)); // Simulate fetch
  return { visitors: 1234, sales: 56 };
}
export default async function StatsSlotPage() {
  const stats = await getStatsData();
  return (
    <div>
      <p>Visitors Today: {stats.visitors}</p>
      <p>Sales Today: {stats.sales}</p>
    </div>
  );
}
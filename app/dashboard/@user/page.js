// app/dashboard/@user/page.js
async function getUserData() {
  await new Promise(resolve => setTimeout(resolve, 700)); // Simulate fetch
  return { name: 'Alice Wonderland', role: 'Admin' };
}
export default async function UserSlotPage() {
  const user = await getUserData();
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
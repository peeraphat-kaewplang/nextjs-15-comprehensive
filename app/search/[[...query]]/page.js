// app/search/[[...query]]/page.js
export default function SearchPage({ params }) {
  const searchQuery = params.query ? params.query.join(' ') : 'No query';
  return (
    <div>
      <h2>Search Results</h2>
      <p>You searched for: {searchQuery}</p>
      {/* Display search results here */}
    </div>
  );
}
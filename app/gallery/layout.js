// app/gallery/layout.js
export default function GalleryLayout({ children, modal }) {
  return (
    <>
      {children} {/* Content from app/gallery/page.js */}
      {modal}    {/* Intercepted route for modal will render here */}
    </>
  );
}
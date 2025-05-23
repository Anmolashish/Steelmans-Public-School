 "use client";

export default function SchoolCalendarOnlyPDF() {
  const googleDocUrl =
    "https://drive.google.com/file/d/1e0fWa4v0bU9MKIR0mGbrBxdXTqLfSrom/preview"; // Corrected URL for embedding

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
         ACADEMIC CALANDER (2025–2026)
      </h1>
      <iframe
        src={googleDocUrl}
        className="w-full max-w-5xl h-[80vh] border rounded"
        allowFullScreen
      ></iframe>
    </div>
  );
}





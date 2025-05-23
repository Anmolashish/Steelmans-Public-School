 "use client";

export default function SchoolCalendarOnlyPDF() {
  const googleDocUrl =
    "https://docs.google.com/document/d/1LDwbmH4XEaFUUZUMMjzDrGqOQfYD7Tj8/preview"; // Embedded URL for direct display

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
        Exam Schedules 
      </h1>

      <iframe
        src={googleDocUrl}
        className="w-full max-w-[1200px] h-[90vh] border rounded-md"
        allowFullScreen
      ></iframe>
    </div>
  );
}

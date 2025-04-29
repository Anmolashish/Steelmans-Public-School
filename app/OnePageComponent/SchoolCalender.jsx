"use client";

export default function SchoolCalendarOnlyPDF() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-5">
      {/* School Calendar PDF viewer */}
      <div className="w-full max-w-[1200px] h-[600px]">
        <h1 className="text-3xl font-bold text-center mb-5">School Calendar</h1>
        <div className="w-full h-full">
          <iframe
            src="https://publuu.com/flip-book/860750/1886425"
            width="100%"
            height="100%"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
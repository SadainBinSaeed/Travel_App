// import React from "react";
// import { ImageIcon } from "lucide-react";

// export default function FileUploadCard() {
//   return (
//     <div className="w-full max-w-md mx-auto">
//       {/* Card */}
//       <div className="bg-gray-900 rounded-2xl shadow-md border border-gray-700 p-6">
//         {/* Top Section */}
//         <div className="flex items-center gap-3">
//           {/* Left Icon */}
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-indigo-400">
//             <ImageIcon size={26} />
//           </div>

//           {/* Right Text */}
//           <div>
//             <h2 className="text-lg font-semibold text-white">Upload Files</h2>
//             <p className="text-sm text-gray-400">
//               Select and Upload the files of your choice
//             </p>
//           </div>
//         </div>

//         {/* Dashed Border Upload Box */}
//         <div className="mt-6 border-2 border-dashed border-gray-600 rounded-xl px-15 py-20 text-center">
//           <p className="text-gray-200 font-medium">
//             Choose file or drag & drop it here
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             Select and Upload the files of your choice
//           </p>
//         </div>


//   <div className="mt-10 flex justify-center">
//         <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
//           Submit for Review
//         </button>
//       </div>

//       </div>

//       {/* Button (outside card) */}
    

//     </div>
//   );
// }




import React, { useState } from "react";
import { ImageIcon, X } from "lucide-react";

function FileUploadCard({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose} // overlay click close
      />

      {/* Card */}
      <div className="relative bg-gray-900 rounded-2xl shadow-md border border-gray-700 p-6 w-full max-w-md z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Top Section */}
        <div className="flex items-center gap-3">
          {/* Left Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-indigo-400">
            <ImageIcon size={26} />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-lg font-semibold text-white">Upload Files</h2>
            <p className="text-sm text-gray-400">
              Select and Upload the files of your choice
            </p>
          </div>
        </div>

        {/* Dashed Border Upload Box */}
        <div className="mt-6 border-2 border-dashed border-gray-600 rounded-xl px-10 py-20 text-center">
          <p className="text-gray-200 font-medium">
            Choose file or drag & drop it here
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Select and Upload the files of your choice
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
            Submit for Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default FileUploadCard;
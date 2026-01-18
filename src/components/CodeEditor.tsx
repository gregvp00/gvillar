"use client";

import React from "react";

interface CodeEditorProps {
  highlightedCode: {
    appPreviewHtml: string;
    appNavHtml: string;
    appBottomDrawerHtml: string;
  };
}

export default function CodeEditor({ highlightedCode }: CodeEditorProps) {
  const { appPreviewHtml, appNavHtml, appBottomDrawerHtml } = highlightedCode;

  return (
    <div className="text-left text-sm [&_pre]:whitespace-pre-wrap [&_pre]:break-words h-[70vh] overflow-y-auto rounded-lg border border-gray-700">
      {/* Bloque para AppPreview.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppPreview.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: appPreviewHtml }}
        />
      </div>

      {/* Bloque para AppNav.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppNav.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: appNavHtml }}
        />
      </div>

      {/* Bloque para AppBottomDrawer.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppBottomDrawer.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: appBottomDrawerHtml }}
        />
      </div>
    </div>
  );
}

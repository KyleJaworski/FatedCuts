// BooksyWidget.tsx
import Script from 'next/script'

const BooksyWidget = () => {
  return (
    <div>
      {/* Load the Booksy widget script */}
      <Script
        src="https://booksy.com/widget/code.js?id=1349497&country=us&lang=en-US"
        strategy="afterInteractive"
      />

      {/* Add a container for the widget */}
      <div
        id="booksy-widget-container"
        className="fixed right-5 bottom-5 z-50" // Tailwind classes for positioning
      >
        {/* Custom CSS to override the widget's default styles */}
        <style>
          {`
            .booksy-widget-container {
              position: fixed !important;
              bottom: 20px !important;
              right: 20px !important;
              top: auto !important; /* Reset top positioning */
              left: auto !important; /* Reset left positioning */
              z-index: 1000 !important;
            }
    
         
          `}
        </style>
      </div>
    </div>
  )
}

export default BooksyWidget

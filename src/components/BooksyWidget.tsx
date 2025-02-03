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
  top: 20px !important; /* Position it near the top */
  left: 50% !important; /* Center horizontally */
  transform: translateX(-50%) !important; /* Offset by half its width */
  z-index: 1000 !important;
  color: black !important;

            a.booksy-business-link{
           background: none}
}

    
         
          `}
        </style>
      </div>
    </div>
  )
}

export default BooksyWidget

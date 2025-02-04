// BooksyWidget.tsx
import Script from 'next/script'
import { useEffect } from 'react'

export const BooksyWidget = () => {
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
  display: none !important;
  
background-color: white !important;
            a.booksy-business-link{
           background: none}
}

    
         
          `}
        </style>
      </div>
    </div>
  )
}

export function MenuComponent() {
  // Function to trigger a click on the Booksy widget button
  const openBooksyWidget = () => {
    const tryClick = () => {
      const booksyButton = document.querySelector(
        '.booksy-widget-button',
      ) as HTMLElement | null
      if (booksyButton) {
        booksyButton.click() // ✅ Simulate click
      } else {
        console.warn('Booksy widget not found yet, retrying...')
        setTimeout(tryClick, 500) // 🔄 Retry every 500ms until found
      }
    }
    tryClick()
  }

  return (
    <div>
      {/* Menu Item to open Booksy */}
      <button onClick={openBooksyWidget} className="bg-blue-500 p-2 text-white">
        Open Booking
      </button>
    </div>
  )
}

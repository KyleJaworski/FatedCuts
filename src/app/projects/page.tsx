'use client'
import { useState } from 'react'
import { Container } from '@/components/Container'

export default function Projects() {
  const [showWidget, setShowWidget] = useState(true) // Set to true if you want to display it immediately

  return (
    <Container>
      {/* Overlay */}
      {showWidget && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative h-[700px] w-[800px] rounded-lg bg-white p-4 shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowWidget(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Booksy Widget */}
            <div className="booksy-widget-dialog h-full border-0">
              <iframe
                id="16b01d4a09"
                className="h-full w-full border-0"
                src="https://booksy.com/widget/index.html?id=1349497&amp;businessId=&amp;appointmentUid=&amp;lang=en-US&amp;country=us&amp;mode=dialog&amp;theme=default&amp;uniqueId=16b01d4a09"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

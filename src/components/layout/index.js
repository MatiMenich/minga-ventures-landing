import React from 'react'
import { useState } from 'react'
import Navbar from "../navbar"
import Backdrop from '../backdrop'

import './_styles.scss'

/**
 * Renders the layout component with a mobile sidebar toggle.
 *
 * @param {JSX.Element} children - The child components to render within the layout.
 * @return {JSX.Element} The layout component.
 */
export default function Layout({children}) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen)
  }

  return (
    <div className="minga-ventures">
      <Navbar toggleMobileSidebar={toggleMobileSidebar} isMobileSidebarOpen={isMobileSidebarOpen} />

      <Backdrop
        show={isMobileSidebarOpen}
        onClick={toggleMobileSidebar}
      />

      <main className={isMobileSidebarOpen ? 'mobile-sidebar--active' : ''}>
        {children}
      </main>
    </div>
  )
}

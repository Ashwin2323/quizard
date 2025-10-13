import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../components/ui/sidebar'


export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
    </div>
  )
}

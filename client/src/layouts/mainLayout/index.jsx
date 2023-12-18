import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'

import Footer from '../footer';
import { PositionProvider } from '../../context';

function MainLayout() {
  return (
    <>
      <PositionProvider>
        <Navbar />
      </PositionProvider>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
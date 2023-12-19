import { Outlet, useLocation } from 'react-router-dom'

import { useEffect } from 'react'

export const Root = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Outlet />
    </>
  )
}

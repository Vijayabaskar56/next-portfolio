import React from 'react'

const CSSSVG = (
  { className, pathClassName }:
  { className?: string, pathClassName?: string }
) => {
  return (
   <>
   <svg  width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.272 6.044L7.539 9.74H22.57l-.472 2.378H7.053l-.722 3.696h15.033l-.846 4.216-6.049 2.004-5.251-2.004.362-1.828H5.884L5 22.632l8.686 3.324 10.003-3.324L27 6.044z" className={pathClassName}/></svg>
   </>
  )
}

export default CSSSVG
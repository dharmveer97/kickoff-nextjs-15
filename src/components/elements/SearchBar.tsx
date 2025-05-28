'use client'

import React, { useEffect, useRef, useState } from 'react'

const SearchBar = ({
  setSearch,
  updateUrlParams,
  searchCategory,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState('')
  const timeoutRef = useRef(null)

  const debouncedSearch = (value) =>
    new Promise((resolve) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setSearch(value)
        updateUrlParams(1)
        resolve()
      }, 800)
    })

  const onSearchChange = async (value) => {
    setSearchValue(value)
    await debouncedSearch(value)
  }

  const onClearSearch = () => {
    setSearchValue('')
    setSearch('')
    updateUrlParams(1)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    // Cleanup function to clear timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []) // Empty dependency array to run only once

  const placeholder =
    !searchCategory || searchCategory === 'null' ? 'context' : searchCategory

  return (
    <div className="w-full max-w-md">
      <div className="flex space-x-2">
        <Input
          id="search"
          className="flex-1 rounded-r-md w-full"
          placeholder={`Search by ${placeholder}...`}
          value={searchValue}
          onValueChange={(value) => onSearchChange(value)}
          onClear={onClearSearch}
          isClearable
          {...props}
        />
      </div>
    </div>
  )
}

export default SearchBar

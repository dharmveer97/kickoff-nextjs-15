'use client'

import React from 'react'

import Image from 'next/image'

import config from '@/utils/config'

const Logo = () => (
  <div>
    <Image src="/images/logo.png" width={100} alt={config.siteName} />
  </div>
)

export default Logo

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, logPageView } from '../lib/ga'; // Adjust the path as needed

export default function ClientAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
    logPageView(pathname);
  }, [pathname]);

  return null;
}

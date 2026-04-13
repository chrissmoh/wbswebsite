import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'WBS Research Solutions Professionals',
  description: 'Official WBS website for academic consultancy, training programs, publications, admissions, internship applications, and client communication.',
  keywords: ['WBS', 'research support', 'academic consultancy', 'training', 'publications', 'internship'],
  openGraph: {
    title: 'WBS Research Solutions Professionals',
    description: 'Academic consultancy website with integrated Laravel backend services and inquiry forms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WBS Research Solutions Professionals',
    description: 'Academic consultancy website with integrated backend management.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}

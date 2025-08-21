import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

describe('Hero Component', () => {
  it('renders the main heading with name', () => {
    render(<Hero />)
    
    expect(screen.getByText('Hi, my name is')).toBeInTheDocument()
    expect(screen.getByText('Soham Sonar')).toBeInTheDocument()
  })

  it('renders the main description', () => {
    render(<Hero />)
    
    expect(screen.getByText(/I like to build out of the box software/)).toBeInTheDocument()
    expect(screen.getByText(/Python programming language/)).toBeInTheDocument()
    expect(screen.getByText(/machine learning/)).toBeInTheDocument()
    expect(screen.getByText(/Large Language Models/)).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    
    expect(screen.getByText('View My Work')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    
    expect(screen.getByText('Scroll down')).toBeInTheDocument()
  })
})
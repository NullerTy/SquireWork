
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        style={{
          color: 'black',
          fontFamily: 'sans-serif',
          fontSize: '23px',
          fontWeight: 'bold',
          
        }}
        {...props}
      >
        {children}
      </h1>
    ),

    a: ({ children, ...props }) => (
      <a
        style={{
          color: 'red',
          fontFamily: 'sans-serif',
          fontSize: '17px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        {...props}
      >
        {children}
      </a>
    ),
    
    img: (props) => (
      <Image
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}

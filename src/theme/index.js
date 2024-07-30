// src/theme.js
import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'

const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable', sans-serif`,
    body: `'Inter Variable', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        _disabled: {
          bg: '#E4E4E4',
          color: '#CCCCCC',
          cursor: 'not-allowed',
        },
      },
      variants: {
        primary: {
          fontSize: '14',
          px: '12px',
          py: '8px',
          bg: '#FFCD00',
          border: '1px solid',
          borderColor: '#0000001A',
          _hover: {
            bg: '#F3C400',
            borderColor: '#0000001A',
          },
          _active: {
            bg: '#E1B500',
            borderColor: '#0000001A',
          },
        },
        secondary: {
          fontSize: '14',
          px: '12px',
          py: '8px',
          bg: '#FFFFFF',
          border: '1px solid',
          borderColor: '#0000001A',
          _hover: {
            bg: '#F4F4F4',
            borderColor: '#0000001A',
          },
          _active: {
            bg: '#ECECEC',
            borderColor: '#0000001A',
          },
        },
        destructive: {
          fontSize: '14',
          px: '0.75rem',
          py: '0.5rem',
          bg: 'var(--btn-destructive)',
          border: '1px solid ',
          borderColor: 'var(--btn-border)',
          color: 'var(--btn-destructive--foreground)',
          _hover: {
            bg: 'var(--btn-destructive--hover)',
            borderColor: 'var(--btn-border)',
          },
          _active: {
            bg: 'var(--btn-destructive--pressed)',
            borderColor: 'var(--btn-border)',
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        body: {
          padding: 0, // Removes padding specifically from the ModalBody
        },
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            fontSize: '14px',
            fontWeight: 400,
          },
        },
      },
    },
  },
})

export default theme

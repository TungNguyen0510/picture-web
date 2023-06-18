export const style = () => ({
  container: {
    fontFamily: 'Tahoma',
    display: 'flex',
    position: 'relative',
    gap: '30px',
    '.span-affter': {
      position: 'relative',
      width: '120px',
      height: '120px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
      '.span-affter-label': {
        fontSize: '6em',
        fontWeight: 700,
        color: 'transparent',
        transition: '0.5s ease-in-out',
      },
      ':hover .span-affter-label': {
        opacity: 0,
      },
      '.span-before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 0,
        fontSize: '6em',
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: '120px',
        overflow: 'hidden',
        transition: '0.5s ease-in-out',
      },
      ':hover .span-before': {
        height: '100%',
      },
    },
  },
})

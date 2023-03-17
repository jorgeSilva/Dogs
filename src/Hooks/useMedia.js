import React from 'react'

const useMedia = (media) => {

  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    function chancheMatch(){
      const {matches} = window.matchMedia(media)
      setMatch(matches)
    }
    chancheMatch()
    window.addEventListener('resize', chancheMatch)
    return () => {
      window.removeEventListener('resize', chancheMatch)
    }
  }, [media])

  return match
}

export default useMedia
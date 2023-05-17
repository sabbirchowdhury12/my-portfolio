import { useEffect, useState } from 'react'
import darkModeContext from './context/darkModeContext'
import Header from './components/Header/Header'



function App() {

  const [isDarkMode, setIsDarkMOde] = useState<boolean>(false)

  const toggleIsDarkMood = (): void => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
    setIsDarkMOde(!isDarkMode)
  }

  useEffect(() => {
    const isDark: boolean = localStorage.getItem('isDarkMode') == 'true'
    setIsDarkMOde(isDark)
  }, [isDarkMode])

  return (
    <darkModeContext.Provider value={{ toggleIsDarkMood, isDarkMode }}>
      <Header />
    </darkModeContext.Provider>
  )
}

export default App

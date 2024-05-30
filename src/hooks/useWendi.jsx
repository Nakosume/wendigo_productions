import { useContext } from 'react'
import { WendiContext } from '../context/WendiContext'

export function useWendi () {
  const context = useContext(WendiContext)

  if (!context) {
    throw new Error('This Component should be within TaskContextProvider')
  }
  return { ...context }
}

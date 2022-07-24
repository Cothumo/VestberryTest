import React from "react"
import { useTheme } from "../hooks/useTheme"
import styles from '../App.scss'

const themeColors = ["#808080", '#A7EB88', '#522558', "#bF5604", "#ffffff",]

export default function ThemeSelector() {
  const { changeColor } = useTheme()


  return (
    <div style={{marginLeft: 700,}}>
      <div className={styles.buttons}>
        {themeColors.map(color => (
          <div 
            key={color} 
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
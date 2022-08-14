import React from "react"
import { useTheme } from "../hooks/useTheme"
import styles from '../App.scss'

const themeColors = ["rgba(255, 219, 71, 0.7)", 
"rgba(41, 163, 213, 0.5)", 
"rgba(174, 70, 255, 0.5)", 
"rgba(255, 121, 0, 0.5)", 
"#" + ((1<<24)*Math.random() | 0).toString(16),]

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
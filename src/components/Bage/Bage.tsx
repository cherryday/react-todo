import styles from './Bage.module.css'

export const BAGE_COLORS = ['#C9D1D3', '#42B883', '#64C4ED', '#FFBBCC', '#B6E6BD', '#C355F5', '#09011A', '#FF6464'] as const

interface BageProps {
  color: typeof BAGE_COLORS[number];
}

export const Bage = ({ color }: BageProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: color }} className={styles.bage}></div>
  )
}
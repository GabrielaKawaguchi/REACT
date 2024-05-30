import styles from './index.module.css'

interface Props {
    type: 'text' | 'email'| 'number'
    placeholder: string
    defaultValue: string
}

export default function InputFatec({type, placeholder, defaultValue}:Props){
    return(
        <input className={styles.inputFatec} 
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}/>
    )
}
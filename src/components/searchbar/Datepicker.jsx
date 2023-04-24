import React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import uk from 'date-fns/locale/uk';
import styles from './DatePicker.module.css'

registerLocale('uk', uk)
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={styles.datepicker_container}>
             <DatePicker
                id="DatePicker"
                className={styles.input} 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} locale="uk"
                minDate={new Date()}
                dateFormat="dd.MM.yyyy"
                withPortal
                placeholderText='Дата'
                
            />
            <label htmlFor="DatePicker" className={styles.placeholder}>Дата:</label>
        </div>
    );
};

export default Datepicker;
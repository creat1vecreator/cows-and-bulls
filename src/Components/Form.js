import React, {useState} from "react";
export const Form = () => {
    let [value, setValue] = useState("");

    return(
        <form>
        <div className="form-group">
            <label htmlFor="checking-numbers">Введите цифры</label>
            <input type="text" className="checking-numbers"
                   id="lala"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}/>
        </div>
            <button className="btn btn-primary">Проверить</button>
        </form>
    )
}
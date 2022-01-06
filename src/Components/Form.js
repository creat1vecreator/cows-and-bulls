import React, {useState} from "react";
export const FormComponent = () => {
    let [value, setValue] = useState("");
    return(
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="text" className="form-control"
                   id="lala"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}/>
        </div>
            <button className="btn btn-primary" type="submit">Проверить</button>
        </form>
    )
}
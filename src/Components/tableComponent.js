import {useSelector} from "react-redux";

export const Table = () => {
    const cows = useSelector(state => state.check.cows);
    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">№ Хода</th>
                <th scope="col">Быки</th>
                <th scope="col">Коровы</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
            </tr>
            </tbody>
        </table>

    )
}
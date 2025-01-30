import { useState } from "react";

export default function ListComponent({ todos , updateDone}) {
    const [done, setDone] = useState(false)
    if (todos.length !== 0) {
        return (
            <table >
                <thead>
                    <th>num</th>
                    <th>nom</th>
                    <th>Descriptions</th>
                    <th>Actions</th>
                </thead>
                <tbody >

                    {todos.map((todo, index) =>
                        <tr >
                            <td>{index+1}</td>
                            <td>{todo.nom}</td>
                            <td>{todo.desc}</td>
                            <td> <span><button>Modifier</button> <button>Supprimer</button><input type="checkbox" checked={todo.done} onChange={(event) => updateDone(todo.id, event.target.checked)}
                            /></span></td>
                        </tr>)}


                </tbody>
            </table>)
    } else {
        return (<p> Pas de tâches disponibles ! </p>
        )
    }


}
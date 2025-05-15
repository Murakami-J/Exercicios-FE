import { Outlet } from "react-router-dom";

export function Cabecalho() {
    return (
        <div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Crud Axios</li>
                    <li>Teste</li>
                </ul>
                <button>Login</button>
            </div>
            <Outlet/>
        </div>
    )
}
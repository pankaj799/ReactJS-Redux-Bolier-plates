import 'antd/dist/antd.css';
import { Layout } from "antd";
import { useHistory } from "react-router";
import "./header.css";

const { Header } = Layout;

const AppHeader = () =>{
    const history = useHistory();
    return(
        <Header className="App-header">
            hello1
        </Header>
    )
}

export default AppHeader;
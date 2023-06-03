import Home from "./Components/MainCom/Home";
import Sidebar from "./Components/LeftSide/Sidebar";
import styles from './app.module.css'

export default function App() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Home />
    </div>
  )
}

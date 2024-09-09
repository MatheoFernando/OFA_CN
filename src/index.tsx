/// <reference no-default-lib="true"/>
//import { NavBar } from "@/components/ui_base/navBar";
import Footer from "@/components/ui_base/footer";
import { Outlet } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <div>
      {
        
        //  <NavBar />
    }
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

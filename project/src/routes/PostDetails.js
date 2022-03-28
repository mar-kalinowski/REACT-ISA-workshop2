import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";

export const PostDetails =() => {
    const params = useParams();
    console.log(params)
  return (
    <div>
     <Header />
     Szczegóły postu
     <Content />
     <Footer />
    </div>
  );
}


import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { SideBar } from "./components/SideBar";
import { Video } from "./components/Video";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string,
  title: string
}

function App() {
  //  useEffect( () => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then( response => {
  //     console.log(response);
  //   })
  //  }, []);
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  return (
    <Event/>
    // <div>
    //   <SideBar></SideBar>,
    //   <Video></Video>,
    //   <Lesson></Lesson>
    // </div>
  )
}

export default App

import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event (){

    const { slug } = useParams<{slug: string}>();

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                { slug ? 
                <Video lessonSlug={slug}/> : 
                <div className="flex-1 flex flex-col w-full justify-center items-center group">
                    <img className="w-[30%] max-w-[320px] opacity-80 group-hover:opacity-100" draggable="false" src="/src/assets/icons/the_search.svg" alt="Não encontrado" />
                    <div className="w-[50%] max-w-[270px] flex flex-col justify-center items-center">
                        <strong className="font-bold text-2xl text-gray-200 mt-4 mb-2">Ops !</strong>
                        <span className="text-sm text-gray-200 text-center leading-relaxed">Não foi possível encontrar nenhum vídeo ... Tente selecionar outro vídeo ou tente novamente mais tarde.</span>
                    </div>
                </div> 
                }
                <SideBar/>
            </main>
        </div>
    )
}
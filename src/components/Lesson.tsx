import { CheckCircle } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";


interface LessonProps {
    title: string
    slug: string
    availabeAt: Date
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps){

    const { slug } = useParams<{slug: string}>();

    const isLessonAvailable = isPast(props.availabeAt);
    const availableDateFormatted = format(props.availabeAt, "EEEE' • 'd' de ' MMMM ' • ' k'h'mm", {
        locale: ptBR
    })

    const isActivateLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300 ">
                {availableDateFormatted}
            </span>

            <div className={classNames(
                'rounded border border-gray-500 p-4 mt-2group-hover:border-green-500', {
                    'bg-green-500' : isActivateLesson
                })}
            >
                <header className="flex items-center justify-between">
                    { isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                        ) :
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Em breve
                        </span>
                     }
                    <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-white border font-bold", {
                        'border-white': isActivateLesson,
                        'border-green-300': !isActivateLesson
                    })}>
                        {props.type == 'live' ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>

                <p></p>
                <strong className={classNames("mt-5 block", {
                    "text-white": isActivateLesson,
                    "text-gray-200": !isActivateLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>

    )
}
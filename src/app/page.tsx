"use client"

import { type ReactElement, useContext} from "react";
import Initial from "~/components/initial";
import InTransition from "~/components/inTransition";
import Transitioned from "~/components/transitioned";
import { MainContext } from "~/context/MainProvider";

type View = {
  initial: ReactElement, 
  transitioning: ReactElement, 
  done: ReactElement
}

export default function HomePage() {
  const context = useContext(MainContext);

  if (!context) return <div>Error</div>

  const StartTransition = () => {
    context.setPageState(1)

    setTimeout(() => {
      context.setPageState(2)
    }, 2000)
  }

  const views: View = {
    initial: <Initial StartTransition={StartTransition} />,
    transitioning: <InTransition />,
    done: <Transitioned />
  }

  const order = [views.initial, views.transitioning, views.done]

  return (
    order[context.pageState] 
  );
}

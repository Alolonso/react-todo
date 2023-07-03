import { ReactComponent as CheckSVG} from "./check.svg";
import { ReactComponent as CloseSVG} from "./close.svg";
import { ReactComponent as SearchSVG } from "./search.svg";

const iconTypes = {
    "check": <CheckSVG/>,
    "close": <CloseSVG/>,
    "search": <SearchSVG/>,
}

function ToDoIcon ({type}) {
    return (
        <>
            {iconTypes[type]}
        </>
    )
}

export {ToDoIcon};
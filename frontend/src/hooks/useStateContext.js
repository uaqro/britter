import { useContext } from 'react';
import { MyContext } from '../contexts/context';

export const useStateContext = () => {
    const context = useContext(MyContext);
    console.log(context)
    return [context.state, context.updateAction]
}
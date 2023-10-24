import { createContext } from 'react';
import linkData from '../data/Data';


export const MyContext = createContext();

 function MyProvider({ children }) {

const shareData = linkData
  return (
    <MyContext.Provider value={shareData}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider
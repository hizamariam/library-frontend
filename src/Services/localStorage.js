export const setItemToLocalStorage = (key, value)=>{
   try {
        window.localStorage.setItem(key, value)
   } catch (error) {
    
   }
}

export const getItemFromLocalStorage = (key)=>{
   return window.localStorage.getItem(key) ?? null;
}

export const removeItemFromLocalStorage = (key)=>{
    return window.localStorage.removeItem(key);
 }
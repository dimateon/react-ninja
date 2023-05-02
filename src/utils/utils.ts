export const getCurrentDate = (): string => {
    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();
    const dateTime = date+' '+time;
 
    return dateTime;
}

export const getRandomId = () => Math.ceil(Math.random() * new Date().getTime());
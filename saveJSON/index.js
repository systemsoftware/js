const saveObject = (key="",object) => {localStorage.setItem(key,JSON.stringify(object))}
const getObject = (key) => { return JSON.parse(localStorage.getItem(key)) }

const tostring = (value) => { 
if(value && typeof value != "string") value = typeof value == "object" ? JSON.stringify(value) : String(value)
return value
}

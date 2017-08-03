

function capitalizeFirstLetter(s){
    return s.split(/(?=[A-Z])/).join(" ").replace(/^./, (char) => char.toUpperCase());
}

export {capitalizeFirstLetter};
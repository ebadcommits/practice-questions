convert = (minutes)=> {
    let hours = Math.floor(minutes / 60);
    let remainingminutes = minutes % 60

    console.log(`${hours} hours and ${remainingminutes} minutes`);
}

convert(145)
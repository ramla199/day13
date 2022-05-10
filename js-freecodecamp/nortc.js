function grabLast(obj) {
    const lastKey = obj[Object.keys(obj).pop()];
    console.log(lastKey);
    const lastEl = Array.isArray(lastKey) ? lastKey[lastKey.length - 1] : '';
    console.log(lastEl);
    return lastKey;
}

grabLast({
    studio: '20th Century Animation',
    mainCharacter: 'Blu',
    films: ['Rio', 'Rio 2'],
})

// should return 'Rio 2'

// grabLast({
//     studio: 'DreamWorks',
//     mainCharacter: 'Shrek',
//     films: ['Shrek', 'Shrek 2', 'Shrek The Third', 'Shrek Forever After'],
// })
// // should return 'Shrek Forever After'

// grabLast({
//     studio: 'Pixar',
//     mainCharacter: 'Carl Fredricksen',
//     films: ['Up'],
// })
// // should return 'Up'
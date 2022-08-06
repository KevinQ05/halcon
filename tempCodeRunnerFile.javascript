function populateLocalStorage(args) {
    for (const [key, value] of Object.entries(args)) {
        console.log(`${key}: ${value}`)
    }
}

populateLocalStorage({caca: "pedo", humberto: "caca"})
export const formatMtaData = (data) =>{
    const stations = Object.keys(data.stations)
    const formatted = []
    stations.forEach((station) =>{
        const arrivals = data.stations[station]
        arrivals.trains.forEach((arrival) => {
            arrival.stationName = arrivals.name
            arrival.direction = station[station.length-1]
            formatted.push(arrival)
        })
    })
    const sorted = formatted.sort((a,b) => a.rawEta < b.rawEta ? -1 : 1)
    return sorted
}
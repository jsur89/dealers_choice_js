const data = [
    id: 1, make: "Jeep", model: "Grand Cherokee", upvotes: 257},
    id: 2, make: "Jeep", model: "Wrangler", upvotes: 400},
    id: 3, make: "Jeep", model: "Renegade", upvotes: 32},
    id: 4, make: "Jeep", model: "Gladiator", upvotes: 433},
    id: 5, make: "Jeep", model: "Wagoneer", upvotes: 166},
    id: 6, make: "Dodge",model: "Charger", upvotes: 744},
    id: 7, make: "Dodge",model: "Challenger", upvotes: 722},
    id: 8, make: "Plymouth", model: "Voyager", upvotes: 288},
    id: 9, make: "Ram", model: "1500", upvotes: 544},
    id: 10, make: "Chrysler", model: "Pacifica", upvotes: 206},
]
const list = () {
    return [...data] //returning a copy of the arrary
};
const find = (id) => {
    const post = data.find(post => post.id === +id)
};

module.exports = {list: list, find: find}
///

let stories = [{
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://phantom-marca.unidadeditorial.es/70cdeb1501a33c2c567dabbebc270ddd/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/17/16371568440299.jpg",
    description: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people) worldwide.",
}, ];


// METHOD: GET
export const list = (req, res) => {

    return res.status(200).json({
        ok: true,
        data: stories,
    });
};


// METHOD: POST
export const store = (req, res) => {

    const body = req.body;
    body.id = stories.length + 1;
    stories.push(body);

    return res.status(201).json({
        ok: true,
        data: "Store Success",
    });
};


// METHOD: PUT
export const update = (req, res) => {

    let id_story = +req.params.id;
    let body_story = req.body;
    let indice = stories.findIndex((story) => story.id === id_story);
    let change = { id: id_story, ...body_story };
    stories[indice] = change;

    return res.status(200).json({
        ok: true,
        data: "Story actualizada",
        change,
    });

};


// METHOD: DELETE
export const destroy = (req, res) => {

    const { id } = req.params;
    stories = stories.filter((story) => story.id != id);
    return res.status(201).json({
        ok: true,
        data: "Story eliminada",
        stories,
    });
};
const axios = require('axios');
const baseUrl = "https://api.trello.com/1/cards/5b369f25ad1a2a68e17e7016/checklists/?key=216b1f639eddd071283572793ba0906c&token=2ff567aaa299733ed06f049b163b12ad9f8da30bfce43afc0f09ce5a7a7b7aca";
let checkLists = [];
let id = 0;

axios.get(`${baseUrl}`).then(
    response =>
        res.status(200).json(response.data)
)
    .catch(error => error)



const deleteChecklists = (req, res, next) => {
    let index = checkLists.findIndex(function (e) {
        return e.id == req.params.id
    })
    checkLists.splice(index, 1);
    res.status(200).json(checkLists);
};

const getChecklists = (req, res, next) => {
    console.log("hit")
    axios.get(`${baseUrl}`).then(
        response => {
            checkLists = response.data;
            res.status(200).json(checkLists)
        }
    )
        .catch(error => error)
};

const addChecklists = (req, res, next) => {
    checkLists.push({ name: req.body.name, id: id })
    id += 1
    res.status(200).json(checkLists);
};

const editChecklists = (req, res, next) => {
    let task = checkLists.find(function (e) {
        return e.id == req.params.id
    })
    task.name = req.body.name;
    res.status(200).json(checkLists);

};

module.exports = {
    getChecklists,
    deleteChecklists,
    addChecklists,
    editChecklists
};
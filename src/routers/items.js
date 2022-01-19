const Router = require('express').Router
const router = new Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://projetosimples:senha123@localhost:5432/data');


const Items = sequelize.define('items',{
    codigo: {type: Sequelize.STRING},
    descricao: {type: Sequelize.STRING},
    ativo: {type: Sequelize.BOOLEAN},

    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "created_at"
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "updated_at"
    },
    deletedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "deleted_at"
    }
});

router.get('/',async(req,res)=>{

    return res.json(await Items.findAll())
});

router.post('/',(req,res)=>{
    const item = req.body;
    const resp  = Items.create(item);
    res.json(resp);
});

module.exports = router;
import {Router} from 'express'
import * as apiController from '../controllers/apicontroller'

const router = Router()

router.get('/ping',apiController.ping)

router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome)

router.post('/frases', apiController.criarFrase)

router.get('/frases/:id', apiController.pegarFrases)


//Quando atualizamos API usamos PUT
router.put('/frases/:id',apiController.editaFrase)

router.delete('/frases/:id',apiController.deletaFrase)

export default router
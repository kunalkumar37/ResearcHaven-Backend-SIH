const express = require('express')

const router = express.Router()
const researchPaperController = require('../controllers/researchPaperController')
const fetchUser = require('../middleware/fetchUser')

router.post('/create', fetchUser, researchPaperController.createResearchPaper)
router.put('/update/:id', fetchUser, researchPaperController.editResearchPaper)
router.delete('/delete/:id', fetchUser, researchPaperController.deleteResearchPaper)
router.get('/published', researchPaperController.getAllPublishedResearchPapers)
router.get('/published-by-user', fetchUser, researchPaperController.getAllPublishedResearchPapersByUser)
router.get('/draft-research-papers', fetchUser, researchPaperController.getDraftResearchPapers)
router.get('/draft/:id', fetchUser, researchPaperController.getDraftById)

module.exports = router

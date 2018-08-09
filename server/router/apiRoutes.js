const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({aa: 2442211});
});

module.exports = router;
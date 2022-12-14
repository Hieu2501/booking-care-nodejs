const doctorService = require('../services/DoctorService')

const getTopDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        const response = await doctorService.getTopDoctorHome(+limit)
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(200).json({
            errorCode: -1,
            message: 'Error from server...!'
        })
    }
}

const getAllDoctor = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctor()
        res.status(200).json(doctors)
    } catch (error) {
        console.log(error);
        res.status(200).json({
            errorCode: -1,
            message: 'Error code from server'
        })
    }
}

const saveDetailDoctor = async (req, res) => {
    try {
        const response = await doctorService.saveDetailDoctorService(req.body)
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(200).json({
            errorCode: -1,
            message: 'Error from server...!'
        })
    }
}

const getInfoDoctorById = async (req, res) => {
    try {
        const doctorId = req.query.id
        const response = await doctorService.getInfoDoctorById(doctorId)
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(200).json({
            errorCode: -1,
            message: 'Error from server...!'
        })
    }
}

module.exports = {
    getTopDoctorHome, getAllDoctor, saveDetailDoctor, getInfoDoctorById
}
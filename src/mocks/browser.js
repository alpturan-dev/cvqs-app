import { setupWorker, rest } from 'msw'

const worker = setupWorker(
    rest.get('/terminal/defectentry/AI/HAT/3070725/header', (req, res, ctx) => {
        return res(
            ctx.json({ "type": "SUCCESS", "data": [{ "seqNo": 222, "bodyNo": 25073, "specData": "", "bgColor": "#ff1c23", "extCode": " 3U5", "firstname": "Yusuf Ziya", "lastname": "Başbuğ", "departmentCode": "AI", "modelName": "CHR", "companyName": "CVQS (TMMT)", "termName": "CHASSIS-2", "modelId": 23638, "assyNo": 222 }] })
        )
    }),
)
worker.start()
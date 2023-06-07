export default async function ContactForm(req, res) {
  const sendData = JSON.parse(req.body)
  const web3form = process.env.WEB3FORM
  sendData.access_key = web3form
  const completeData = JSON.stringify(sendData)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: completeData
  })
  const result = await response.json()
  if (result.success) {
    return res.status(200).json({ message: result })
  }

  return res.status(400).json({ message: result })
}

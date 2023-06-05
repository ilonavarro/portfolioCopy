export default async function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const web3form = process.env.WEB3FORM

  formData.append('access_key', web3form)
  console.log('env:', web3form)
  console.log('DBHost:', process.env.NEXT_PUBLIC_DB_HOST)
  console.log('Testing:', process.env.NEXT_PUBLIC_TEST1)

  const object = Object.fromEntries(formData)
  const json = JSON.stringify(object)

  console.log(event)

  console.log(formData)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: json
  })
  const result = await response.json()
  if (result.success) {
    console.log(result)
  }
}

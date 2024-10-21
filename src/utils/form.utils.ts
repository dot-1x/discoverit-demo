export function formDataToJson(formData: FormData) {
  const jsonObject = {} as any

  formData.forEach((value, key) => {
    // Handle cases where the same key is used for multiple values (e.g. checkboxes)
    if (jsonObject[key]) {
      if (Array.isArray(jsonObject[key])) {
        jsonObject[key].push(value)
      } else {
        jsonObject[key] = [jsonObject[key], value]
      }
    } else {
      jsonObject[key] = value
    }
  })

  return jsonObject
}

const API_URL = 'https://api.recruitexe.com/v1/api/demo/createBookDemo'

export const submitDemoRequest = async (formData) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }

    const response = await fetch(API_URL, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Network response was not ok: ${response.status}`)
    }

    const data = await response.json()

    if (!data) {
      throw new Error('No data received from the server')
    }

    return {
      success: true,
      message: data.message || 'Demo request submitted successfully',
      data,
    }
  } catch (error) {
    console.error('Error submitting demo request:', error)
    return {
      success: false,
      message: error.message || 'There was an error submitting your request. Please try again.',
    }
  }
}

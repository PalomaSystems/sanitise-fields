export const sanitize = () => {
	const sanitizeArray = document.querySelectorAll('.sanitize')
	if (sanitize != null) {
		sanitizeArray.forEach((element: HTMLFormElement) => {
			element.value = element.value.replace(/(<([^>]+)>)/ig, '')
		})
	}
}

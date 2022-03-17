export const sanitise = () => {
	const sanitiseArray = document.querySelectorAll('.sanitise')
	if (sanitiseArray != null) {
		sanitiseArray.forEach((element: HTMLFormElement) => {
			element.value = element.value.replace(/(<([^>]+)>)/ig, '')
		})
	}
}

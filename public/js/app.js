const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

document.getElementById('switchLocation').addEventListener('change', function(){
	var widget = document.querySelector('.weatherwidget-io')
	widget.href = 'https://forecast7.com/en/'+this.value
	widget.dataset.label_1 = this.options[this.selectedIndex].text
	__weatherwidget_init()
})

weatherForm.addEventListener("submit", e => {
	e.preventDefault()

	const location = search.value
	
	messageOne.textContent = "Loading..."
	messageTwo.textContent = ""

	fetch("/weather?address=" + location).then(response => {
		response.json().then(data => {
			if (data.error) {
				messageOne.textContent = data.error
			} else {
				messageOne.textContent = data.location
				messageTwo.textContent = data.forecast
			}
		})
	})
})
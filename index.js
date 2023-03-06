const colorSelector = document.getElementById('color-selector')
const modeSelector = document.getElementById('mode-selector')
const colorDisplay = document.getElementById('color-display')
const getColorSchemeBtn = document.getElementById('get-color-scheme-btn')
const formDisplay = document.getElementById('form-dislay')

formDisplay.innerHTML = 
                `
                <input type="color" id="color-selector">
                <select id="mode-selector">
                    <option disabled selected>Select color mode</option>
                    <option value="monochrome">monochrome</option> 
                    <option value="monochrome-dark">monochrome-dark</option> 
                    <option value="monochrome-light">monochrome-light</option> 
                    <option value="analogic">analogic</option> 
                    <option value="complement">complement</option> 
                    <option value="analogic-complement">analogic-complement</option> 
                    <option value="triad">triad</option> 
                    <option value="quad">quad</option>
                </select>
                <button id="get-color-scheme-btn">Get color scheme</button>
                `

getColorSchemeBtn.addEventListener('click', e => {
    e.preventDefault()
    /* Gets color scheme from 'thecolorapi' */
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.replace(/#/g, '')}&mode=${modeSelector.value}`)
        .then(response => response.json())
        .then(data => {
            let html = ''
            data.colors.forEach(info => {
                html += `
                        <div>
                            <h2 style="background-color: ${info.hex.value};"></h2>
                            <p>${info.hex.value}</p>
                        </div> 
                        `
                })
                colorDisplay.innerHTML = html
            })
    })
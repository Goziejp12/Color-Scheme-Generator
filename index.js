const colorSelector = document.getElementById('color-selector')
const modeSelector = document.getElementById('mode-selector')
const colorDisplay = document.getElementById('color-display')
const getColorSchemeBtn = document.getElementById('get-color-scheme-btn')

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
                            <p id="hex-values">${info.hex.value}</p>
                        </div> 
                        `
                })
                colorDisplay.innerHTML = html
            })
    })
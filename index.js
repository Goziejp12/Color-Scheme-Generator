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
                            <p id="hex-code" onclick="copyHexCode()">${info.hex.value}</p>
                        </div> 
                        `
                })
                colorDisplay.innerHTML = html
            })
    })
    
    function copyHexCode() {
        let textRange = document.createRange()
            textRange.selectNode(document.getElementById('hex-code'))
            window.getSelection().removeAllRanges() //clear current selection
            window.getSelection().addRange(textRange) // to select text
            document.execCommand("copy")
            window.getSelection().removeAllRanges() // to deselect
            alert("data copied")
    } 
    
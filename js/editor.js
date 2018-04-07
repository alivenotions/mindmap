const [textarea] = document.getElementsByTagName('textarea')

textarea.addEventListener('keydown', function(event) {
    
    if ( event.keyCode === 9 ) {

        const selectionStartPos = this.selectionStart
        const selectionEndPos = this.selectionEnd
        const oldContent = this.value

        this.value = oldContent.substring( 0, selectionStartPos ) + '  ' + oldContent.substring( selectionEndPos )

        this.selectionStart = this.selectionEnd = selectionStartPos + 2

        event.preventDefault()
    }
})
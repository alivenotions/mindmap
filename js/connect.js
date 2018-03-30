jsPlumb.ready(() => {
    jsPlumb.setContainer(document.getElementById('wrapper-container'))
    const draggableElements = document.querySelectorAll('.draggable-element')
    jsPlumb.draggable(draggableElements)
    const defaultProps = {
        anchor: 'AutoDefault',
        connector: 'Bezier',
        endpoint: 'Blank',
        paintStyle: {stroke: '#aaa', strokeWidth: 4}
    }

    jsPlumb.connect({ 
        source: document.getElementById('div1'),
        target: document.getElementById('div2'),
        ...defaultProps
    })

    jsPlumb.connect({
        source: document.getElementById('div1'),
        target: document.getElementById('div3'),
        ...defaultProps
    })
})
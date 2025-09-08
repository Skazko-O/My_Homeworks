const toast = {
    options: {
        autoclose: true,
        position: 'left top',
        timeout: 3000
    },
    style: {
        position: 'fixed',
        top: '80px',
        left: '20px',
        border: '1px solid #9999',
        borderRadius: '4px',
        backgroundColor: '#eee',
        padding: '15px',
        zIndex: '1100',
        width: '400px'
    },
    types: {
        success: {
            borderColor: '#004600',
            backgroundColor: '#cbffcb'
        },
        error: {
            borderColor: '#560001',
            backgroundColor: '#ffcbcb'
        },
        warning: {
            borderColor: '#b88100',
            backgroundColor: '#fff2cb'
        },
        info: {
            borderColor: '#006192',
            backgroundColor: '#cbf8ff'
        }
    },
    init() {
        Object.keys(this.types).forEach(type => {
            this[type] = (text, opts = {}) => {
                this.show(type, text, { ...this.options, ...opts })
            }
        })
    },
    show(type, text, options) {
        const div = document.createElement('div')
        div.id = 'my-toast'        
        Object.entries({ ...this.style, ...this.types[type] }).forEach(([prop, value]) => {
            div.style[prop] = value
        })
        const p = document.createElement('p')
        p.innerText = text
        div.append(p)

        if (!options.autoclose) {
            const button = document.createElement('button')
            button.type = 'button'
            button.innerText = 'x'
            button.onclick = () => { this.hide(0) }
            div.append(button)
        }
        if (document.getElementById('my-toast')) {
            this.hide(0)
        }

        document.body.prepend(div)
        options.autoclose && this.hide(options.timeout)
    },
    hide(timeout = 0) {
        const el = document.getElementById('my-toast')
        if (el === null) return
        if (timeout === 0) {
            el.remove()
            return
        }
        setTimeout(() => {
            el.remove()
        }, timeout)
    }
}

toast.init()
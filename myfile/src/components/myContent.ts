

interface HelloWorld {
    complier: string,
    frams: string
}

let MyContent = (props: HelloWorld) => {
    const { complier, frams } = props
    return (
        'ff' + {complier} + {frams}
    )
}

export default MyContent

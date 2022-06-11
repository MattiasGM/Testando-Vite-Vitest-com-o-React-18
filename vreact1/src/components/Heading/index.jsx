import P from 'prop-types'

export const Heading = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Heading.prototype = {
    children: P.node.isRequired,
}

import './text.css';

export const Text = (props) => {
    const {
        as = 'h1', 
        children,
        ...attrs
    } = props;

    const Element = as;

    return <Element className="Text" {...attrs}>{children}</Element>
}

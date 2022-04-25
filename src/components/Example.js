const Example = (props) =>{
    return (
    <span>{props.massage}, {props.name}</span>
    );
};

const withLoggerHOC = function(Component) {
    return(props) => {
        console.log(props);
        const extProps = { ...props, name: 'Dima'};
        return <Component { ...extProps}/>;
    }
}

export default withLoggerHOC(Example);
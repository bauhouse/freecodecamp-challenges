
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date = Date()}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate />
      </div>
    );
  }
};

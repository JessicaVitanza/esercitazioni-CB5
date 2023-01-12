export function ComponentSelector(props) {

    const { selectChangeHandler } = props;
  
    return (
      <form>
        <select defaultValue={''} onChange={selectChangeHandler}>
          <option disabled value="">Select a component</option>
          <option value='counter'>Counter</option>
          <option value='bloodTypes'>Blood type</option>
          <option value='beers'>Beers</option>
          <option value='cards'>Credit cards</option>
          <option value='users'>Users</option>
        </select>
      </form>
    )
  }
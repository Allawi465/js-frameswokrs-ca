import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return <div><Spinner animation="grow" style={{color: 'white'}} /></div>;
}

export default Loading;
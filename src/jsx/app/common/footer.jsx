export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 1
    };
  }
  componentDidMount() {
    this.setState({
      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
    });
  }
  render() {
    return (
      <div id='footer-container'>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div style={{fontSize:12}}>© 2016 Jiggieapp.com - v&nbsp;{this.state.version}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

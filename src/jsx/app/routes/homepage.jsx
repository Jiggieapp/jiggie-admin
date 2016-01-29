import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/dashboard');
  },
  componentDidMount: function() {
    $('html').addClass('authentication');
  },
  componentWillUnmount: function() {
    $('html').removeClass('authentication');
  },
  render: function() {
    return (
      <Container id='auth-container' className='login'>
        <Container id='auth-row'>
          <Container id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12}>

                        <div className='text-left bg-purple fg-white' style={{marginTop:80, padding:23}}>
                          <img src='/imgs/logo.png'  alt='logo' />
                        </div>
                        <div className='bg-purple fg-white text-left' style={{paddingLeft:23, fontSize:12}}>
                          <div>You need to sign in for those awesome features</div>
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={this.back}>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon style={{fontSize:14}}>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroupAddon>
                                  <Input style={{fontSize:14}} autoFocus type='email' id='emailaddress' className='border-focus-blue' placeholder='admin@jiggieapp.com' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon style={{fontSize:14}}>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroupAddon>
                                  <Input style={{fontSize:14}} type='password' id='password' className='border-focus-blue' placeholder='password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{paddingTop: 10, fontSize:12}}>
                                       <Link to='/'>Forgot Password!</Link>
                                    </Col>
                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                      <Button outlined lg type='submit' bsStyle='lightpurple' onClick={this.back}>Login</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>

                </Col>
              </Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    );
  }
});

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
